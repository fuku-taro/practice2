import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      main: '#4caf50', // 使用したいカラーを指定します
      contrastText: '#fff',
    },
    // 他のカラープロパティも必要に応じて設定できます
  },
});

export default theme;






