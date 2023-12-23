import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      position={"fixed"}
      bgcolor={"rgba(0, 0, 0, 0.6)"}
      height={"100vh"}
      width={"100vw"}
      zIndex={"100"}
      alignItems={"center"}
      justifyContent={"center"}
      top={0}
      left={0}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
