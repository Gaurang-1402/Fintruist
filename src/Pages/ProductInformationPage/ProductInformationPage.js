import React, { useState } from "react"
import qrCode from "../../assets/images/qr-code.png"

const ProductInformationPage = () => {
  const [name, setName] = useState("Lorem Ipsum")
  const [price, setPrice] = useState(0.001)
  const [description, setDescription] = useState("Lorem Ipsum")
  const [paymentAddress, setPaymentAddress] = useState("Lorem Ipsum")
  const [conditions, setConditions] = useState("Lorem Ipsum")

  return (
    <div className='ml-20 pt-10'>
      <div className='grid grid-row-2  grid-flow-row ml-5'>
        <div>
          <h1 class='text-7xl font-bold float-left mb-8 '>
            Prouct Information
          </h1>
        </div>
        <div class='flex'>
          <div className='backgroundCard justify-start rounded-2xl'>
            <div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left  text-white'>Name:</div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {name}
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left  text-white'>
                  Description:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {description}
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left  text-white'>Price:</div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {price} eth
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left  text-white'>
                  Payment Address:
                </div>
                <div className='text-xl mt-4 text-left  text-cust_orange'>
                  {paymentAddress}
                </div>
              </div>
              <div className='pt-12 pl-10'>
                <div className='text-4xl text-left  text-white'>
                  Conditions:
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
              <button
                className='text-center bg-cust_orange 
 text-2xl text-white font-bold ml-3 p-3 w-90 h-15 rounded-xl'
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
