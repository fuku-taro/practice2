import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DBtest from '../api/DBtest';



export default function CustomizedTables() {
  const [data, setData] = useState([]);

  const [ location2, setLocation2 ] = useState(null);
  const [ station, setStation ] = useState(null);
  const [ land_area, setLand_area] = useState(null);
  const [ build_ex_area, setBuild_ex_area] = useState(null);
  const [ price, setPrice] = useState(null);
  const [ use_area, setUse_area] = useState(null);
    // データの取得
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const filteredData = data.filter(item => item.location1 === "福岡市　東区");
  return (
    <TableContainer component={Paper} sx={{ width:'100%' }}>
              {filteredData.map(item => (
      <Table size="small" aria-label="a dense table">
        <TableBody>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,display:{ xs: 'none', sm: 'flex' }}}
            >
              <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '30%' }}>
                所在地
              </TableCell>
              <TableCell align="left" sx={{ width: '70%' }}>{item.location2}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,display:{ xs: 'none', sm: 'flex' }}}
            >
              <TableCell component="th" scope="row" sx={{ bgcolor: 'whitesmoke', width: '30%' }}>
                交通
              </TableCell>
              <TableCell align="left" sx={{ width: '70%' }}>{item.station}</TableCell>
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
                  <TableCell align="left" sx={{ width: '70%' }}>{item.build_ex_area}</TableCell>
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
                            ))}{/* mapの終わりタグ */}
    </TableContainer>
  );
}
