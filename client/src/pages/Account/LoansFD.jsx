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
    <Stack direction="row" spacing={5} justifyContent="center">
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
          <Stack padding={{ paddingTop: "20px" }} direction="row" spacing={3}>
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

        </Box>
        
        
      </Stack>

      <Stack padding={{ paddingTop: "10px" }} direction="column" spacing={3} >
      <Box>
            <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 20,
              fontWeight: 500,
              paddingTop: "80px",
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
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                padding: "0px 0px",
              }}
              fontFamily={"Inter"}
            >
              Online Loan Request
            </Typography>
          </Box>
        <Box sx={{ paddingLeft: "50px" }}>
          <Paper
            sx={{
              paddingLeft: "50px",
              backgroundColor: "#151515",
              textAlign: "left",
              borderRadius: "20px",
              width: "500px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  FD:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    "& fieldset": { border: "none" },
                    "& input": {
                      paddingTop: "6px",
                      paddingBottom: "6px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  Amount:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    "& fieldset": { border: "none" },
                    "& input": {
                      paddingTop: "6px",
                      paddingBottom: "6px",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  Time Period
                  (in months):
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    "& fieldset": { border: "none" },
                    "& input": {
                      paddingTop: "6px",
                      paddingBottom: "6px",
                    },
                  }}
                />
              </Grid>

            </Grid>
            <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Inter",
                  textTransform: "none",
                  fontWeight: 600,
                  backgroundColor: "#FFCF43",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "yellow", // Specify the hover color
                  },
                  borderRadius: "20px", // Add this to round the button edges
                }}
              >
                Proceed
              </Button>
            </Box>
          </Paper>
        </Box>
        
        
        
      </Stack>
      </Stack>
  );
    
}

export default Loans
