import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DBtest() {
  const [data, setData] = useState([]);

  // データの取得
  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // データの作成
  const createData = () => {
    const newData = {
      column1: 'Value 1',
      column2: 'Value 2',
      // 他のカラムも追加
    };
    axios.post('/api/data', newData)
      .then(response => {
        console.log(response.data);
        // データ作成後の処理
      })
      .catch(error => {
        console.error(error);
      });
  };

  // データの更新
  const updateData = (id) => {
    const updatedData = {
      column1: 'Updated Value 1',
      column2: 'Updated Value 2',
      // 他のカラムも更新
    };
    axios.put(`/api/data/${id}`, updatedData)
      .then(response => {
        console.log(response.data);
        // データ更新後の処理
      })
      .catch(error => {
        console.error(error);
      });
  };

  // データの削除
  const deleteData = (id) => {
    axios.delete(`/api/data/${id}`)
      .then(response => {
        console.log(response.data);
        // データ削除後の処理
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* データの表示 */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.column1} - {item.column2} <button onClick={() => updateData(item.id)}>更新</button> <button onClick={() => deleteData(item.id)}>削除</button></li>
        ))}
      </ul>

      {/* データの作成 */}
      <button onClick={createData}>データ作成</button>
    </div>
  );
}

export default DBtest;
