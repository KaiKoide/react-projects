import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';

function useFetchData() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch();
      setPageData(data);
    };
    fetchData();
  }, []);

  const dataFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  return pageData;
}

export default useFetchData;
