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

const PaymentReceived = () => {
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

  const [link, setLink] = useState("http://localhost:3030")
  const [clipboard, copyToClipboard] = useClipboard()
  return (
    <div className='ml-20 pt-10'>
      <div className='grid grid-row-2  grid-flow-row ml-5'>
        <div>
          <h1 class='text-7xl font-bold float-left mb-8 '>
            Campaign Payment Link
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
              <div>
                <button
                  className='text-center bg-red-600 
        text-3xl text-white font-bold p-3 w-96 h-15 rounded-xl'
                >
                  Raise Dispute
                </button>
              </div>
              <div className='pl-10'>
                <button
                  className='text-center bg-red-600 
        text-3xl text-white font-bold p-3 w-96 h-15 rounded-xl'
                >
                  Delete Payment Link
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
