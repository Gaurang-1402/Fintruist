import React, { useState } from "react"
import qrCode from "../../assets/images/qr-code.png"

const ProductInformationPage = () => {
  const [name, setName] = useState("GreenEverywhere")
  const [price, setPrice] = useState(1.2)
  const [description, setDescription] =
    useState(`Planted 1000 trees in Haryana, India (evidence)
  Employed 20 gardeners to take care of rare flowers in Assam, India
  Held an event to educate farmers about new agricultural policies`)
  const [paymentAddress, setPaymentAddress] = useState(
    "0x1020123418421028410841082412028412841"
  )
  const [conditions, setConditions] = useState("Afforestation, Restoration ")

  return (
    <div className='ml-20 pt-10'>
      <div className='grid grid-row-2  grid-flow-row ml-5'>
        <div>
          <h1 class='text-7xl font-bold float-left mb-8 '>
            Campaign Information
          </h1>
        </div>
        <div class='flex'>
          <div className='backgroundCard justify-start rounded-2xl'>
            <div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left font-bold  text-white'>
                  Name Of Campaign:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {name}
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left font-bold text-white'>
                  Key Deliverables:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {description}
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left font-bold text-white'>
                  {" "}
                  Campaign Donation target in Ether:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {price} eth
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left font-bold  text-white'>
                  Payment Address:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {paymentAddress}
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left font-bold text-white'>
                  Charitable causes:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {conditions}
                </div>
              </div>
            </div>
          </div>
          <div className='ml-5 w-96 h-96 mt-20 '>
            <img className='m-auto' src={qrCode} />

            <div className='pt-5'>
              <div className='flex'>
                <div style={{ width: "9rem" }} className='mr-3'>
                  Enter amount in ether
                </div>
                <input
                  style={{ width: "10rem" }}
                  type='number'
                  className='bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg p-2.5 focus:outline-none'
                />
              </div>
              <button
                className='text-center bg-cust_orange 
 text-2xl text-white font-bold ml-3 p-3 w-64 h-15 rounded-xl'
              >
                Create payment link
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInformationPage
