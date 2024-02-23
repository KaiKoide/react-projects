import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, handleClick }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleChange = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div key={id} className="bg-white relative m-6 flex flex-col">
      <img src={image} alt={name} className="h-80 object-cover w-full" />
      <span className="absolute bg-green-500 text-white p-2 right-0 top-0">
        ${price}
      </span>
      <p className="p-3 text-center font-bold text-xl">{name}</p>
      <p className="p-3">
        {isExpand ? `${info} ` : `${info.substring(0, 300)}... `}
        <button onClick={handleChange} className="text-green-400">
          {isExpand ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <button
        className="btn btn-outline btn-primary m-5"
        onClick={() => handleClick(id)}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
