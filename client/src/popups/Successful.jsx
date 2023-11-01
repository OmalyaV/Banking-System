import React from "react"
import { Box, Dialog, Typography, Stack } from "@mui/material"

const SuccessfulPopup = (props) => {
  const { onClose, open,value } = props

  const handleClose = () => {
    onClose(true)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",// Set the background color to black
          margin: 0.1,
          padding: "20px", 
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        
        <Stack direction="row" spacing={2} alignItems="center">
        <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontSize: 40,
                  fontWeight: "bold",
                  padding: "10px 25px",
                }}
                fontFamily={"Inter"}
              >
                {value}
                {/* <img
                src={"assets/images/tick.png"}
                alt="tick"
                style={{ height: "48px", width: "50px" }}
              /> */}
              </Typography>

          </Stack>
      </Box>
    </Dialog>
  )
}

export default SuccessfulPopup
