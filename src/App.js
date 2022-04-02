// import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import PaymentResultPage from "./Pages/PaymentResult/PaymentResult"
import CreatePaymentLinkPage from "./Pages/CreatePaymentLinkPage/CreatePaymentLinkPage"
import SideNav from "./components/SideNav/SideNav"
import background from "./assets/images/background.png"

function App() {
  return (
    <>
      <div
        className='App flex bg-cust_back'
        style={{ backgroundImage: `url(${background})` }}
      >
        <Router>
          <SideNav />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/create' element={<CreatePaymentLinkPage />} />
          <Route exact path='/result' element={<PaymentResultPage />} />

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
