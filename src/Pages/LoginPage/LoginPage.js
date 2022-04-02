// import React from "react";
// import logo from "../../assets/images/logo.png";
// import background from "../../assets/images/background.png";
// import { useNavigate } from "react-router-dom";
// import sideStuff from "../../assets/images/sidestuff.png";
// import LoginButton from "../../components/LoginButton/LoginButton";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="h-screen w-full">
//       <div style={{ paddingTop: "8rem" }}>
//         <div style={{ marginLeft: "6rem" }} className="h-184 w-184">
//           <img src={logo} className="" alt="logo" />

//           <div className="flex pt-10 w-full h-20">
//             <LoginButton />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import loginback from "../../assets/images/loginback.png";
const LoginPage = () => {
  return (
    <div>
      <div>
        <div
          style={{
            background:
              "linear-gradient(\n  212.35deg,\n  rgba(239, 205, 255, 0.31) 0%,\n  rgba(241, 157, 185, 0.164187) 13.97%,\n  rgba(243, 110, 115, 0.02) 33.07%,\n  rgba(241, 155, 181, 0.156443) 33.07%\n)",
          }}
          className="flex justify-center items-center align-center flex-wrap w-full"
        >
          <div className="flex-col w-full md:w-1/2">
            <div></div>
            <LoginForm />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            {/* <img
              className="hidden object-cover w-full h-screen md:block"
              src={loginback}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
