import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="text-center bg-cust_tertiary ml-10
              text-2xl text-white font-bold w-60 h-20 rounded-xl"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
