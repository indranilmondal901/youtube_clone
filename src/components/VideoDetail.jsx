import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Stack, Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./index";
import { FetchFromApi } from "../utils/FetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });

    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}`).then((data) => {
      setRelatedVideos(data?.items);
    });
  }, [id]);

  if (!videoDetail?.snippet) return "Loading....";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      {/* {videoDetail && videoDetail.snippet ? ( */}
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px " }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center "
        >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>

      {/* ) : (
         <p>Loading</p>
       )} */}
    </Box>
  );
};

export default VideoDetail;
