import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import Table from './Table2';
import DBtest from '../api/DBtest';
import { useParams } from 'react-router-dom';


export default function InfoCard() {
//   const [data, setData] = useState([]);
//   const { label } = useParams(); // パラメーターを取得
//   console.log(label);
//   // データの取得
//   useEffect(() => {
//     fetchData();
//   }, [lavel]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/data');
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   const filteredData = data.filter(item => item.location1 === label);
//   console.log(filteredData);
const [data, setData] = useState([]);
  const { label } = useParams(); // パラメーターを取得
  console.log(label);
  
  useEffect(() => {
    fetchData();
  }, [label]); // パラメーターの変更時に再度データを取得

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const labels = label.split('&'); // パラメーターを&で分割して配列にする

  const filteredData = data.filter(item => labels.includes(item.location1));
  console.log(filteredData);
  return (
      <Container
          sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}
      >
          <Grid container justifyContent="center">
              <Grid item xs={12}>
                  {filteredData.map((item) => (
                      <Link
                          key={item.id}
                          to={`/Estate?uid=${item.id}`}
                          style={{ textDecoration: 'none' }} // 下線を消すスタイルを追加
                      >
                          <Card
                              sx={{
                                  display: { xs: "block", sm: "flex" },
                                  height: { xs: "auto", sm: "270px" },
                                  mb: 3,
                                  bgcolor: "aliceblue",
                              }}
                          >
                              <CardActionArea sx={{ flexBasis: "35%" }}>
                                  <CardMedia
                                      component="img"
                                      height="140"
                                      src={`/images/${item.images[0]}`}
                                      alt="green iguana"
                                  />
                              </CardActionArea>
                              <Box sx={{ flex: 1 }}>
                                  <CardContent>
                                      <Typography
                                          gutterBottom
                                          variant="h5"
                                          component="div"
                                      >
                                          {item.location2}
                                      </Typography>
                                      <Typography
                                          variant="body2"
                                          color="text.secondary"
                                          sx={{
                                              display: {
                                                  xs: "block",
                                                  sm: "none",
                                              },
                                          }}
                                      >
                                          Lizards are a widespread group of
                                          squamate reptiles, with over 6,000
                                          species, ranging across all continents
                                          except Antarctica
                                      </Typography>

                                      <Table item={item} />
                                  </CardContent>
                              </Box>
                          </Card>
                      </Link>
                  ))}
              </Grid>
          </Grid>
      </Container>
  );
}
