import React, { useState } from "react";
import { IconButton, ImageList, ImageListItem, Grid } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function MyCustomCarousel({item}) {
  const images = [
    { id: 0, img: `/images/${item.images[0]}` },
    { id: 1, img: `/images/${item.images[1]}` },
    { id: 2, img: `/images/${item.images[2]}` },
    { id: 3, img: `/images/${item.images[3]}` },
    { id: 4, img: `/images/${item.images[4]}` },
    { id: 5, img: `/images/${item.images[5]}` },
    { id: 6, img: `/images/${item.images[6]}` },
  ];

  const [active, setActive] = useState(0);

  const prevImage = () => {
    if (active <= 0) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const nextImage = () => {
    if (active >= images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={{ position: 'relative' }}>
          <IconButton
            style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', zIndex:1}}
            onClick={prevImage}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <ImageList cols={1}>
            <ImageListItem>
              <img src={images[active].img} alt={`Slide ${active + 1}`} />
            </ImageListItem>
          </ImageList>
          <IconButton
            style={{ position: 'absolute', right: 0, top: '50%', transform: 'translate(50%, -50%)' }}
            onClick={nextImage}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={12}>
        <ImageList cols={2} gap={8} sx={{ width: '100%'}}>
          {images.map((image) => (
            <ImageListItem key={image.id}>
              <img src={image.img} alt={`Thumbnail ${image.id}`} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
