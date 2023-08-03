import { CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(68, 71, 145, 1)',
    },
  },
});

const Circular = (props) => (
  <ThemeProvider theme={theme}>
    <CircularProgress {...props} />
  </ThemeProvider>
);

export default Circular;
