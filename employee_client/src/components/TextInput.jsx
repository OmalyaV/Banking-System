import React from 'react'
import { TextField } from '@mui/material'

const TextInput = () => {
  return (
    <TextField
      variant="outlined"
      sx={{
        borderRadius: "50px",
        backgroundColor: "white",
        "& fieldset": { border: "none" },
        "& input": {
          paddingTop: "6px",
          paddingBottom: "6px",
        },
      }}
    />
  )
}

export default TextInput