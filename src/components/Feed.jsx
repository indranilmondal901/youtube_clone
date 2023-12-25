import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight:"1px solid #3d3d" , px:{sx: 0, md: 2} }}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{color: "white", mt:"1.5"}}>
        Copyright 2023 by Indranil Mondal
      </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
