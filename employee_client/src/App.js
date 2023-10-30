import "./App.css"
import axios from "axios"
import LoginPopup from "./popups/Login"

import Home from "./pages/Home.js"
import Account from "./pages/Account"
import Welcome from "./pages/Welcome"
import AuthContextProvider, { AuthContext } from "./context/AuthContext"

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Welcome/>
      </AuthContextProvider>
    </div>
  )
}

export default App
