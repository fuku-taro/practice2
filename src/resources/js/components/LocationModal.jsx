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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import classes from '../../sass/LocationModal.scss';
const LocationModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [labels, setLabels] = useState([]); // 複数のラベルを格納する配列

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
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
  
  return (
    <div>
      <Button
      // className={classes.button}
      variant="contained"
      size='small'
      onClick={handleClickOpen('paper')}
      onChange={handleCheckboxChange}
      sx={{ mb:2 }}
      disabled={props.isButtonDisabled}
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
            {/* <h3 className={classes.h3}>福岡市内</h3> */}
            <Typography
             variant="h4"
             sx={{ 
              bgcolor: 'primary.main',
              color: '#fff'
            }}
            >
              福岡市内
            </Typography>
            <FormGroup>
    <FormControlLabel
  control={<Checkbox name="若宮５丁目" />}
  label="若宮５丁目"
  onChange={handleCheckboxChange}
/>
<FormControlLabel
  control={<Checkbox name="大字脇山" />}
  label="大字脇山"
  onChange={handleCheckboxChange}
/>
<FormControlLabel
  control={<Checkbox name="大楠１丁目" />}
  label="大楠１丁目"
  onChange={handleCheckboxChange}
/>
  {/* <FormControlLabel
    control={<Checkbox name={location1} />}
    label={location1}
    onChange={handleCheckboxChange}
  /> */}


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
           >
            検索する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default LocationModal;