import { createContext, useState } from "react"
export const FDContext = createContext(null)

function FDContextProvider(props) {

    const [FD, setFD] = useState(null)

    const setCustomerFD = (FD) => {
        setFD(FD)
    }


  return (
    <FDContext.Provider value={{ FD,setCustomerFD }}>
      {props.children}
    </FDContext.Provider>
  )
}

export default FDContextProvider
