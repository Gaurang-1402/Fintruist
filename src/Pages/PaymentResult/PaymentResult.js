import React from "react"
import './Paymentresult.css'
import Button from '../../components/Button/Button'
import { FiInfo, FiCopy } from "react-icons/fi";
const PaymentResult = () => {
  return (
    <div className="grid grid-row-2 grid-flow-row ml-5" >
      <div>
        <h1 class="text-5xl float-left mb-4">Payment Link Is Created</h1>

      </div>

      <div className="backgroundCard grid grid-cols-1 rounded-2xl">
        <div className="m-3">
            <h3 className="text-3xl text-left sfloat-left text-white m-4">Share this link with the buyer. Once the buyer deposits tokens into the address, you will be redirected to the next step.</h3>
        </div>
        <div className="space-y-28 ml-6 -mt-10">
        <div className="grid grid-col-2  grid-flow-col backgroundSubCard m-3 gap-4 rounded-2xl" style={{width: "1000px", height: "100px"}}>
                <div className="flex flex-wrap mt-2 ml-3">
                        <FiInfo size={80} />
                    <h3 class="text-3xl text-left text-white mt-5 ml-3">Status</h3>
                </div>
        </div>
        <div className="grid grid-col-2  grid-flow-col backgroundSubCard m-3 gap-4 rounded-2xl" style={{width: "500px", height: "70px"}}>
            <div className="-ml-25 grid grid-col-2 grid-flow-col gap-x-2">
                <div className="mt-3 inline grid grid-col-2 grid-flow-col">
                    <h3 className="text-3xl text-left sfloat-left text-white ml-4">http://localhost:3030</h3>
                </div>
                <div className="p-4 mt-2 rounded-2xl" style={{"background": "#6a3a6b", height: "50px", width: "60px", marginleft: "-80px"}}>
                    <FiCopy style={{marginRight: "40px", marginLeft: "-5px", marginTop: "-10px"}} size={40} color="white"/>
                </div>
            </div>
        </div>
        <div className="flex flex-col ml-3">
        <button
            className='text-center bg-red-600
        text-1xl text-white font-bold p-3 w-56 h-15 rounded-xl'
            >
            Delete Payment Link
        </button>        
    </div>

        </div>
      </div>
    </div>
  )
}

export default PaymentResult
