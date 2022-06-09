import React from "react"
import donateText from "../../assets/images/donate-successful.png"
import bubble from "../../assets/images/bubble.png"
import logo from "../../assets/images/logo.png"
const DonationSuccessful = () => {
  return (
    <div>
      {" "}
      <div className='h-screen w-full'>
        <div div className='flex w-full justify-end pr-5'>
          <div className='pt-3'></div>
          <div className='pt-4  align-right pr-3'></div>
        </div>
        <div className='flex  w-full'>
          <div style={{ paddingTop: "8rem" }}>
            <div style={{ marginLeft: "6rem" }} className='h-184 w-184'>
              <h1 class='text-7xl mt-4 w-96 font-bold text-left mb-8 '>
                Donation Successful
              </h1>
              <h1 class='text-3xl mt-4 font-bold text-left mb-8 '>
                Donate to{" "}
                <span className='font-black'>
                  charitable crowdfunding campaigns
                </span>{" "}
                based on their <span className='font-black'> deliverables</span>
              </h1>

              <div className='flex pt-10 w-full h-64'>
                <img alt='34433' src={donateText} />
              </div>
            </div>
          </div>
          <img
            style={{
              marginTop: "12rem",
              marginLeft: "9rem",
              width: "40rem",
              height: "35rem",
            }}
            src={bubble}
          />
          =
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default DonationSuccessful
