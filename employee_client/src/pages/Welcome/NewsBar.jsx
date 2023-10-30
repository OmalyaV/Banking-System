import React from "react"
import { Stack, Box, Typography, Button } from "@mui/material"

const NewsBar = () => {
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={"100px"} justifyContent="center">
        <Stack direction="column" spacing={"0px"} textAlign="left">
          <Typography fontSize={"72px"}>BankerLink : Fostering</Typography>
          <Typography fontSize={"72px"}>Collaboration, Wellness,</Typography>
          <Typography fontSize={"72px"}>and Success</Typography>
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
              together..
            </Typography>
          </Box>
        </Stack>

        <Stack direction="column" spacing={"20px"} paddingTop={"100px"} alignItems={"center"}>
        <Button
          variant="contained"
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
    </div>
  )
}

export default NewsBar
