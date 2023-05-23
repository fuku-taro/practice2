import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [data, setData] = useState([]);

  // データの取得
  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* データの表示 */}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.column1} - {item.column2}</li>
        ))}
      </ul>

      <Link to="/">トップに戻る</Link>
    </div>
  );
};
