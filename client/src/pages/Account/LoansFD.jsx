import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
import TextInput from "../../components/TextInput"
import YellowButton from "../../components/YellowButton"
import GreyBox from "../../components/GreyBox"

const Loans = () => {

  const accountType = "Adult"

  return (
    <Stack direction="row" spacing={20}>
      <Stack spacing={0}>
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
              padding: "0px 0px",
            }}
          >
            Fixed Deposits & Loans
          </Typography>
          <Stack padding={{ paddingTop: "10px" }} direction="column" spacing={2}>
            <Box>
            <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Fixed Deposits
          </Typography>
              </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Fixed Deposits
              </Typography>
              <GreyBox>
                <Typography font family={"Inter"}>1 year   -14%      $30,000.00</Typography>
                <Typography font family={"Inter"}>6 months   -13%    $30,000.00</Typography>
                <Typography font family={"Inter"}>3 months   -12%    $30,000.00</Typography>
              </GreyBox>
            </Box>
          </Stack>
          <Stack padding={{ paddingTop: "10px" }} direction="row" spacing={3}>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Fixed Deposits Plans
              </Typography>
              <GreyBox>
                <Typography font family={"Inter"}>Plan Basic : For 1 year at interest of 14%</Typography>
                <Typography font family={"Inter"}>Plan Gold : For 6 months at interest of 13%</Typography>
                <Typography font family={"Inter"}>Plan Premium : For 3 months at interest of 12%</Typography>
              </GreyBox>
            </Box>
          </Stack>
          <Box padding={{ paddingTop: "20px" }}>
            
          </Box>
        </Box>
        
        
      </Stack>

      <Stack padding={{ paddingTop: "10px" }} direction="column" spacing={3}>
      <Box>
            <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Loans
          </Typography>
              </Box>
        <Box>
        <Typography
          fontFamily={"Inter"}
          color={"white"}
          padding={{ paddingBottom: "10px" }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Loans
          </Typography>
        </Typography>
        <GreyBox>
          <Typography fontFamily={"Inter"}>10 months -10%</Typography>
          <Typography fontFamily={"Inter"}>12 months -12%</Typography>
          
        </GreyBox>
        </Box>
        <Box padding={{ paddingTop: "20px" }}>
        <GreyBox>
            <Typography
          fontFamily={"Inter"}
          color={"white"}
          padding={{ paddingBottom: "5px" }}
        >
          Online Loan Request
        </Typography>
            <Box sx={{ padding: "10px 100px", borderRadius: "50px", fontSize: "50px", fontWeight: 400 }}>
                <YellowButton text="Select FD" sx={{ width: "200px", height: "150px", fontSize: "150px" }} />
            </Box>
            </GreyBox>  
        </Box>
        
      </Stack>
      
    </Stack>
  )
}

export default Loans
