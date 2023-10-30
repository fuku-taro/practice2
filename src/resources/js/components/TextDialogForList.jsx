import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import { UnderlineTextField } from './UnderlineTextField';

export const TextDialogForList = ({
  dialogTitle, changeEvent, value, minHeight = '44px', index, obj, setRows, setIspAccountList,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          cursor: 'pointer', minHeight, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        change
      >
        {value}
      </Box>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: 'black', textAlign: 'left' }}>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          {/* indexとobjが同じ値を持つため新規登録と編集登録の配列が同じフォーカスに当たらないよう分岐処理を行う */}
          {/* 新規登録の配列が渡ってきた時にはその配列を渡す */}
          {setRows ? (
            <UnderlineTextField
              changeEvent={(e) => {
                setRows((prev) => prev.map((i, num) => {
                  if (index === num) {
                    return { ...i, [obj]: e.target.value };
                  }
                  return i;
                }));
                // return changeEvent();
              }}
              value={value}
            />
          ) : (
            // 保有アカウント一覧の配列が渡ってきた時には変更するための配列を渡す
            <UnderlineTextField
              changeEvent={(e) => {
                setIspAccountList((item) => item.map((i, num) => {
                  if (index === num) {
                    return { ...i, [obj]: e.target.value };
                  }
                  return i;
                }));
                // return changeEvent();
              }}
              value={value}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose} autoFocus>
            完了
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
