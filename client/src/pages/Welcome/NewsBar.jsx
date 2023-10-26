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
      }}
    >
      <Stack direction="row" spacing={"100px"} justifyContent="center">
        <Stack direction="column" spacing={"0px"} textAlign="left">
          <Typography fontSize={"72px"}>Your</Typography>
          <Typography fontSize={"72px"}>Financial Future</Typography>
          <Typography fontSize={"72px"}>Starts Here</Typography>
          <Box width={"500px"}>
            <Typography fontSize={"15px"}>
              Welcome to NexusTrust Bank, where your financial future starts.
              Explore our comprehensive services, expert guidance, and
              innovative solutions for a journey towards financial
              prosperity and security.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="column" spacing={"20px"} paddingTop={"150px"}>
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
            Start My Financial Future
          </Button>
          <Button
            variant="contained"
            style={{border: "1px solid black"}}
            sx={{
              width: "300px",
              height: "50px",
              fontFamily: "Inter",
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "#D9D9D9",
              color: "black",
              "&:hover": {
                backgroundColor: "grey", // Specify the hover color
              },
              borderRadius: "10px", // Add this to round the button edges
            }}
          >
            I Already Started
          </Button>
        </Stack>
      </Stack>
    </div>
  )
}

export default NewsBar
