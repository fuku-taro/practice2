import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function CustomizedTables({item}) {
    return (
    <TableContainer component={Paper} sx={{ width:'100%' }}>
      <Table size="small" aria-label="a dense table">
        <TableBody>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,display:{ xs: 'none', sm: 'flex' }}}
            >
              <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '30%' }}>
                所在地
              </TableCell>
              <TableCell align="left" sx={{ width: '70%' }}>{`${item.location1}　${item.location2}`}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,display:{ xs: 'none', sm: 'flex' }}}
            >
              <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '30%' }}>
                交通
              </TableCell>
              <TableCell align="left" sx={{ width: '70%' }}>{`${item.nearest_line}　${item.station}駅　徒歩${item.walk_time}(分)`}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,display:{ xs: 'none', sm: 'flex' }}}
            >

                  <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '40%' }}>
                    土地面積
                  </TableCell>
                  <TableCell align="left" sx={{ width: '70%' }}>{item.land_area}</TableCell>
                  <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '40%' }}>
                    建物面積
                  </TableCell>
                  <TableCell align="left" sx={{ width: '70%' }}>{item.building_ex_area}</TableCell>
                  <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '40%' }}>
                    建物構造
                  </TableCell>
                  <TableCell align="left" sx={{ width: '70%' }}>木造</TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,display:{ xs: 'none', sm: 'flex' }}}
            >

                  <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '40%' }}>
                    価格
                  </TableCell>
                  <TableCell align="left" sx={{ width: '70%' ,color: 'red'}}>{item.price}</TableCell>
                  <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '40%' }}>
                    用途地域
                  </TableCell>
                  <TableCell align="left" sx={{ width: '70%' }}>{item.use_area}</TableCell>
                  <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '40%' }}>
                    建・容率
                  </TableCell>
                  <TableCell align="left" sx={{ width: '70%' }}></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
