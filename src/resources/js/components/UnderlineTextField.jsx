import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white', // ホバー時のラベルの色
    opacity: 0.6,
  },
  '& .MuiInput-input': {
    padding: 0, // input要素のpadding削除
    textAlign: 'center',
  },
  '& .MuiInput-underline:after': {
    opacity: 0,
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'black', // ホバー時の下線の色
  },
});

export const UnderlineTextField = ({ changeEvent, value }) => (
  <StyledTextField
    variant="standard"
    size="small"
    fullWidth
    onChange={changeEvent}
    value={value}
  />
);
