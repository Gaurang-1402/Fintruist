import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from "../../assets/images/auth0.png";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <img
        src={auth0}
        onClick={() => {
          logout();
        }}
      />
    )
  );
};

export default LogoutButton;
