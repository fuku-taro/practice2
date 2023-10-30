import { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

export const AdminDialogFrame = ({
  btnComponent,
  dialogTitle,
  dialogText,
  agreeBtnText,
  agreeBtnEvent = () => {},
  isCancelButton,
  rowIndex,
  clickEvent = () => {},
  alertEvent = () => {},
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    alertEvent();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleAgree = () => {
    clickEvent(rowIndex);
    agreeBtnEvent();
    handleClose();
  };

  return (
    <Box>
      <Box onClick={handleOpen}>{btnComponent}</Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: 'red' }}>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isCancelButton
          ?? <Button onClick={handleClose}>キャンセル</Button>}
          <Button onClick={handleAgree} autoFocus>{agreeBtnText}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
