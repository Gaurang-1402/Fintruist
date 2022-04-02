import React from "react"
import "./button.css"
const Button = ({ handleButtonClick, buttonText }) => {
  return (
    <button
      onClick={() => handleButtonClick()}
      className='text-center bg-cust_tertiary
 text-1xl text-white font-bold w-56 h-15 rounded-xl'
    >
      {buttonText}
    </button>
  )
}

export default Button
