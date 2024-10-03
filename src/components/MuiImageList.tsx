import { ImageList, ImageListItem, Stack } from "@mui/material";
import React from "react";
const itemData = [
  {
    img: "https://mui.com/static/images/image-list/breakfast.jpg",
    title: "Breakfast",
  },
  {
    img: "https://mui.com/static/images/image-list/burgers.jpg",
    title: "Tasty burger",
  },
  {
    img: "https://mui.com/static/images/image-list/camera.jpg",
    title: "Camera",
  },
  {
    img: "https://mui.com/static/images/image-list/morning.jpg",
    title: "Morning",
  },
 
]

const MuiImageList = () => {
  return (
    <Stack direction="row" spacing={2}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item , index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default MuiImageList;
