import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

export const SuccessSnacbar = ({ children, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const StyledAlert = styled(Alert)(({ theme }) => ({
    '& .MuiAlert-icon': {
      color: 'white',
    },
  }));
  return (
    <Snackbar {...props} autoHideDuration={3000}>
      <StyledAlert {...props} sx={{ width: '100%', bgcolor: 'green', color: 'white' }} severity="success">
        {children}
      </StyledAlert>
    </Snackbar>
  );
};
