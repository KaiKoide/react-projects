import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [peopleData, setPeople] = useState(people);
  const [index, setIndex] = useState(0);

  console.log(peopleData);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-[600px] w-[90vw] h-3/5 bg-lime-200 flex flex-col items-center justify-center shadow-lg relative">
        <img
          src={peopleData[index].image}
          alt="person"
          className="w-36 h-36 object-cover rounded-full"
        />
        <span className="bg-indigo-500 text-white p-3 rounded-full absolute top-9 left-[14rem]">
          <FaQuoteRight />
        </span>
        <p className="capitalize text-2xl text-zinc-800 mt-2 mb-1 font-bold tracking-wider">
          {peopleData[index].name}
        </p>
        <p className="uppercase tracking-wide text-indigo-500 text-sm">
          {peopleData[index].job}
        </p>
        <p className="mx-5 text-center">{peopleData[index].text}</p>
        <div className="flex gap-5">
          <FaChevronLeft className="cursor-pointer hover:text-slate-500" />
          <FaChevronRight className="cursor-pointer hover:text-slate-500" />
        </div>
        <button className="btn btn-primary text-white capitalize mt-5">
          surprise me!
        </button>
      </div>
    </div>
  );
};

export default Review;
