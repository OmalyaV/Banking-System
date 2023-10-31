import React from "react"
import { Box, Dialog, Typography } from "@mui/material"
import List from "@mui/material"
import ListItem from "@mui/material"
import ListItemText from "@mui/material"

const AccountListPopup = (props) => {
  const { onClose, open, list } = props

  const handleClose = () => {
    onClose(true)
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
        <Typography
                sx={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: 400,
                  padding: "25px 25px",
                }}
                fontFamily={"Inter"}
              >
                  "My Saving Accounts"
              </Typography>
              <List>
              {list.map((item, index) => (
                <ListItem key={index}>
                <ListItemText primary={item} />
          </ListItem>
        ))}
        </List>
             
      </Box>
    </Dialog>
  )
}

export default DigitalBankingPopup
