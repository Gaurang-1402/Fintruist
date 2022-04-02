import React from "react"
import './Paymentresult.css'
import Button from '../../components/Button/Button'
import { FiInfo, FiCopy } from "react-icons/fi";
const PaymentResult = () => {
  return (
    <div className="grid grid-row-2 grid-flow-row">
      <div>
        <h1 class="text-5xl float-left mb-4">Payment Link Is Created</h1>

      </div>

      <div className="backgroundCard grid grid-cols-1 gap-2">
        <div className="m-3">
            <h3 className="text-3xl text-left sfloat-left text-white m-4">Share this link with the buyer. Once the buyer deposits tokens into the address, you will be redirected to the next step.</h3>
        </div>
        <div className="grid grid-col-2  grid-flow-col backgroundSubCard m-3 gap-4 rounded-lg" style={{width: "1000px", height: "150px"}}>
                <div className="flex flex-wrap mt-8 ml-3">
                    <FiInfo size={100}/>
                    <h3 class="text-3xl text-left text-white mt-8 ml-3">Status</h3>
                </div>
        </div>
        <div className="grid grid-col-2  grid-flow-col backgroundSubCard m-3 gap-4 rounded-lg" style={{width: "500px", height: "100px"}}>
            <div className="-ml-25 grid grid-col-2 grid-flow-col gap-x-2">
                <div className="mt-3 inline grid grid-col-2 grid-flow-col">
                    <h3 className="text-3xl text-left sfloat-left text-white m-4">http://localhost:3030</h3>
                </div>
                <div className="mt-4">
                    <FiCopy size={60}/>
                </div>
            </div>
        </div>
        <div className="float-left">
          <Button className="p-3" buttonText="Delete Payment Link"/>
        </div>
      </div>
    </div>
  )
}

export default PaymentResult
