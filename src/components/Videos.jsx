import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./index";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos && videos.length > 0
        ? videos.map((sv, index) => (
            <Box key={index}>
              {sv && sv.id && sv.id.videoId && <VideoCard video={sv} />}
              {sv && sv.id && sv.id.channelId && (
                <ChannelCard channelDetail={sv} />
              )}
            </Box>
          ))
        : null}
    </Stack>
  );
};

export default Videos;
