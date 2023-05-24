import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DBtest() {
  const [data, setData] = useState([]);

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

  // データの作成
  const createData = async () => {
    const newData = {
      column1: 'Value 1',
      column2: 'Value 2',
      // 他のカラムも追加
    };
    try {
      const response = await axios.post('/api/data', newData);
      console.log(response.data);
      // データ作成後の処理
    } catch (error) {
      console.error(error);
    }
  };

  // データの更新
  const updateData = async (id) => {
    const updatedData = {
      column1: 'Updated Value 1',
      column2: 'Updated Value 2',
      // 他のカラムも更新
    };
    try {
      const response = await axios.put(`/api/data/${id}`, updatedData);
      console.log(response.data);
      // データ更新後の処理
    } catch (error) {
      console.error(error);
    }
  };

  // データの削除
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`/api/data/${id}`);
      console.log(response.data);
      // データ削除後の処理
    } catch (error) {
      console.error(error);
    }
  };
   console.log(...data);
  return (
    <div>
      {/* データの表示 */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.estate_id} - {item.location1} <button onClick={() => updateData(item.id)}>更新</button> <button onClick={() => deleteData(item.id)}>削除</button></li>
        ))}
      </ul>

      {/* データの作成 */}
      <button onClick={createData}>データ作成</button>
    </div>
  );
}

export default DBtest;
