import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Grid } from '@mui/material';
import Table from './Table2';
import DBtest from '../api/DBtest';

export default function InfoCard() {
  const [data, setData] = useState([]);

  const [ location2, setLocation2 ] = useState(null);
  const [ station, setStation ] = useState(null);
  const [ land_area, setLand_area] = useState(null);
  const [ build_ex_area, setBuild_ex_area] = useState(null);
  const [ price, setPrice] = useState(null);
  const [ use_area, setUse_area] = useState(null);


  // データの取得
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredData = data.filter(item => item.location1 === "福岡市　東区");
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container  justifyContent="center">
        <Grid item xs={12}>
        {filteredData.map(item => (
          <Card sx={{ 
            display: { xs: 'block', sm: 'flex' },
            height:  { xs: 'auto',sm:"270px"},
            mb: 3,
            bgcolor: "aliceblue"
                     }}>

            <CardActionArea sx={{ flexBasis: '35%' }}>
              
              <CardMedia
                component="img"
                height="140"
                src="/images/image000.jpg"
                alt="green iguana"
              />
            </CardActionArea>
            <Box sx={{ flex:1 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.event}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display:{ xs: 'block', sm: 'none' } }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
              
              <Table 
                location2={location2}
                station={station}
                land_area={land_area}
                build_ex_areaa={build_ex_area}
                price={price}
                use_area={use_area}
              
              />
            </CardContent>
            
            </Box>







          </Card>
                      ))}
        </Grid>
      </Grid>
    </Container>
  );
}
