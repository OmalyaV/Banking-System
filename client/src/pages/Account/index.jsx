import React, { useState } from "react"
import NavBar from "../../components/NavBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import SavingAccount from "./SavingAccount"

function CheckingAccountDetails() {
  return <div>Details related to Checking Account</div>
}

const Account = () => {
  const [selectedAccount, setSelectedAccount] = useState(null)

  const handleButtonClick = (accountType) => {
    setSelectedAccount(accountType)
  }

  return (
    <Box
      style={{
        backgroundColor: "black", // Set the background color to black
        minHeight: "100vh", // Ensure the background color covers the entire viewport height
      }}
    >
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          sx={{ textTransform: "none", padding: "10px 20px", color: "white" }}
          onClick={() => handleButtonClick("SavingAccount")}
        >
          Saving Account
        </Button>
        <Button
          sx={{ textTransform: "none", padding: "10px 20px", color: "white" }}
          onClick={() => handleButtonClick("CheckingAccount")}
        >
          Checking Account
        </Button>
        <Button
          sx={{ textTransform: "none", padding: "10px 20px", color: "white"}}
          onClick={() => handleButtonClick("FixedDepositsAndLoans")}
        >
          Fixed Deposits and Loans
        </Button>
        {/* Add buttons for other account types here */}
      </Stack>
      <Box mt={2}>
        {selectedAccount === "SavingAccount" && <SavingAccount />}
        {selectedAccount === "CheckingAccount" && <CheckingAccountDetails />}
        {/* Add conditions for other account types' details here */}
      </Box>
    </Box>
  )
}

export default Account
