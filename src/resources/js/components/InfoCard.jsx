import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Grid } from '@mui/material';
import Table from './Table2';

export default function InfoCard() {
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
          <Card sx={{ 
            display: { xs: 'block', sm: 'flex' },
            height:  { xs: '100%',sm:"200px"}
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
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display:{ xs: 'block', sm: 'none' } }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Table />
            </CardContent>
            
            </Box>







          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
