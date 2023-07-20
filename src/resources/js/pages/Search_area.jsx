import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LocationModal from "../components/LocationModal";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import classes from '../../sass/Search_area.scss';

import DBtest from '../api/DBtest';

const dummy = [
    
        { id: 1, url:"/Search_area", title: <Checkbox>福岡市</Checkbox>},
        { id: 2, url:"/Search_area", title: "地図から探す"},
        { id: 3, url:"/Search_area", title: "路線・駅から探す"},
        // { id: 4, url:"/Search_area", title: "駐車場", text: "33333件" },
    
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Search_area() {
  const [label, setLabel] = useState(""); // labelの初期値を設定
  const [labels, setLabels] = useState([]); // 複数のラベルを格納する配列
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    // const a = fetchData2();

  }, [label]); // パラメーターの変更時に再度データを取得
  
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

    const handleSearch = () => {
        // チェックされたアイテムの処理を行う
        // ...
    
        // 別のページに遷移する
      };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let updatedLabels = [];
  
    if (checked) {
      updatedLabels = [...labels, name];
    } else {
      updatedLabels = labels.filter((label) => label !== name);
    }
  
    setLabels(updatedLabels);
  
    // チェックボックスがチェックされた場合はボタンの disabled を解除し、チェックが外れた場合は disabled を設定します
    setButtonDisabled(updatedLabels.length === 0);
  };
  console.log(data);
  return (

    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <Container >
        <Header  />
        <main>
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
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
      justifyContent: "center",
      flexDirection: "column"
    }}
  >
    <Typography variant="h5">エリアを選んで下さい</Typography>
      <Box sx={{ backgroundColor: "white", textAlign: "left" }}>
        <FormGroup>
          <Grid container>
            {data.map((item, index) => (
              <Grid item xs={6} md={3}key={index}>
                <FormControlLabel
                  control={<Checkbox name={item.location1} />}
                  label={item.location1}
                  onChange={handleCheckboxChange}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
  <LocationModal
    handleCheckboxChange={handleCheckboxChange}
    isButtonDisabled={isButtonDisabled}
    labels={labels}
  />

    </Box>

</Box>
<Button
      variant="contained"
      component={Link}
      to={`/Result/${labels.join('&')}`} // 複数のラベルを&で繋げてURLに追加
      onClick={handleSearch}
      startIcon={<SearchIcon />}
      sx={{ margin: '0 auto', mt: 2 }}
      disabled={isButtonDisabled}
    >
      検索する
    </Button>

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