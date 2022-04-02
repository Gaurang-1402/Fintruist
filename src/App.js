import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import SideNav from "./components/SideNav/SideNav"
import background from "./assets/images/background.png"
import Login from "./Pages/signup/login"


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
            <Login />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
