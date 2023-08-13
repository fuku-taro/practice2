import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from "../components/InfoCard";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Circular from '../components/Circular';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Sidebar from '../components/Sidebar';
// import { useMediaQuery } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
  // 仮のデフォルト値を設定
  // const defaultSidebarData = {
  //   title: "Default Title",
  //   description: "Default Description",
  //   archives: [
  //     { title: 'March 2020', url: '#' },
  //     { title: 'February 2020', url: '#' },
  //     { title: 'January 2020', url: '#' },
  //     { title: 'November 1999', url: '#' },
  //     { title: 'October 1999', url: '#' },
  //   ],
  //   social: [
  //     { name: 'GitHub', icon: GitHubIcon },
  //     { name: 'Twitter', icon: TwitterIcon },
  //     { name: 'Facebook', icon: FacebookIcon },
  //   ]
  // };
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Reselt() {
  const [data, setData] = useState([]);
  const { label } = useParams(); // パラメーターを取得
  const labels = label.split('&'); // パラメーターを&で分割して配列にする
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を管理
  const [selectedSortOption, setSelectedSortOption] = useState("price_low");
  // サイドバーのデータを取得（仮のデフォルト値を使用）
  // const [sidebar, setSidebar] = useState(defaultSidebarData);

  const handleSortChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedSortOption(selectedValue);

    try {
      setIsLoading(true); // データの取得が始まったことを示す
      let response;
      switch (selectedValue) {
        case "price_low":
          response = await axios.get("/api/dataPriceASC");
          break;
        case "price_high":
          response = await axios.get("/api/dataPriceDESC");
          break;
        case "land_area_low":
          response = await axios.get("/api/dataLand_areaASC");
          break;
        case "land_area_high":
          response = await axios.get("/api/dataLand_areaDESC");
          break;
        case "building_ex_area_low":
          response = await axios.get("/api/dataBuilding_ex_areaASC");
          break;
        case "building_ex_area_high":
          response = await axios.get("/api/dataBuilding_ex_areaDESC");
          break;
        case "register_at_new":
          response = await axios.get("/api/dataRregister_atASC");
          break;
        case "register_at_old":
          response = await axios.get("/api/dataRegister_atDESC");
          break;
        // Add more cases for other fields
        default:
          // If the selected option doesn't match any case, fetch the default data
          response = await axios.get("/api/dataPriceASC");
          break;
      }

      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // データの取得が完了したことを示す
    }
  };

  useEffect(() => {
    fetchData();
  }, [label]); // パラメーターの変更時に再度データを取得

console.log(data)
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/dataPriceASC");
      setData(response.data);
      setIsLoading(false); // データの取得が完了したらローディング状態を解除
    } catch (error) {
      console.error(error);
    }
  };

  let filteredData = data.filter(item => labels.includes(item.location2));
if (filteredData.length === 0) {
  filteredData = data.filter(item => labels.includes(item.location1));
}
const dataCount = filteredData.length;

  console.log(labels);
  console.log(filteredData);

  // ページネーション
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // 1ページに表示するアイテム数

   // ページネーションの変数
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  
  // 表示件数が変更されたときのイベントハンドラ
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value);
    setCurrentPage(1); // ページをリセットして最初のページから表示を始める
    setItemsPerPage(newItemsPerPage);
  };

  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (

    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />

          <Typography variant='h4' style={{ whiteSpace: 'pre-line' }}>
                {isLoading
    ? "検索結果を取得中..."
    : filteredData.length === 0
    ? `検索結果：${dataCount} 件\n該当する物件情報は見つかりませんでした`
    : `検索結果：${dataCount} 件`}

          </Typography>
      <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>並び替え</InputLabel>
            <NativeSelect
              input={<BootstrapInput />}
              value={selectedSortOption}
              onChange={handleSortChange}
            >
              <option value="price_low">価格が安い順</option>
              <option value="price_high">価格が高い順</option>
              <option value="land_area_low">土地面積が狭い順</option>
              <option value="land_area_high">土地面積が広い順</option>
              <option value="building_ex_area_low">建物面積が狭い順</option>
              <option value="building_ex_area_high">建物面積が広い順</option>
              <option value="register_at_new">登録日が新しい順</option>
              <option value="register_at_old">登録日が古い順</option>
              {/* Add more options for other fields */}
            </NativeSelect>
          </FormControl>

          {/* 表示件数の選択用フォーム */}
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>表示件数</InputLabel>
            <NativeSelect
              input={<BootstrapInput />}
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={10}>10件</option>
              <option value={20}>20件</option>
              <option value={30}>30件</option>
              <option value={50}>50件</option>
              <option value={100}>100件</option>
            </NativeSelect>
          </FormControl>
          {isLoading ? (
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          }}
          >
            <Circular size="5rem" />
          </div>
          ) : (
      <main>
        <div>
        <Grid container spacing={5} sx={{ mt: 3 }}>
      {/* Sidebarコンポーネントを左側に配置 */}
      <Grid item xs={4} sx={{ display: { xs: "none", sm: "flex" } }}>
        {/* <Paper > */}
        <Sidebar sx={{ width:'100%' }}/>
        {/* </Paper> */}

      </Grid>
      {/* 他のコンポーネントを右側に配置 */}
      <Grid item xs={12} sm={8}>
        <Grid container spacing={4} justifyContent='center' >
          <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      <Pagination
        shape="rounded"
        size='small'
        count={Math.ceil(filteredData.length / itemsPerPage)} // ページ数を計算
        onChange={handlePageChange}
        page={currentPage} // currentPageを指定
        sx={{ mb:1 }}
        color="primary"
      />
    </div>

    <InfoCard currentData={currentData}/>

    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      <Pagination
        shape="rounded"
        size='small'
        count={Math.ceil(filteredData.length / itemsPerPage)} // ページ数を計算
        onChange={handlePageChange}
        page={currentPage} // currentPageを指定
        color="primary"
      />
    </div>
    </Stack>
        </Grid>
      </Grid>
    </Grid>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
        </div>
      </main>
      )}
      </Container>
    </ThemeProvider>
  );
}