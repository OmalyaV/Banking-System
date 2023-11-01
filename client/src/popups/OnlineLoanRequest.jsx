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

export default function OnlineLoanRequestPopup(props) {


  const { onClose, open } = props
  const [RequestingAmount, setRequestingAmount] = React.useState("")
  const [Period, setPeriod] = React.useState("")

  const handleRequestingAmountChange = (newRequestingAmount) => {
    setRequestingAmount(newRequestingAmount)
  }
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod)
  }
  
  const handleClose = () => {
    onClose(true)
  }
 
 
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "black", // Set the background color to black
          margin: 0.1, // Remove the default margin
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
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
          Online Loan Request
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            padding: "0px 0px 20px 70px",
          }}
          fontFamily={"Inter"}
          align="Left"
        >
          FD Details
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
              Related Saving Account :
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                00000000000001
              </Typography>
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
              Amount :
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                500
              </Typography>
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
              Plan ID :
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                1
              </Typography>
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
              Requesting Amount :
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleRequestingAmountChange} />
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
              Period (in months):
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handlePeriodChange} />
            </Box>
          </Grid>
          

          <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          
          <YellowButton text="Proceed" />
        </Box>
        </Grid>
      </Box>
      
    </Dialog>
  )
}

OnlineLoanRequestPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
