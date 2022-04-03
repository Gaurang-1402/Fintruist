import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import auth from "../../assets/images/badge.png";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="text-center bg-slate-300 
              text-2xl text-white font-bold w-60 h-15 rounded-xl"
        onClick={() => loginWithRedirect()}
        style={{ marginLeft: "63px", marginTop: "20px" }}
      >
        <div className="flex">
          <img
            src={auth}
            className="ml-6"
            style={{ marginTop: "6px", height: "40px" }}
          />
          <p className="ml-10 mt-2 text-black">Auth0</p>
        </div>
      </button>
    )
  );
};

export default LoginButton;
