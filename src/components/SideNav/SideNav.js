import React from "react"

import home from "../../assets/icons/home.png"
import faq from "../../assets/icons/faq.png"
import dashboard from "../../assets/icons/dashboard.png"
import github from "../../assets/icons/github.svg"
import { useNavigate } from "react-router-dom"

const SideNav = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }

  return (
    <div
      style={{ marginLeft: "2rem", marginTop: "8rem" }}
      className='bg-cust_primary  w-48 h-144 rounded-xl'
    >
      <div className='flex-col pt-16 space-y-10'>
        <div>
          <button onClick={goHome}>
            <img src={home} />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/faq")
            }}
          >
            <img src={faq} />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/dashboard")
            }}
          >
            <img src={dashboard} />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/github")
            }}
          >
            <img src={github} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideNav
