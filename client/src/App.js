import "./App.css"
import axios from "axios"
import LoginPopup from "./popups/Login"


import Account from "./pages/Account"
import Welcome from "./pages/Welcome"
import AuthContextProvider, { AuthContext } from "./context/AuthContext"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        </Routes>
        <Routes>
          <Route path="/account" element={<Account />} />
        </Routes>
        {/* <Welcome /> */}
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App