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
  backgroundColor: "grey", // Set the background color to grey
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "white", // Set the text color to white
  fontWeight: "bold", // Set the font weight to bold
}))

const SavingAccount = () => {
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
            Savings Account
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "0px 0px",
            }}
          >
            Your Account Type : {accountType}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
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
              >
                No: of Withdrawals Left
              </Typography>
              <GreyBox>
                <Typography>3</Typography>
              </GreyBox>
            </Box>
          </Stack>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: 12,
                fontWeight: 400,
                padding: "0px 0px",
              }}
            >
              Transaction
            </Typography>
          </Box>
        </Box>
        <GreyBox  >
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <Typography
                sx={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFCF43",
              color: "black",
              "&:hover": {
                backgroundColor: "yellow", // Specify the hover color
              },
            }}
          >
            Proceed
          </Button>
        </GreyBox>
      </Stack>
      <Stack spacing={0}>
        <Typography color={'white'}>Account History</Typography>
        <GreyBox>
          <Typography>Transfer from Account</Typography>
          <Typography>Transfer from Account</Typography>
          <Typography>Transfer from Account</Typography>
        </GreyBox>
      </Stack>
    </Stack>
  )
}

export default SavingAccount
