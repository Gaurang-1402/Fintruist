import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom"
import { MoralisProvider } from "react-moralis";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const serverUrl = process.env.REACT_APP_MORALIS_SERVER;
const appId = process.env.REACT_APP_APP_ID;
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <App />
      </MoralisProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
