import React from "react"
import LoginForm from "../../components/login/login"
import background from "../../assets/images/loginback.png"


const Login = () => {
  return (
    <div className='h-screen'>
      <div>
        {/* <div className='justify-center items-center align-center flex-wrap w-full '> */}
          {/* <div className='flex flex-row w-full md:w - 1/2'> */}
            <img
              className='hidden object-cover w-full h-screen md:block'
              src={background}
            />
            <LoginForm/>
          {/* </div> */}
          {/* <div className='flex-row w-full md:w-1/10'>
            <LoginForm />
          </div> */}
        </div>
      </div>
    // </div>
  )
}

export default Login