import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [data, setData] = useState([]);
  const [dataDesc, setDataDesc] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://flowers-api-yqhj.onrender.com/products'
        );

        setData(response.data);
        setDataDesc([...new Set(response.data.map((el) => el.desc))]);
      } catch (error) {
        setData(<h2>An error occurred while retrieving data</h2>);
        console.log(error);
      }
    };

    getData();
  }, []);

  return { data: data, dataDesc: dataDesc };
};
