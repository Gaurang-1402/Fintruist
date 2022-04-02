import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
// import { BrowserRouter } from "react-router-dom"
import { MoralisProvider } from "react-moralis"

ReactDOM.render(
  <React.StrictMode>
      <MoralisProvider
    // appId="EBtgR0pff0J8QkkKwrcIa2hHnnEhGpdPrQZs5qaR"
    // serverUrl="https://nozt2z0ej3k0.usemoralis.com:2053/server"
    serverUrl="https://bqwuyxfazmgl.usemoralis.com:2053/server"
    appId="8AFd0WfrQKOtx64ZOz7M7tgf3yJu2SD3zAKO5eDM"
  >
    {/* <BrowserRouter> */}
     <App />
    {/* </BrowserRouter> */}
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
