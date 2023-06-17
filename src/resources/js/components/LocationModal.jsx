import * as React from 'react';
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
import classes from '../../sass/LocationModal.scss';
const LocationModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

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

  return (
    <div>
      <Button
      // className={classes.button}
      variant="contained"
      size='small'
      onClick={handleClickOpen('paper')}
      onChange={props.handleCheckboxChange}
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
  control={<Checkbox name="福岡市　東区" />}
  label="福岡市　東区"
  onChange={props.handleCheckboxChange}
/>
<FormControlLabel
  control={<Checkbox name="福岡市　西区" />}
  label="福岡市　西区"
  onChange={props.handleCheckboxChange}
/>
<FormControlLabel
  control={<Checkbox name="福岡市　南区" />}
  label="福岡市　南区"
  onChange={props.handleCheckboxChange}
/>
  {/* <FormControlLabel
    control={<Checkbox name={location1} />}
    label={location1}
    onChange={handleCheckboxChange}
  /> */}


    </FormGroup>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button
           variant="contained"
           onClick={handleClose}
           startIcon={<SearchIcon />}
           >
            検索する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default LocationModal;