import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    console.log('clicked!');
    setIsExpand(!isExpand);
  };

  return (
    <div className="shadow-md border-2 w-[45rem] rounded-md mb-6">
      <div className="p-5 flex justify-between">
        <h3 className="text-2xl m-0">{title}</h3>
        <button
          onClick={handleClick}
          className="bg-sky-800 hover:bg-sky-700 text-white cursor-pointer w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
        >
          {isExpand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isExpand ? <p className="mx-5">{info}</p> : ''}
    </div>
  );
};

export default Question;
