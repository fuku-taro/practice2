import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import classes from "../../sass/top.module.scss";


import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import DBtest from '../api/DBtest';

const dummy = [
    
        { id: 1, url:"/Search_area", title: "エリアから探す"},
        { id: 2, url:"/Search_area", title: "地図から探す"},
        { id: 3, url:"/Search_area", title: "路線・駅から探す"},
        // { id: 4, url:"/Search_area", title: "駐車場", text: "33333件" },
    
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Search() {
  return (

    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <Container >
        <Header/>
        <main>
          {/* <DBtest /> */}
          <div className={classes.content}>
              <Box
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                    //   my: 10,
                    //   gap: 10,
                  }}
              >
                  <Container
                      maxWidth="md"
                      sx={{
                          backgroundColor: "aliceblue",
                          py: 4,
                          display: "flex",
                          flexDirection: "column",
                      }}
                  >
                      <Typography variant="h5">Search for</Typography>
<Box sx={{ display: "flex" }}>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
      justifyContent: "center",
    }}
  >
        <Grid container spacing={2}>

    {dummy.map((i) => {
      return (
        <Grid item xs={6}          key={i.id}>
        <Box

          sx={{
            backgroundColor: "white",
            width: 350,
            height: 70,
            textAlign:"center"
          }}
        >
            
          <Link to={i.url}>
            <Typography variant="h6" sx={{ pt:2 }}>
              {i.title}
            </Typography>
          </Link>
          
        </Box>
        </Grid>

      );
    })}
    </Grid>
  </Box>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
      justifyContent: "center",
    }}
  >
  </Box>
  
</Box>


                  </Container>
                  
              </Box>
          </div>

        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
            }