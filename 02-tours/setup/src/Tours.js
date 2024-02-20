import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const Tours = ({ pageData, setPageData }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  const handleSetPageData = (newData) => {
    setPageData(newData);
  };

  return (
    <div>
      {pageData.length > 0 ? (
        <div className="flex flex-col items-center">
          <h2 className="items-center pt-20 border-b-8 inline-block border-green-400 pb-5">
            Our Tours
          </h2>
          <Tour pageData={pageData} setPageData={handleSetPageData}></Tour>
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
