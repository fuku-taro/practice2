import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TableRegister(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <>
              <TableCell component="th" scope="row" sx={{ bgcolor: '#E7EAEC', width: '30%' }}>
               {row}
              </TableCell>
              <TableCell align="right" sx={{ width: '70%' }}>
                test
              </TableCell>
                </>
            </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
