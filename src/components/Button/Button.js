import React from "react"
import "./button.css"
const Button = (props) => {
  return (
    <button
      {...props}
      onClick={() => props.handleButtonClick()}
      className='text-center bg-cust_tertiary
 text-1xl text-white font-bold p-3 w-56 h-15 rounded-xl'
    >
      {props.buttonText}
    </button>
  )
}

export default Button
