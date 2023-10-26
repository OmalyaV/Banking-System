import React from "react"
import { Box, Stack } from "@mui/material"
import NewsBar from "./NewsBar"
import NavigationButtons from "./NavigationButtons"
import AboutUs from "./AboutUs"
import InterestRates from "./InterestRates"
import MaximizeSavings from "./MaximizeSavings"

const Content = () => {
  return (
    <Box sx={{ backgroundColor: "#151515", color: "#FFFFFF" }}>
      <Stack>
        <NewsBar/>
        <NavigationButtons/>
        <AboutUs/>
        <InterestRates/>
        <MaximizeSavings/>
      </Stack>
    </Box>
  )
}

export default Content
