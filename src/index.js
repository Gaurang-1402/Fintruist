import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
const domain = process.env.REACT_APP_AUTHO_DOMAIN; 
const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;

import {Auth0Provider} from '@auth0/auth0-react'
ReactDOM.render(
 
    <Auth0Provider
domain={domain}
clientId={clientId}
redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>,
    document.getElementById("root")

)
