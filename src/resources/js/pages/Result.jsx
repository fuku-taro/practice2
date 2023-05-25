import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from "../components/InfoCard";
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Reselt() {
//   const [currentPage, setCurrentPage] = useState(1); // 現在のページ番号を管理
//   const itemsPerPage = 20; // 1ページに表示するアイテム数

//   // ページネーションで表示するデータを計算する
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
  return (

    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Estate" sections={sections} />
        <main>
          {/* <DBtest /> */}
          {/* <InfoCard data={currentData} /> ページネーションで表示するデータを渡す */}
          <InfoCard />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}