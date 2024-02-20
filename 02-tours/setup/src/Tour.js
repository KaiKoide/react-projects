import React, { useState } from 'react';

const Tour = ({ pageData, setPageData }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = (data) => {
    const newPageData = pageData.filter((infoData) => {
      return infoData !== data;
    });

    setPageData(newPageData);
  };

  const handleChange = () => {
    setIsExpand(!isExpand);
  };

  const mappedData = pageData.map((data) => {
    return (
      <div key={data.id} className="bg-white relative m-6 flex flex-col">
        <img
          src={data.image}
          alt={data.name}
          className="h-80 object-cover w-full"
        />
        <span className="absolute bg-green-500 text-white p-2 right-0 top-0">
          ${data.price}
        </span>
        <p className="p-3 text-center font-bold text-xl">{data.name}</p>
        <p className="p-3">
          {isExpand ? `${data.info} ` : `${data.info.substring(0, 300)}... `}
          <button onClick={handleChange} className="text-green-400">
            {isExpand ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          className="btn btn-outline btn-primary m-5"
          onClick={() => handleClick(data)}
        >
          Not Interested
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="grid grid-cols-3">{mappedData}</div>
    </>
  );
};

export default Tour;
