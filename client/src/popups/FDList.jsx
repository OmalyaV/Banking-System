import React from "react"
import { Box, Dialog, Typography } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from "@mui/material";
import { AccountContext } from "../context/AccountContext"
import { FDContext } from "../context/FDContext";

import { useContext } from "react"

const FDListPopup
 = (props) => {

  const {account, setCustomerAccount} = useContext(AccountContext)
  const {FD , setFD} = useContext(FDContext)
  const { onClose, open, list } = props

  const handleClose = () => {
    onClose(true)
  }

  const handleButtonClick = (goToFD) => () => {
    onClose(true)
    console.log(goToFD)
    setFD(goToFD)
    //handleAccountDetails(goToAccount) 
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
                  color: "yellow",
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
                  <Button onClick={handleButtonClick(item.account_number)}>{item.account_number}</Button>
                {/* <ListItemText 
                sx={{
                    color: "white",
                    fontSize: 13,
                    fontWeight: 400,
                    padding: "25px 25px",
                  }}
                fontFamily={"Inter"}
                primary={item.account_number} /> */}
          </ListItem>
        ))}
        </List>
             
      </Box>
    </Dialog>
  )
}

export default FDListPopup

