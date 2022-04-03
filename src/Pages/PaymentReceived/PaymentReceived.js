import React, { useState, useEffect } from "react"
import "./payment-received.css"
import Button from "../../components/Button/Button"
import { FiInfo, FiCopy } from "react-icons/fi"
import copy from "../../assets/icons/copy.png"
import useClipboard from "react-hook-clipboard"
import createtext from "../../assets/images/createtext.png"
import green from "../../assets/icons/green.png"
import received from "../../assets/images/receivedtext.png"
import { Widget, addResponseMessage } from "react-chat-widget"
import "react-chat-widget/lib/styles.css"
import invoice from "../../invoice.pdf"
const PaymentReceived = () => {
  const botdocAPIToken = "3067565241b95f886af0ad699a2542d29c172910"
  useEffect(() => {
    addResponseMessage(`
   Welcome to Fintruist!

Hello Neel. this is Dasha from Fintruist. It seems like you 
used our services earlier today.

I'd like to ask you a few questions about the experience.
Do you have two minutes now?

`)
  }, [])

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
    addResponseMessage("response")
  }
  const emailReceipt = async () => {
    const attributes = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOTAsInVzZXJuYW1lIjoiZ2FicmllbC53ZWluYnJlbm5lckBnbWFpbC5jb20iLCJleHAiOjE2NDkyMTkxOTgsImVtYWlsIjoiZ2FicmllbC53ZWluYnJlbm5lckBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODk1OTk5OCwidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjcxZTU1NzZlLWUwMTEtNDdmZC05YTgyLWVlMmFlZWZlYWRmYyJ9.Zwhf8gAdiULgPU3sX82wQcrj9ljyvlUzke7qctcvBuI`,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
    const con = await fetch(
      "https://api.botdoc.io/v1/module_container/container/",
      {
        ...attributes,
        body: JSON.stringify({
          callback_url: "",
          page_type: "p2",
          display_chat: true,
        }), // body data type must match "Content-Type" header
      }
    )
    const container = await con.json()
    const re = await fetch(
      `https://api.botdoc.io/v1/module_container/container/${container.id}/recipient/`,
      {
        ...attributes,
        body: JSON.stringify({
          first_name: "Gabriel ",
          last_name: "Weinbrenner",
        }),
      }
    )
    const rec = await re.json()
    await fetch(
      `https://api.botdoc.io/v1/module_container/recipient/${rec.id}/recipient_item/`,
      {
        ...attributes,
        body: JSON.stringify({
          interface_class: "email",
          value: "gabriel.weinbrenner@gmail.com",
        }),
      }
    )
    await fetch(
      `https://api.botdoc.io/v1/module_container/container/${container.id}/email/`,
      {
        ...attributes,
        body: JSON.stringify({
          subject: "Your receipt for the campaign",
          body: "Here is your receipt containing information\nabout the campaign you are apart of",
        }),
      }
    )
    await fetch(
      `https://api.botdoc.io/v1/module_container/container/${container.id}/auth_code/`,
      {
        ...attributes,
        body: JSON.stringify({
          send_as: "email",
          to: "gabriel.weinbrenner@gmail.com",
        }),
      }
    )
    const pus = await fetch(
      "https://api.botdoc.io/v1/module_container_push/push/",
      {
        ...attributes,
        body: JSON.stringify({
          title: "Attachment of Receipt",
          description: "Any questions about receipt please reach out",
          max_file_downloads: 2,
          container: container.id,
        }),
      }
    )
    const push = await pus.json()
    const data = new FormData()

    data.append("file", invoice)
    data.append("total_chunks", 10)
    data.append("name", "invoice")
    data.append("type", "application/pdf")

    await fetch("https://api.botdoc.io/v1/module_container_push/pushfile/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOTAsInVzZXJuYW1lIjoiZ2FicmllbC53ZWluYnJlbm5lckBnbWFpbC5jb20iLCJleHAiOjE2NDkyMTkxOTgsImVtYWlsIjoiZ2FicmllbC53ZWluYnJlbm5lckBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODk1OTk5OCwidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjcxZTU1NzZlLWUwMTEtNDdmZC05YTgyLWVlMmFlZWZlYWRmYyJ9.Zwhf8gAdiULgPU3sX82wQcrj9ljyvlUzke7qctcvBuI`,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data,
    })
  }

  const [link, setLink] = useState("http://localhost:3030")
  const [clipboard, copyToClipboard] = useClipboard()
  return (
    <div className='ml-20 pt-10'>
      <div className='grid grid-row-2  grid-flow-row ml-5'>
        <div>
          <h1 class='text-7xl font-bold float-left mb-8 '>
            Payment is successful
          </h1>
        </div>

        <div className='backgroundCard grid grid-cols-1 rounded-2xl'>
          <div className='m-3 mt-10'>
            <img src={received} />{" "}
          </div>
          <div className='space-y-28 ml-6 -mt-10'>
            <div
              className='grid grid-col-2  grid-flow-col backgroundSubCard m-3 gap-4 rounded-2xl'
              style={{ width: "1000px", height: "100px" }}
            >
              <div className='flex flex-wrap mt-2 ml-3'>
                <div className='pt-3'>
                  <img src={green} />
                </div>
                <h3 class='text-3xl text-left text-white mt-5 ml-3'>Status</h3>
              </div>
            </div>
            <div
              className='grid grid-col-2  grid-flow-col backgroundSubCard m-3 gap-4 rounded-2xl'
              style={{ width: "500px", height: "70px" }}
            >
              <div className='-ml-25 grid grid-col-2 grid-flow-col gap-x-2'>
                <div className='mt-3 inline grid grid-col-2 grid-flow-col'>
                  <h3 className='text-3xl text-left sfloat-left text-white ml-4 w-96'>
                    {link}
                  </h3>
                </div>
                <div className='pr-0 pt-2'>
                  <button onClick={() => copyToClipboard(link)}>
                    <img src={copy} />
                  </button>
                </div>
              </div>
            </div>
            <div className='flex ml-3 mt-3'>
              <div className='pl-10'>
                <button
                  className='text-center bg-cust_orange 
        text-3xl text-white font-bold p-3 w-96 h-15 rounded-xl'
                  onClick={() => emailReceipt()}
                >
                  Send Receipt to donors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </div>
  )
}

export default PaymentReceived
