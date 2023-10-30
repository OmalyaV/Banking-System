import * as React from "react"
import PropTypes from "prop-types"
import Dialog from "@mui/material/Dialog"
import Typography from "@mui/material/Typography"
import { Box, Grid } from "@mui/material"
import TextInput from "../components/TextInput"
import YellowButton from "../components/YellowButton"
import axios from "axios"
import api from "../apiConfig"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export default function RegisterPopup(props) {


  const { onClose, open } = props
  
  const [NICNumber, setNICNumber] = React.useState("")
  const [UserName, setFullName] = React.useState("")
  const [UserType, setBranch] = React.useState("")
  const [Password, setPassword] = React.useState("")
  const [ConfirmPassword , setConfirmPassword ] = React.useState("")

  const handleClose = () => {
    onClose(true)
  }

  const handleLogin = () => {
    // Create a data object to send in the POST request
    const data = {
      NICNumber: "PQR4526801",
      UserName: "Rasa Dias",
    }

    // Make a POST request to your server
    api
      .post("/user/register", data) // Replace "/api/login" with your actual API endpoint
      .then((response) => {
        // Handle the response as needed
        console.log("Register successful!", response.data)
        
        // You can also close the dialog or perform other actions on success
        onClose(true)
      })
      .catch((error) => {
        // Handle errors
        console.error("Login failed:", error)
      })
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "black", // Set the background color to black
          margin: 0.1, // Remove the default margin
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 30,
            fontWeight: 600,
            padding: "0px 0px 20px 0px",
          }}
          fontFamily={"Inter"}
          align="center"
        >
          Register
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              NIC Number :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Full Name :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Email Address :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Year of Birth :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Branch :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Account Type :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Password :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Confirm Password :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
          }}
        >
          <YellowButton text="Register" onClick={handleLogin} />
        </Box>
      </Box>
    </Dialog>
  )
}

RegisterPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
// =======
//     const { onClose, open } = props;
//     const [NIC, setNIC] = React.useState(""); // State for NIC
//     const [fullName, setFullName] = React.useState(""); // State for Full Name
//     const [email, setEmail] = React.useState(""); // State for Email Address
//     const [yearOfBirth, setYearOfBirth] = React.useState(""); // State for Year of Birth
//     const [branch, setBranch] = React.useState(""); // State for Branch
//     const [accountType, setAccountType] = React.useState(""); // State for Account Type
//     const [password, setPassword] = React.useState(""); // State for Password
//     const [confirmPassword, setConfirmPassword] = React.useState(""); // State for Confirm Password

//     const handleClose = () => {
//         onClose(true)
//     }

//     const handleRegister = () => {
//         // Create a data object to send in the POST request
//         const data = {
//             NIC: "VXZ4598992",
//             FullName: "John Doe",
//             EmailAddress: "doe@example.com",
//             YearOfBirth: 2001,
//             Branch: "Main",
//             AccountType: "Adult",
//             password: "joe@457",
//             ConfirmPassword: "joe@457",
//         }

//         // Make a POST request to your server
//         api
//             .post("/user/register", data) // Replace "/api/register" with your actual API endpoint
//             .then((response) => {
//                 // Handle the response as needed
//                 console.log("Register successful!", response.data)
//                 //register("user")

//                 // You can also close the dialog or perform other actions on success
//                 onClose(true)
//             })
//             .catch((error) => {
//                 // Handle errors
//                 console.error("Register failed:", error)
//             })
//     }

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <Box
//                 sx={{
//                     backgroundColor: "black", // Set the background color to black
//                     margin: 0.1, // Remove the default margin
//                     padding: 0, // Set the background color to black
//                     boxShadow: "none", // Remove the shadow
//                 }}
//                 alignItems={"center"}
//                 flex={"row"}
//             >
//                 <Typography
//                     sx={{
//                         color: "white",
//                         fontSize: 30,
//                         fontWeight: 600,
//                         padding: "0px 0px 20px 0px",
//                     }}
//                     fontFamily={"Inter"}
//                     align="center"
//                 >
//                     Register
//                 </Typography>
//                 <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             NIC Number :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Full Name :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Email Address :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Year of Birth :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Branch :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Account Type :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Password :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={6}>
//                         <Typography
//                             sx={{
//                                 color: "white",
//                                 fontSize: 18,
//                                 fontWeight: 400,
//                                 padding: "20px 70px",
//                             }}
//                             fontFamily={"Inter"}
//                         >
//                             Confirm Password :
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Box padding={"20px 0px"}>
//                             <TextInput />
//                         </Box>
//                     </Grid>

//                 </Grid>

//                 <Box
//                     sx={{
//                         padding: "20px",
//                         borderRadius: "20px",
//                         justifyContent: "center",
//                         justifyItems: "center",
//                         display: "flex",
//                     }}
//                 >
//                     <YellowButton text="Register" onClick={handleRegister} />
//                 </Box>
//             </Box>
//         </Dialog>
//     )
// }

// RegisterPopup.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,

// }
