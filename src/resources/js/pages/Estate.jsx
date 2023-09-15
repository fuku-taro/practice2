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
import SidebarDummy from '../components/SidebarDummy';
import Footer from '../components/Footer';
import Circular from "../components/Circular";
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../../sass/Estate.module.scss';





const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Estate() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を管理
  const { uid } = useParams(); // uidパラメーターを取得
  console.log(uid);
  
  useEffect(() => {
    fetchData();
  }, [uid]); // パラメーターの変更時に再度データを取得

  const fetchData = async () => {
    try {
      setIsLoading(true); // データの取得が始まったことを示す
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // データの取得が完了したことを示す
  }
  };
  // const uids = uid.split('&'); // パラメーターを&で分割して配列にする
  console.log(data);
  const filteredData = data.filter(item => item.id === parseInt(uid));
  console.log(filteredData);
  return (
    <ThemeProvider theme={defaultTheme}>
      
        <Header />
      <CssBaseline />
      {isLoading ? (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Circular size="5rem" />
                    </div>
                ) : (
                  <>
      <Container maxWidth="lg">
        
        <main>
          <div className={styles.button}>
            <Button variant="contained" startIcon={<MailIcon />}>お問い合わせ</Button>
          </div>
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
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <SidebarDummy
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
          <div className={styles.button}>
            <Button variant="contained" startIcon={<MailIcon />}>お問い合わせ</Button>
          </div>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
      </>
      )}
    </ThemeProvider>
  );
            }
