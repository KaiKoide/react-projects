import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

const dataFetch = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

function App() {
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPageData = async () => {
      const data = await dataFetch();
      setPageData(data);
      setIsLoading(true);
    };
    getPageData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Tours pageData={pageData} setPageData={setPageData}></Tours>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
