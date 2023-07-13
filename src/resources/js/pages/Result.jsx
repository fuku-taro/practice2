import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from "../components/InfoCard";
import Typography from "@mui/material/Typography";
import DBtest from '../api/DBtest';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Reselt() {
  const [data, setData] = useState([]);
  const { label } = useParams(); // パラメーターを取得
  const labels = label.split('&'); // パラメーターを&で分割して配列にする
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を管理

  useEffect(() => {
    fetchData();
  }, [label]); // パラメーターの変更時に再度データを取得

console.log(data)
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
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
  const ITEMS_PER_PAGE = 5; // 1ページに表示するアイテム数
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
        <main>
          {!isLoading && (
            <div>
          <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              shape="rounded"
              size='small'
              count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
              onChange={handlePageChange}
              page={currentPage} // currentPageを指定
              sx={{ marginLeft: 'auto' , mb: 1}}
              color="primary"
            />
          </Stack>

              <InfoCard currentData={currentData}/>

            <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              shape="rounded"
              size='small'
              count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
              onChange={handlePageChange}
              page={currentPage} // currentPageを指定
              sx={{ marginLeft: 'auto' }}
              color="primary"
            />
          </Stack>
          </div>
          )}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}