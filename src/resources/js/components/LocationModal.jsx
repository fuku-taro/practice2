import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // ThemeProviderをインポート
import LocationModalStyle from '../../sass/LocationModal.module.scss';
import theme from "./theme";
import chikuhouArea from './SearchChikuhouArea';

const LocationModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [labels, setLabels] = useState([]); // 複数のラベルを格納する配列
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  console.log(labels)


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setLabels([]);
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const LMhandleCheckboxChange = (event) => {
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
  
  return (
    <ThemeProvider theme={theme}>
    <div className={LocationModalStyle.a}>
      <Button
      variant="contained"
      size='small'
      onClick={handleClickOpen('paper')}
      onChange={LMhandleCheckboxChange}
      sx={{ my:2 }}
      disabled={props.isButtonDisabled}
      color="success"
      >
        詳しいエリアを選択
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            maxWidth: '900px',
            width: '90%'
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">詳細エリアを選択</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <FormGroup>
              {props.labels.map((item)=>(
            <>
            <Typography
                  variant="h4"
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#fff'
                  }}
                >
                  {item}
                </Typography><Grid container>
                    {chikuhouArea[0].chikuhouCity.map((item, cityIndex) => (
                      <Grid item xs={12} md={4} key={cityIndex}>
                        <FormControlLabel
                          control={<Checkbox name={item.cityName} sx={{ px: 2 }} />}
                          label={item.cityName}
                          onChange={LMhandleCheckboxChange} />
                      </Grid>
                    ))}
                  </Grid>
                  </>
                  ))}
              </FormGroup>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button
          size="small"
           variant="contained"
           component={Link}
           to={`/Result/${labels.join('&')}`} // 複数のラベルを&で繋げてURLに追加
           startIcon={<SearchIcon />}
           sx={{ ml:2 }}
           disabled={isButtonDisabled}
           >
            検索する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}
export default LocationModal;