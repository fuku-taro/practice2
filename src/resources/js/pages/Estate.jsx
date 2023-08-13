import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCustomCarousel from '../components/MyCustomCarousel';
import Table from '../components/Table';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Estate() {
  const [data, setData] = useState([]);
  const { uid } = useParams(); // uidパラメーターを取得
  console.log(uid);
  
  useEffect(() => {
    fetchData();
  }, [uid]); // パラメーターの変更時に再度データを取得

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const uids = uid.split('&'); // パラメーターを&で分割して配列にする
  console.log(data);
  const filteredData = data.filter(item => item.id === parseInt(uid));
  console.log(filteredData);
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        
        <main>
        {filteredData.map((item) => (
          <div key={item.id}>
        <MyCustomCarousel item={item}/>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Table item={item}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Table item={item}/>
              </Grid>
          </Grid>
          </div>
                           ))}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
            }
