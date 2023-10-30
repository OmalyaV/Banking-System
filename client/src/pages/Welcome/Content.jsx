import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import NewsBar from "./NewsBar";
import NavigationButtons from "./NavigationButtons";
import AboutUs from "./AboutUs";
import InterestRates from "./InterestRates";
import MaximizeSavings from "./MaximizeSavings";
import Cookies from "universal-cookie";

const Content = () => {
  const cookies = new Cookies();

  const [user, setUser] = useState(null);
  const isAuthenticated = cookies.get("authenticated") === "true";

  const handleUserLogin = () => {
    cookies.set("authenticated", "true", { path: "/" });
    setUser({ username: "exampleUser" });

    setSessionTimeout();
  };

  const handleUserLogout = () => {
    cookies.remove("authenticated", { path: "/" });
    setUser(null);

    clearTimeout(sessionTimeout);
  };

  const sessionTimeoutDuration = 900000; // 15mins in milliseconds

  let sessionTimeout;

  const setSessionTimeout = () => {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(() => {
      handleUserLogout();
      alert("Session timed out. You have been logged out.");
    }, sessionTimeoutDuration);
  };

  useEffect(() => {
    return () => {
      clearTimeout(sessionTimeout); 
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: "#151515", color: "#FFFFFF" }}>
      <Stack>
        <NewsBar />
        <NavigationButtons />
        <AboutUs />
        <InterestRates />
        <MaximizeSavings />
      </Stack>
    </Box>
  );
};

export default Content;
