import React, { useState } from "react";
import { IconButton, ImageList, ImageListItem, Grid } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Import individual images
import image000 from "../../images/image000.jpg";
import image001 from "../../images/image001.jpg";
import image002 from "../../images/image002.jpg";
import image003 from "../../images/image003.jpg";
import image004 from "../../images/image004.jpg";
import image005 from "../../images/image005.jpg";
import image006 from "../../images/image006.jpg";

export default function MyCustomCarousel() {
  const images = [
    { id: 0, img: image000 },
    { id: 1, img: image001 },
    { id: 2, img: image002 },
    { id: 3, img: image003 },
    { id: 4, img: image004 },
    { id: 5, img: image005 },
    { id: 6, img: image006 },
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
