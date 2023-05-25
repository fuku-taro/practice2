import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import classes from "../../sass/top.module.scss";


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DBtest from '../api/DBtest';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];
const dummy = [
    [
        { id: 1, url:"/Search", title: "住まい", text: "00000件" },
        { id: 2, url:"/Search", title: "店舗・事務所", text: "11111件" },
        { id: 3, url:"/Search", title: "その他", text: "22222件" },
        { id: 4, url:"/Search", title: "駐車場", text: "33333件" },
    ],
    [
        { id: 5, url:"/Search", title: "戸建", text: "55555件" },
        { id: 6, url:"/Search", title: "マンション", text: "66666件" },
        { id: 7, url:"/Search", title: "土地", text: "777件" },
        { id: 8, url:"/Search", title: "その他", text: "8件" },
    ],
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Top() {
  return (

    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <Container >
        <Header title="Blog" sections={sections} />
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
                      sx={{ backgroundColor: "aliceblue", py: 4 }}
                  >
                      <Typography variant="h5">
                          Welcome to eBuye!
                      </Typography>
                      <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quia corrupti quos reiciendis error nulla veniam
                          repellendus aut temporibus sapiente itaque dolore
                          molestiae quas debitis dolores cupiditate, voluptatem
                          tempora. Veritatis, voluptate!
                      </Typography>
                  </Container>
                  <Container
                      maxWidth="md"
                      sx={{
                          backgroundColor: "aliceblue",
                          py: 4,
                          display: "flex",
                          flexDirection: "column",
                      }}
                  >
                      <Typography variant="h5">Estates</Typography>
                      <Box sx={{ display: "flex" }}>
                          <Box
                              sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 2,
                                  justifyContent: "center",
                              }}
                          >
                            
                              {dummy[0].map((i) => {
                                  return (
                                    <Box
                                          key={i.id}
                                          sx={{
                                            backgroundColor: "white",
                                            width: 160,
                                          }}
                                      >
                                        <Link to={i.url}>
                                          <Typography variant="h6">
                                              {i.title}
                                          </Typography>
                                          <Box>{i.text}</Box>
                                        </Link>
                                      </Box>

                                  );
                              })}
                          </Box>
                          <Box
                              sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 2,
                                  justifyContent: "center",
                              }}
                          >
                              {dummy[1].map((i) => {
                                  return (
                                      <Box
                                          key={i.id}
                                          sx={{
                                              backgroundColor: "white",
                                              width: 160,
                                          }}
                                      >
                                        <Link to={i.url}>
                                          <Typography variant="h6">
                                              {i.title}
                                          </Typography>
                                          <Box>{i.text}</Box>
                                        </Link>
                                      </Box>
                                  );
                              })}
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