import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton"; // Make sure to import the YellowButton component

const EmployeeProfile = () => {
  const userID = "123456789";
  const userName = "ABC";
  const userAge = "22";
  const userTelephone = "+234 123 456 789";
  const position = "Employee";
  const branch = "Marine Province"

  return (
    <Stack direction="row" spacing={20} sx={{ backgroundColor: "black" }}>
      <Stack spacing={0}>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Employee Portal
          </Typography>
        </Box>
        <Box>
          <Box>
            <img
              src="https://via.placeholder.com/150" // Placeholder image URL
              alt="User Icon"
            />
          </Box>
          <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
            <YellowButton text="Logout" /> {/* Make sure YellowButton is correctly imported */}
          </Box>
        </Box>
      </Stack>
      
      <Stack spacing={0}>
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            My Details
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            ID: {userID}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Name: {userName}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Age: {userAge}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Telephone No: {userTelephone}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Position: {position}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
            Branch: {branch}
          </Typography>
          <YellowButton text="Submit a Loan Request" /> 
        </Box>
      </Stack>
    </Stack>
  );
};

export default EmployeeProfile;