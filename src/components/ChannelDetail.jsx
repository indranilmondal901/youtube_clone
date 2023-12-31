import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, ChannelCard, VideoCard } from "./index";
import { FetchFromApi } from "../utils/FetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [ChannelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  console.log(23, ChannelDetails, videos);

  return (
    <Box minHeight="90vh">
      <Box>
        {/* cssgradient.io */}
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            zIndex: 10,
            height: "30vh",
          }}
        />
        <ChannelCard channelDetail={ChannelDetails} marginTop={'-93px'} />
        <Box display='flex' p='1% 0% 1% 3%' >
          <Box sx={{mr: {sm:'100px'}}}>
            <Videos videos={videos}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
