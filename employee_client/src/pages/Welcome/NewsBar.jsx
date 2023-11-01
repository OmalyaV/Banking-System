import React from "react"
import { Stack, Box, Typography, Button } from "@mui/material"
import LoginPopup from "../../popups/Login"
import RegisterPopup from "../../popups/Register"



const NewsBar = () => {
  const [open, setOpen] = React.useState(false)
  const [openRegister, setOpenRegister] = React.useState(false)
  const loginPopupOpen = () => {
    
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <div
      class="image"
      style={{
        height: "550px",
        width: "100%",
        backgroundImage: 'url("assets/images/welcome_image.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={"100px"} justifyContent="center">
        <Stack direction="column" spacing={"0px"} textAlign="left">
          <Typography
            fontSize={"72px"}
            sx={{ lineHeight: "72px", fontWeight: 600 }}
          >
            Empowering
          </Typography>
          <Typography
            fontSize={"72px"}
            sx={{ lineHeight: "72px", fontWeight: 600 }}
          >
            Your Success:
          </Typography>
          <Typography
            fontSize={"72px"}
            sx={{ lineHeight: "72px", fontWeight: 600 }}
          >
            Employee Hub
          </Typography>
          <Box width={"500px"}>
            <Typography fontSize={"15px"}>
              Welcome to NexusTrust Bank, where your professional journey
              begins. Dive into our wide array of opportunities, expert
              mentorship, and innovative solutions for a path towards career
              growth and job security. Here at NexusTrust Bank, we are committed
              to providing our employees with a supportive and dynamic
              environment, enabling them to reach their full potential while
              contributing to our shared success. Join us on this exciting
              professional expedition, and let's build a prosperous future
              together.
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="column"
          spacing={"20px"}
          paddingTop={"100px"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            onClick={loginPopupOpen}
            sx={{
              width: "300px",
              height: "50px",
              fontFamily: "Inter",
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "#FFCF43",
              color: "black",
              "&:hover": {
                backgroundColor: "#DDCC40", // Specify the hover color
              },
              borderRadius: "10px", // Add this to round the button edges
            }}
          >
            Employee Login
          </Button>
        </Stack>
      </Stack>
      <LoginPopup open={open} onClose={handleClose} />
    </div>
  )
}

export default NewsBar
