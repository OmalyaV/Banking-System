import * as React from "react"
import PropTypes from "prop-types"
import Dialog from "@mui/material/Dialog"
import Typography from "@mui/material/Typography"
import { Box, Grid } from "@mui/material"
import TextInput from "../components/TextInput"
import YellowButton from "../components/YellowButton"
import axios from "axios"
import api from "../apiConfig"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import HideInput from "../components/HideInput"
import LoginPopup from "./Login"

export default function LoanSetupPopup(props) {
  const { onClose, open } = props
  const [Amount, setAmount] = React.useState("")
  const [Period, setPeriod] = React.useState("")
  const [CustomerNIC, setCustomerNIC] = React.useState("")
  const [BranchCode, setBranchCode] = React.useState("")
  const [loginOpen, setLoginOpen] = React.useState(false)

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount)
  }
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod)
  }

  const handleCustomerNICChange = (newNIC) => {
    setCustomerNIC(newNIC)
  }

  const handleBranchCodeChange = (newBranchCode) => {
    setBranchCode(newBranchCode)
  }

  const handleClose = () => {
    onClose(true)
  }
  const handleLoginOpen = () => {
    setLoginOpen(true)
  }
  const handleLoginClose = () => {
    setLoginOpen(false)
  }

  const handleGrant = () => {
    // amount,
    //   interest_rate,
    //   loan_period,
    //   approved,
    //   request_type,
    //   customer_NIC,
    //   branch_code
    const data = {
      customer_NIC: CustomerNIC,
      loan_eriod: Period,
      amount: Amount,
      request_type: "physical",
      branch_code: BranchCode,
    }
    console.log(data)
    api.post("/loan/grant", data).then((response) => {
      if (response.data.approved) {
        console.log("Grant successful!", response.data)
      } else {
        console.log("Grant unsuccessful!", response.data)
      }
      onClose(true)
    })

    // Your axios POST request logic goes here
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: 0,
          boxShadow: "none",
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 30,
            fontWeight: 600,
            padding: "0px 0px 20px 0px",
          }}
          fontFamily={"Inter"}
          align="center"
        >
          Grant
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Amount:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleAmountChange} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Period:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handlePeriodChange} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Customer NIC:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleCustomerNICChange} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Branch Code:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleBranchCodeChange} />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
          }}
        >
          <YellowButton text="Grant" onClick={handleGrant} />
        </Box>
        <LoginPopup onClose={handleLoginClose} open={loginOpen} />
      </Box>
    </Dialog>
  )
}

LoanSetupPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
