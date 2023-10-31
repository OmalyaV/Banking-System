import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
import TextInput from "../../components/TextInput"
import YellowButton from "../../components/YellowButton"
import GreyBox from "../../components/GreyBox"
import AccountListPopup from "../../popups/AccountListPopup"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import api from "../../apiConfig"
import { AccountContext } from "../../context/AccountContext"
const SavingAccount = () => {

  const {account, setCustomerAccount} = useContext(AccountContext)
  const accountType = "Adult"
  const account_number = "0000000001"
  const [accountList, setAccountList] = React.useState([])
  const[accountListPopupOpen, setAccountListPopupOpen] = React.useState(false)
  const { user, username,userType, login, logout } = useContext(AuthContext)
  const handleListOpen=()=>{
    setAccountListPopupOpen(true)
    handleAccountList()
  }
  const handleListClose =()=>{
    setAccountListPopupOpen(false)
  }
  const handleAccountList=() =>{
    console.log(user)
    const data = {
      NIC: user,
      type: 'savings'
    }
    api
      .post("/account/account_list", data) // Replace "/api/login" with your actual API endpoint
      .then((response) => {
       
        if (response.data.approved){
        console.log("List fetched!", response.data)
        setAccountList(response.data.account)
        //navigate("/account")
        }
        else{
          console.log("something went wrong!", response.data)
        }
        //onClose(true)
      })
      .catch((error) => {
        // Handle errors
        console.error("account list fetching failed:", error)
      })
  }

  return (
    <Stack direction="row" spacing={20}>
      <Stack spacing={0}>
        <AccountListPopup open ={accountListPopupOpen} onClose={handleListClose} list ={accountList}/>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Dashboard
          </Typography>
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 20,
              fontWeight: 500,
              padding: "0px 5px",
            }}
          >
            Savings Accounts
          </Typography>
          <Box sx={{ padding: "10px 5px", borderRadius: "20px" }}>
              <YellowButton text="Select your saving account" onClick={handleListOpen}/>
            </Box>
            <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
           Account Number : {account}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
          Account Type : {accountType}
          </Typography>
          <Stack padding={{ paddingTop: "10px" }} direction="row" spacing={2}>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Balance
              </Typography>
              <GreyBox>
                <Typography>$500.00</Typography>
              </GreyBox>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                No: of Withdrawals Left
              </Typography>
              <GreyBox>
                <Typography>3</Typography>
              </GreyBox>
            </Box>
          </Stack>
          <Box padding={{ paddingTop: "20px" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: 12,
                fontWeight: 400,
                padding: "0px 0px",
              }}
              fontFamily={"Inter"}
            >
              Transaction
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingLeft: "100px" }}>
          <GreyBox allignment="left" padding="10px 10px 10px 50px">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  To Account:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextInput />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  Amount:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextInput />
              </Grid>
            </Grid>
            <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
              <YellowButton text="Proceed" />
            </Box>
          </GreyBox>
        </Box>
      </Stack>
      <Stack spacing={0}>
        <Typography
          fontFamily={"Inter"}
          color={"white"}
          padding={{ paddingBottom: "20px" }}
        >
          Transaction History
        </Typography>
        <GreyBox>
          <Typography fontFamily={"Inter"}>Transfer from Account</Typography>
          <Typography fontFamily={"Inter"}>Transfer from Account</Typography>
          <Typography fontFamily={"Inter"}>Transfer from Account</Typography>
        </GreyBox>
      </Stack>
    </Stack>
  )
}

export default SavingAccount
