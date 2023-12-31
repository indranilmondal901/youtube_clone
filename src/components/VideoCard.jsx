import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  // demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(4, videoId, snippet);
  const img = snippet?.thumbnails?.high?.url;
  // console.log(21, snippet?.thumbnails, img);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={img}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "50px" }}>
        <Link Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "10px" }}>
        <Link
          Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color="grey">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
