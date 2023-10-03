import { Stack, Typography } from "@mui/material"
import React from "react"

const Footer = () => {
  return (
    <Stack direction="row" spacing={20} paddingTop={10}>
      <Stack paddingLeft={10}>
        <Typography color="white"> Quick Links</Typography>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Typography color="white"> About Us</Typography>
            <Typography color="white"> About Us</Typography>
            <Typography color="white"> About Us</Typography>
          </Stack>
          <Stack>
            <Typography color="white"> DashBoard</Typography>
            <Typography color="white"> Dashboard</Typography>
            <Typography color="white"> About Us</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography color="white"> Reach Us</Typography>
        <Typography color="white"> About Us</Typography>
        <Typography color="white"> About Us</Typography>
      </Stack>
    </Stack>
  )
}

export default Footer
