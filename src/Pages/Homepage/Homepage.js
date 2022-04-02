import React from "react"
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import { useNavigate } from "react-router-dom"
const Homepage = () => {
  //   const navigate = useNavigate()

  return (
    <div className='h-screen w-full'>
      <div style={{ paddingTop: "10rem" }}>
        <div style={{ marginLeft: "6rem" }} className='h-184 w-184'>
          <img src={logo} className='' alt='logo' />
          <div className='text-left ml-10 pt-5 text-7xl font-bold'>Trustly</div>
          <div className='flex pt-10 w-full h-20'>
            <button
              className='text-center bg-cust_tertiary ml-10
              text-2xl text-white font-bold w-60 h-20 rounded-xl'
            >
              Buyer
            </button>
            <button
              className='text-center bg-cust_tertiary ml-10
              text-2xl text-white font-bold w-60 h-20 rounded-xl'
            >
              Seller
            </button>
            <button
              className='text-center bg-cust_tertiary ml-10
           text-2xl text-white font-bold w-60 h-20 rounded-xl'
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
