import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const dataFetch = async () => {
  const res = await fetch('https://course-api.com/react-tours-project');
  const data = await res.json();
  return data;
};

const Tours = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const getPageData = async () => {
      const data = await dataFetch();
      setPageData(data);
    };
    getPageData();
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {pageData.length > 0 ? (
        <div className="flex flex-col items-center">
          <h2 className="items-center pt-20 border-b-8 inline-block border-green-400 pb-5">
            Our Tours
          </h2>
          <Tour pageData={pageData} setPageData={setPageData}></Tour>
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center">
          <div className="font-normal text-5xl mt-20">No Tours Left</div>
          <button
            className="btn btn-outline btn-primary mt-10"
            onClick={reloadPage}
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default Tours;
