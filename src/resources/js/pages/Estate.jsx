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
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('物件番号', `${data.estate_id}`),
    createData('情報更新日', formatDate(data.created_at)),
    createData('次回更新予定日', formatDate(data.created_at)),
    createData('所在地', `${data.location1}${data.location2}${data.address}`),
    createData('沿線・駅・交通', `${data.floor_plan}`),
    createData('間取り', `${data.floor_plan}`),
    createData('間取り内訳', `${data.floor_plan}`),
    createData('サービスルーム数', `${data.floor_plan}`),
    createData('土地面積', `${data.floor_plan}`),
    createData('私道面積', `${data.floor_plan}`),
    createData('建物面積', `${data.floor_plan}`),
    createData('小学校区', `${data.floor_plan}`),
    createData('中学校区', `${data.floor_plan}`),
    createData('階建', `${data.floor_plan}`),
    createData('土地権利', `${data.floor_plan}`),
    createData('借地代', `${data.floor_plan}`),
    createData('借地期間', `${data.floor_plan}`),
    createData('その他一時金', `${data.floor_plan}`),
    createData('施設費用', `${data.floor_plan}`),
    createData('その他費用', `${data.floor_plan}`),
  ];
  const rows2 = [
    createData('保証金', `${data.estate_id}`),
    createData('権利金', formatDate(data.created_at)),
    createData('築年月', formatDate(data.created_at)),
    createData('建物建造', `${data.location1}${data.location2}${data.address}`),
    createData('建物工法', `${data.floor_plan}`),
    createData('駐車場', `${data.floor_plan}`),
    createData('駐車場・形式', `${data.floor_plan}`),
    createData('駐車場・状況', `${data.floor_plan}`),
    createData('駐車場備考', `${data.floor_plan}`),
    createData('都市計画', `${data.floor_plan}`),
    createData('用途地域', `${data.floor_plan}`),
    createData('地目', `${data.floor_plan}`),
    createData('建・容率', `${data.floor_plan}`),
    createData('地勢', `${data.floor_plan}`),
    createData('地域地区', `${data.floor_plan}`),
    createData('傾斜地面積', `${data.floor_plan}`),
    createData('接道状況詳細', `${data.floor_plan}`),
    createData('建築確認・建築確認番号', `${data.floor_plan}`),
    createData('国土法', `${data.floor_plan}`),
    createData('法令制限等', `${data.floor_plan}`),
    createData('現況', `${data.floor_plan}`),
    createData('条件等', `${data.floor_plan}`),
    createData('再建築', `${data.floor_plan}`),
    createData('土地形状', `${data.floor_plan}`),
    createData('敷地延長', `${data.floor_plan}`),
    createData('付帯権利', `${data.floor_plan}`),
    createData('引渡し可能時期', `${data.floor_plan}`),
  ];
  const rows3 = [
    createData('分譲概要', `${data.estate_id}`),
    createData('設備', formatDate(data.created_at)),
    createData('特記事項', formatDate(data.created_at)),
    createData('備考', `${data.location1}${data.location2}${data.address}`),
    createData('取引態様', `${data.floor_plan}`),
    createData('担当者', `${data.floor_plan}`),
    createData('担当者連絡先', `${data.floor_plan}`),
  ];
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
                <Table item={item} rows={rows}/>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Table item={item} rows={rows2}/>
              </Grid>
          </Grid>
          <Grid container sx={{ mt:2 }}>
                <Table item={item} rows={rows3}/>
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
