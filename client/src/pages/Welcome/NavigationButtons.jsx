import { Stack } from "@mui/material"
import React from "react"
import NavigationButton from "./NavigationButton"

const NavigationButtons = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"center"}
      paddingTop={"20px"}
    >
      <NavigationButton title="Dashboard" src="dashboard" />
      <NavigationButton title="Transaction" src="transaction" />
      <NavigationButton title="Plan And Rates" src="plans_and_rates" />
      <NavigationButton title="Contact Us" src="contact_us" />
    </Stack>
  )
}

export default NavigationButtons
