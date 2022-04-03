import React from "react";
import whiteInfo from "../../assets/icons/white-info.png";
import whiteGithub from "../../assets/icons/white-github.svg";
import whiteDashboard from "../../assets/icons/white-dashboard.png";
import whiteHome from "../../assets/icons/white-home.png";
import home from "../../assets/icons/home.png";
import faq from "../../assets/icons/faq.png";
import dashboard from "../../assets/icons/dashboard.png";
import github from "../../assets/icons/github.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo2 from "../../assets/images/logo-2.png";

const SideNav = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const location = useLocation();
  console.log(location.pathname);
  return location.pathname === "/login" || location.pathname === "/main" ? (
    <></>
  ) : (
    <div style={{ marginLeft: "2rem", marginTop: "8rem" }}>
      <div className="flex pl-12 mb-10">
        <img src={logo2} />
      </div>

      <div className="bg-cust_primary  w-48 h-144 rounded-xl">
        <div className="flex-col pt-16 space-y-10">
          <div>
            <button onClick={goHome}>
              {location.pathname === "/" ? (
                <img src={whiteHome} />
              ) : (
                <img src={home} />
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/faq");
              }}
            >
              {location.pathname === "/faq" ? (
                <img src={whiteInfo} />
              ) : (
                <img src={faq} />
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              {location.pathname === "/" ||
              location.pathname === "/result" ||
              location.pathname === "/received" ? (
                <img src={whiteDashboard} />
              ) : (
                <img src={dashboard} />
              )}
            </button>
          </div>
          <div>
            <a href="https://github.com/Gaurang-1402/hackprinceton-2022">
              <button
                onClick={() => {
                  navigate("/github");
                }}
              >
                <img src={github} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
