import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/APIHandler";
import VideosComponent from "./Videos";


const FeedComponent = () => {
  const [selectedCategory, setSelectCategory] = useState("new");
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectCategory={setSelectCategory}
        />

        <Typography
          className="copyright"
          variant="body"
          sx={{ mt: "1.5", color: "#fff" }}
        ></Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <VideosComponent videos={Videos} />
      </Box>
    </Stack>
  );
};

export default FeedComponent;
