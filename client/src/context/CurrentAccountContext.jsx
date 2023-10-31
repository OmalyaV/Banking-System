import { createContext, useState } from "react"
export const CurrentAccountContext = createContext(null)

function CurrentAccountContextProvider(props) {
//   const [user, setUser] = useState(null)
//   const [userType, setUserType] = useState("guest")
//   const [username, setUsername] = useState("guest")

    const [currentAccount, setAccount] = useState(null)

//   const login = (user) => {
//     setUser(user.customer_NIC)
//     setUserType(user.user_type)
//     setUsername(user.username)
//   }

//   const logout = () => {
//     setUser(null)
//     setUserType("guest")
//     setUsername("guest")
//   }

    const setCustomerCurrentAccount = (currentAccount) => {
        setAccount(currentAccount)
    }


  return (
    <CurrentAccountContext.Provider value={{ currentAccount,setCustomerCurrentAccount }}>
      {props.children}
    </CurrentAccountContext.Provider>
  )
}

export default CurrentAccountContextProvider
