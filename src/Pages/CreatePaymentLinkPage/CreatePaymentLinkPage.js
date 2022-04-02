import React from "react"
import "./Createpaymentlinkpage.css"
import Button from "../../components/Button/Button"
const Homepage = () => {
  const handleClick = () => {}
  return (
    <div className='ml-20 pt-10'>
      <h1 class='text-7xl font-bold float-left mb-8 '>Create Payment Link</h1>
      <div className='ml-4'>
        <div
          style={{ width: "75rem", height: "45rem" }}
          className='backgroundCard  grid grid-cols-2 gap-4 rounded-lg'
        >
          <div className='m-3'>
            <label
              for='text'
              className='text-md font-medium text-white float-left'
            >
              Your email
            </label>
            <input
              type='text'
              className='bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none'
            />
          </div>
          <div className='m-3'>
            <label
              for='text'
              className='text-md font-medium text-white float-left'
            >
              Your password
            </label>
            <input
              type='text'
              className='bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none'
            />
          </div>
          <div className='col-span-2 m-3'>
            <label
              for='text'
              className='text-md font-medium text-white float-left'
            >
              Description
            </label>
            <textarea
              type='text'
              className='h-4/6 bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none'
            />
          </div>
          <div className='m-3'>
            <label
              for='text'
              className='text-md font-medium text-white float-left'
            >
              Deposit Address
            </label>
            <input
              type='text'
              className='bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none'
            />
          </div>
          <div className='m-3'>
            <label
              for='text'
              className='text-md font-medium text-white float-left'
            >
              Conditions
            </label>
            <input
              type='text'
              className='bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none'
            />
          </div>
          <div className='col-span-2 m-3'>
            <label
              for='text'
              className='text-md font-medium text-white float-left'
            >
              Secret
            </label>
            <input
              type='text'
              className='bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none'
            />
          </div>
          <div className='justify-start'>
            <button
              onClick={handleClick}
              className='text-center bg-cust_orange 
 text-2xl text-white font-bold ml-3 p-3 w-144 h-15 rounded-xl'
            >
              Create payment link
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
