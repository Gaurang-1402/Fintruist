import logo from "./logo.svg"
import "./App.css"
import Sidebar from "./components/sidebar/sidebar.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import CreatePaymentLinkPage from "./Pages/CreatePaymentLinkPage/CreatePaymentLinkPage"

function App() {
  return (
    <div className='App bg-cust_back'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/create' element={<CreatePaymentLinkPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
