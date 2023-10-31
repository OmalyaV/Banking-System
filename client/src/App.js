import "./App.css"
import React from "react"
import axios from "axios"
import LoginPopup from "./popups/Login"
import Account from "./pages/Account"
import Welcome from "./pages/Welcome"
import AuthContextProvider, { AuthContext } from "./context/AuthContext"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AccountContextProvider from "./context/AccountContext"
import { Navigate } from 'react-router-dom'
import Cookies from "universal-cookie";

function App() {
  const { user,username, userType, login, logout } = React.useContext(AuthContext)
  const cookies = new Cookies();

  React.useEffect(() => {
    const fetchData = async () => {
    if (cookies.get("user") !== undefined) {
      await login(cookies.get("user").user)
      console.log("Cookie",cookies.get("user").user)
    }
    console.log("usertype",userType)
  }
  fetchData()
  },[])

  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        </Routes>
          <AccountContextProvider>
        <Routes>
          
        
            <Route path="/account" element={<Account />} />

           </Routes>
          </AccountContextProvider>
        {/* <Welcome /> */}
        </Router>
    </div>
  )
}


export default App