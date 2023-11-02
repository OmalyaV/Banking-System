import React from "react"
import { Stack } from "@mui/material"
import NavigationButton from "./NavigationButton"
import LateLoanInstalementsPopup from "../../popups/LateLoanInstalements"
import TotalTransactionReportPopup from "../../popups/TotalTrasactionReport"
import { AuthContext } from "../../context/AuthContext"
import { useContext ,useEffect} from "react"
import LoanSetupPopup from "../../popups/LoanSetupPopup"

const NavigationButtons = () => {
  const { user, username, userType, login, logout } = useContext(AuthContext)
  const [openPopups, setOpenPopups] = React.useState({})
  const [registerOpen, setRegisterPopupOpen] = React.useState(false)

  const handleClosePopup = (page) => {
    setOpenPopups({ ...openPopups, [page]: false })
  }

  const handleOpenPopup = (page) => {
    setOpenPopups({ ...openPopups, [page]: true })
  }
  useEffect(() => {
      console.log(user)
      console.log("username", username)
      console.log("usertype", userType)
    }, [])

  return (
    <dev>
      {username === "Jhon" && (
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          paddingTop="20px"
        >

          <NavigationButton
            title="Total Transactions"
            src="plans_and_rates"
            onClick={() => handleOpenPopup("Total Transactions")}
          />
          <NavigationButton title="Contact Us" src="contact_us" />
        </Stack>
      )}
      {(userType === "employee") && (username !== "Jhon") && (
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          paddingTop="20px"
        >
          <NavigationButton
            title="Loan Setup"
            src="loans"
            onClick={() => handleOpenPopup("Loan Setup")}
          />
          <NavigationButton
            title="Plan And Rates"
            src="plans_and_rates"
            onClick={() => handleOpenPopup("Total Transactions")}
          />
          <NavigationButton title="Contact Us" src="contact_us" />
        </Stack>
      )}
      <LateLoanInstalementsPopup
        open={openPopups["Late Loan Instalements"]}
        onClose={() => handleClosePopup("Late Loan Instalements")}
        name={"Late Loan Installaments"}
      />
      <TotalTransactionReportPopup
        open={openPopups["Total Transactions"]}
        onClose={() => handleClosePopup("Total Transactions")}
        name={"Total Transactions"}
      />
      <LoanSetupPopup
        open={openPopups["Loan Setup"]}
        onClose={() => handleClosePopup("Loan Setup")}
        name={"Loan Setup"}
      />
    </dev>
  )
}

export default NavigationButtons
