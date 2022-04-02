import React from "react"
import logo from "../../assets/images/logo.png"
const Homepage = () => {
  return (
    <div className='h-screen bg-cust_back'>
      <div style={{ paddingTop: "10rem" }}>
        <div
          style={{ marginLeft: "15rem" }}
          className='h-144 w-144 bg-slate-400'
        >
          <img src={logo} className='' alt='logo' />

          <div className='text-left ml-10 pt-5 text-7xl font-bold'>Trustly</div>
          <div className='flex pt-10 w-full h-20'>
            <button
              className='text-center bg-cust_tertiary ml-10
           text-1xl text-white font-bold w-56 h-15 rounded-xl'
            >
              Buyer
            </button>
            <button
              className='text-center bg-cust_tertiary ml-10
           text-1xl text-white font-bold w-56 h-15 rounded-xl'
            >
              Seller
            </button>
            <button
              className='text-center bg-cust_tertiary ml-10
           text-1xl text-white font-bold w-56 h-15 rounded-xl'
            >
              Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
