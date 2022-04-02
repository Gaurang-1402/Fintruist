import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"


function App() {
  return (
    <div className='App bg-cust_back'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
