import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="60px" />
        <Typography variant="h7" mt="2x">
          Developed By: Mohamed Infas
        </Typography>
        <Typography variant="h6" pb="40px">
          ALL RIGHT RESERVED
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
