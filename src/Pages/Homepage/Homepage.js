import React from "react"
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/background.png"
import { useNavigate } from "react-router-dom"
import sideStuff from "../../assets/images/sidestuff.png"

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div className='h-screen w-full'>
      <div div className='flex w-full justify-end pr-5'>
        <div className='pt-3'></div>
        <div className='pt-4  align-right pr-3'>
          <button
            // onClick={handleCustomLogin}
            className='text-center bg-cust_tertiary ml-10
           text-2xl text-white font-bold w-60 h-20 rounded-xl'
          >
            Connect to wallet
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "8rem" }}>
        <div style={{ marginLeft: "6rem" }} className='h-184 w-184'>
          <img src={logo} className='' alt='logo' />

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
        <img
          style={{
            position: "absolute",
            width: "600.5px",
            height: "630.3px",
            left: "1326px",
            top: "386px",
            opacity: "0.8",
          }}
          src={sideStuff}
        />
      </div>
    </div>
  )
}

export default Homepage
