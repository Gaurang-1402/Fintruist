import React from "react"
import './Createpaymentlinkpage.css'
const Homepage = () => {
  return (
    <div>
      <h1 class="text-5xl float-left mb-4">Create Payment Link</h1>

      <div className="backgroundCard grid grid-cols-2 gap-4">
        <div className="m-3">
          <label for="text" className="text-md font-medium text-white float-left">Your email</label>
          <input type="text" className="bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none" />
        </div>
        <div className="m-3">
          <label for="text" className="text-md font-medium text-white float-left">Your password</label>
          <input type="text" className="bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none" />
        </div>
        <div className="col-span-2 m-3">
          <label for="text" className="text-md font-medium text-white float-left">Description</label>
          <textarea type="text" className="h-4/6 bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none" />
        </div>
        <div className="m-3">
          <label for="text" className="text-md font-medium text-white float-left">Deposit Address</label>
          <input type="text" className="bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none" />
        </div>
        <div className="m-3">
          <label for="text" className="text-md font-medium text-white float-left">Conditions</label>
          <input type="text" className="bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none" />
        </div>
        <div className="col-span-2 m-3">
          <label for="text" className="text-md font-medium text-white float-left">Secret</label>
          <input type="text" className="bg-cust_tertiary text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none" />
        </div>
        <div className="float-left">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
