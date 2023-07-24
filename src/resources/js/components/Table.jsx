import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function CustomizedTables({item}) {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('物件番号', `${item.estate_id}`),
    createData('情報更新日', formatDate(item.created_at)),
    createData('次回更新予定日', formatDate(item.created_at)),
    // createData('情報更新日', `${item.created_at}`),
    // createData('次回更新予定日', `${item.created_at}`),
    createData('所在地', `${item.location1}${item.location2}${item.address}`),
    createData('間取り', `${item.floor_plan}`),
  ];
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ bgcolor: '#E7EAEC', width: '30%' }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ width: '70%' }}>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
