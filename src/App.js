import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import SideNav from "./components/SideNav/SideNav"
import background from "./assets/images/background.png"
import Login from "./Pages/signup/login"
import Landingpage from "./Pages/Landing/landingpage"
import {useLocation} from 'react-router-dom'


function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
  
    <>
      <div
        className='App flex bg-cust_back'
        style={{ backgroundImage: `url(${background})` }}
      >
        <Router>
          {location.pathname != '/login' && <SideNav/>}
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/main' element={<Landingpage/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
