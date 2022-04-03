import React from "react";
import "./Createpaymentlinkpage.css";
import Button from "../../components/Button/Button";

const CreatePaymentLinkPage = () => {
  const handleClick = () => {};
  return (
    <div className="ml-20 pt-10">
      <h1 class="text-7xl font-bold float-left mb-8 ">
        Create Campaign Payment Link
      </h1>
      <div className="ml-4">
        <div
          style={{ width: "75rem", height: "45rem" }}
          className="backgroundCard grid grid-cols-2 gap-4 rounded-lg"
        >
          <div className="m-3">
            <label
              for="text"
              className="text-xl font-medium mb-3 text-white float-left"
            >
              Name Of Campaign
            </label>
            <input
              type="text"
              className="bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none"
            />
          </div>
          <div className="m-3">
            <label
              for="text"
              className="text-md text-xl font-medium mb-3 text-white float-left"
            >
              Campaign donation target in Ether
            </label>
            <input
              type="text"
              className="bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none"
            />
          </div>
          <div className="col-span-2 m-3">
            <label
              for="text"
              className="text-md font-medium text-xl font-medium mb-3 text-white float-left"
            >
              Key Deliverables
            </label>
            <textarea
              type="text"
              className="h-4/6 bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none"
            />
          </div>
          <div className="m-3">
            <label
              for="text"
              className="text-md font-medium text-xl font-medium mb-3 text-white float-left"
            >
              Deposit Address
            </label>
            <input
              type="text"
              className="bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none"
            />
          </div>
          <div className="m-3">
            <label
              for="text"
              className="text-md font-medium text-xl font-medium mb-3 text-white float-left"
            >
              Charitable causes
            </label>
            <input
              type="text"
              className="bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none"
            />
          </div>
          <div className="col-span-2 m-3">
            <label
              for="text"
              className="text-md font-medium text-xl font-medium mb-3 text-white float-left"
            >
              Secret
            </label>
            <input
              type="text"
              className="bg-cust_tertiary text-xl font-medium mb-3 text-white md:text-md h-3/6 rounded-lg w-full p-2.5 focus:outline-none"
            />
          </div>
          <div className=" justify-start">
            <button
              onClick={handleClick}
              className="text-center  bg-cust_orange 
 text-2xl text-white font-bold ml-3 p-3 w-144 h-15 rounded-xl"
            >
              Create payment link
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePaymentLinkPage;
