import React from 'react';
import { TableCell } from '@mui/material';
import { TextDialogForList } from './TextDialogForList';

export const AdminTableRow = ({
  minHeight, row, isEdit, handleChangeIspUserId,
  handleChangeIspPassword, handleChangePlan, handleChangeIspGlobalIp,
  handleChangeLocationName, index, setRows, setIspAccountList,
}) => (
  <>
    {row.isp_status ? (
      <TableCell sx={{ minWidth: '100px', textAlign: 'center', color: 'limegreen' }}>使用中</TableCell>
    ) : (
      <TableCell sx={{ minWidth: '100px', textAlign: 'center', color: 'red' }}>未使用</TableCell>
    )}
    {isEdit ? (
      <>
        <TableCell sx={{ p: 0, minWidth: '100px', textAlign: 'center' }}>
          <TextDialogForList dialogTitle="ユーザID" obj="isp_user_id" changeEvent={handleChangeIspUserId} value={row.isp_user_id} minHeight={minHeight} row={row} index={index} setRows={setRows} setIspAccountList={setIspAccountList} />
        </TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>
          <TextDialogForList dialogTitle="パスワード" obj="isp_password" changeEvent={handleChangeIspPassword} value={row.isp_password} minHeight={minHeight} row={row} index={index} setRows={setRows} setIspAccountList={setIspAccountList} />
        </TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>
          <TextDialogForList dialogTitle="契約コース" obj="plan" changeEvent={handleChangePlan} value={row.plan} minHeight={minHeight} row={row} index={index} setRows={setRows} setIspAccountList={setIspAccountList} />
        </TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>
          <TextDialogForList dialogTitle="固定IPアドレス" obj="isp_global_ip" changeEvent={handleChangeIspGlobalIp} value={row.isp_global_ip} minHeight={minHeight} row={row} index={index} setRows={setRows} setIspAccountList={setIspAccountList} />
        </TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>
          <TextDialogForList dialogTitle="設置先" obj="location_name" changeEvent={handleChangeLocationName} value={row.location_name} minHeight={minHeight} row={row} index={index} setRows={setRows} setIspAccountList={setIspAccountList} />
        </TableCell>
      </>
    ) : (
      <>
        <TableCell sx={{ p: 0, minWidth: '100px', textAlign: 'center' }}>{row.isp_user_id}</TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>{row.isp_password}</TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>{row.plan}</TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>{row.isp_global_ip}</TableCell>
        <TableCell sx={{ minWidth: '100px', textAlign: 'center' }}>{row.location_name}</TableCell>
      </>
    )}
  </>
);
