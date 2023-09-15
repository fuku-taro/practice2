import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function CustomizedTables(props) {

  // const formatDate = (timestamp) => {
  //   const date = new Date(timestamp);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');
  //   return `${year}年${month}月${day}日`;
  // };
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  // const rows = [
  //   createData('物件番号', `${item.estate_id}`),
  //   createData('情報更新日', formatDate(item.created_at)),
  //   createData('次回更新予定日', formatDate(item.created_at)),
  //   createData('所在地', `${item.location1}${item.location2}${item.address}`),
  //   createData('沿線・駅・交通', `${item.floor_plan}`),
  //   createData('間取り', `${item.floor_plan}`),
  //   createData('間取り内訳', `${item.floor_plan}`),
  //   createData('サービスルーム数', `${item.floor_plan}`),
  //   createData('土地面積', `${item.floor_plan}`),
  //   createData('私道面積', `${item.floor_plan}`),
  //   createData('建物面積', `${item.floor_plan}`),
  //   createData('小学校区', `${item.floor_plan}`),
  //   createData('中学校区', `${item.floor_plan}`),
  //   createData('階建', `${item.floor_plan}`),
  //   createData('土地権利', `${item.floor_plan}`),
  //   createData('借地代', `${item.floor_plan}`),
  //   createData('借地期間', `${item.floor_plan}`),
  //   createData('その他一時金', `${item.floor_plan}`),
  //   createData('施設費用', `${item.floor_plan}`),
  //   createData('その他費用', `${item.floor_plan}`),
  // ];
  // const rows2 = [
  //   createData('保証金', `${item.estate_id}`),
  //   createData('権利金', formatDate(item.created_at)),
  //   createData('築年月', formatDate(item.created_at)),
  //   createData('建物建造', `${item.location1}${item.location2}${item.address}`),
  //   createData('建物工法', `${item.floor_plan}`),
  //   createData('駐車場', `${item.floor_plan}`),
  //   createData('駐車場・形式', `${item.floor_plan}`),
  //   createData('駐車場・状況', `${item.floor_plan}`),
  //   createData('駐車場備考', `${item.floor_plan}`),
  //   createData('都市計画', `${item.floor_plan}`),
  //   createData('用途地域', `${item.floor_plan}`),
  //   createData('地目', `${item.floor_plan}`),
  //   createData('建・容率', `${item.floor_plan}`),
  //   createData('地勢', `${item.floor_plan}`),
  //   createData('地域地区', `${item.floor_plan}`),
  //   createData('傾斜地面積', `${item.floor_plan}`),
  //   createData('接道状況詳細', `${item.floor_plan}`),
  //   createData('建築確認・建築確認番号', `${item.floor_plan}`),
  //   createData('国土法', `${item.floor_plan}`),
  //   createData('法令制限等', `${item.floor_plan}`),
  //   createData('現況', `${item.floor_plan}`),
  //   createData('条件等', `${item.floor_plan}`),
  //   createData('再建築', `${item.floor_plan}`),
  //   createData('土地形状', `${item.floor_plan}`),
  //   createData('敷地延長', `${item.floor_plan}`),
  //   createData('付帯権利', `${item.floor_plan}`),
  //   createData('引渡し可能時期', `${item.floor_plan}`),
  // ];
  // const rows3 = [
  //   createData('分譲概要', `${item.estate_id}`),
  //   createData('設備', formatDate(item.created_at)),
  //   createData('特記事項', formatDate(item.created_at)),
  //   createData('備考', `${item.location1}${item.location2}${item.address}`),
  //   createData('取引態様', `${item.floor_plan}`),
  //   createData('担当者', `${item.floor_plan}`),
  //   createData('担当者連絡先', `${item.floor_plan}`),
  // ];
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ bgcolor: '#E7EAEC', width: '30%' }}>
              {/* {row.name !== null ? row.name : ""} */}
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
