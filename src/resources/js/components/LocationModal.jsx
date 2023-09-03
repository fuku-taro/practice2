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
import fukuokaData from './fukuokaAreaData.json';
import kitakyusyuData from './kitakyusyuAreaData.json';
import chikuhouData from './chikuhouAreaData.json';
import chikugoData from './chikugoAreaData.json';
import theme from "./theme";
import hokubuData from '../json/hokubuAreaData.json';
import chubuData from '../json/chubuAreaData.json';
import nanbuData from '../json/nanbuAreaData.json';
import ritouData from '../json/ritouAreaData.json';

const LocationModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [labels, setLabels] = useState([]); // 複数のラベルを格納する配列
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const uniqueLabels = [...new Set(props.labels)]; // 重複を取り除く
  // console.log('Data',Data);
  // const areaData = [...fukuokaData, ...kitakyusyuData, ...chikuhouData, ...chikugoData]
  const areaData = [...hokubuData, ...chubuData, ...nanbuData, ...ritouData]


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setLabels([]);
    setButtonDisabled(true);
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
  // console.log("fukuokaAreaData:", props.fukuokaAreaData);

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
              {uniqueLabels.map((labelsCityName)=>(
            <div key={labelsCityName}>
            <Typography
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#fff'
                  }}
                >
                  {labelsCityName}
                </Typography><Grid container>
                    {areaData.find((item) => item.cityName === labelsCityName)?.data.map((item, townIndex) => (
                      <Grid item xs={12} md={4} key={townIndex}>
                        <FormControlLabel
                          control={<Checkbox name={item.townNames} sx={{ px: 2 }} />}
                          label={item.townNames}
                          onChange={LMhandleCheckboxChange} />
                      </Grid>
                      ))}
                  </Grid>
                  </div>
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