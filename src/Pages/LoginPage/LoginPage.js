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
            background: `url(${loginback})`,
            height: "100vh",
            width: "100vw",
          }}
          className="flex justify-center items-center align-center flex-wrap w-full"
        >
          <div className="flex flex-col w-full md:w-1/2"></div>
          <div className="flex-col w-full md:w-1/2">
            <div></div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
