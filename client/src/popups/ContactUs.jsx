import React from "react"
import { Box, Dialog, Typography } from "@mui/material"

const ContactUsPopup = (props) => {
  const { onClose, open,name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: "50px 50px", // Set the background color to black
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
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Contact no:  +94 777 777 777
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Address:  No 90, Galle Road,Colombo 03,Sri Lanka
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Mail:  contact@nexustrust.com
              </Typography>
      </Box>
    </Dialog>
  )
}

export default ContactUsPopup
