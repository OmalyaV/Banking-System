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
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Typography>{name}</Typography>
      </Box>
    </Dialog>
  )
}

export default ContactUsPopup
