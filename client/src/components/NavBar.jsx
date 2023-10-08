import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import "./index.css"

const pages = ["About Us", "Digital Banking", "Promotions", "Contact Us"]

function NavBar() {
  const customFontStyle = {
    fontFamily: "Inter",
    fontWeight: 500, // You can adjust font weight as needed
    fontSize: "12px",
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        width: "100%",
        margin: 0, // Remove margin
        padding: 0, // Set the background color to black
        boxShadow: "none", // Remove the shadow
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    className="Typography--heading"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            <Typography
              style={{ ...customFontStyle, fontSize: "20px", fontWeight: 800 }}
            >
              <span style={{ color: "white" }}>Nexus</span>
              <span style={{ color: "yellow" }}> Trust </span>
              <span style={{ color: "white" }}>Bank</span>
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center", // Center the content horizontally
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                  padding: "10px 20px"
                }}
                style={customFontStyle}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <PowerSettingsNewIcon />
            <Box sx={{ marginRight: "20px" }} />
            <AccountCircleOutlinedIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
