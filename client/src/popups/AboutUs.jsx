import React from "react"
import { Box, Dialog, Typography } from "@mui/material"

const AboutUsPopup = (props) => {
  const { onClose, open, name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: 0, 
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
         <Typography
                sx={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "25px 25px",
                }}
                fontFamily={"Inter"}
              >
                Welcome to Nexus Trust Bank, your reliable and innovative banking partner. At Nexus Trust Bank, we are committed to providing you with a seamless and secure banking experience that caters to your financial needs, aspirations, and goals.
              </Typography>
             
      </Box>
    </Dialog>
  )
}

export default AboutUsPopup
