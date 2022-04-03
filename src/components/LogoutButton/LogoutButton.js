import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from "../../assets/images/auth0.png";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <img
      src={auth0}
      onClick={() => {
        logout();
        navigate("/login");
      }}
    />
  );
};

export default LogoutButton;
