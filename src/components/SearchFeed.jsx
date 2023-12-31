import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { FetchFromApi } from "../utils/FetchFromApi";
import {useParams} from 'react-router-dom';

const SearchFeed = () => {
  const {searchTerm} = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=Search result for${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Search result for {searchTerm} <span style={{ color: "#F31503" }}>Videoes</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
