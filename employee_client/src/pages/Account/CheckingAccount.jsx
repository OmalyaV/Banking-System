import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

const GreyBox = styled(Paper)(({ theme }) => ({
  backgroundColor: "#151515", // Set the background color to grey
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "white", // Set the text color to white
  fontWeight: "bold", // Set the font weight to bold
  borderRadius: "20px",
}))

const CheckingAccount = () => {
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
            Checking Account
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
            Your Account Type : {accountType}
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
          <Paper
            sx={{
              paddingLeft: "50px",
              backgroundColor: "#151515",
              textAlign: "left",
              borderRadius: "20px",
            }}
          >
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

export default CheckingAccount
