import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  // const handleCountNext = () => {
  //   if (index >= people.length - 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };

  // const handleCountPrevious = () => {
  //   if (index <= 0) {
  //     setIndex(people.length - 1);
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };

  const handleCount = (num) => {
    if (index <= 0 && num === -1) {
      setIndex(() => {
        return people.length - 1;
      });
    } else if (index >= people.length - 1 && num === 1) {
      setIndex(() => {
        return 0;
      });
    } else {
      setIndex((currentIndex) => {
        return currentIndex + num;
      });
    }
  };

  const handleCountRandom = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-[600px] w-[90vw] h-3/5 bg-white flex flex-col items-center justify-center shadow-lg relative">
        <img
          src={people[index].image}
          alt="person"
          className="w-36 h-36 object-cover rounded-full"
        />
        <span className="bg-indigo-500 text-white p-3 rounded-full absolute top-9 left-[14rem]">
          <FaQuoteRight />
        </span>
        <p className="capitalize text-2xl text-zinc-800 mt-2 mb-1 font-bold tracking-wider">
          {people[index].name}
        </p>
        <p className="uppercase tracking-wide text-indigo-500 text-sm">
          {people[index].job}
        </p>
        <p className="mx-5 text-center pointer-events-none">
          {people[index].text}
        </p>
        <div className="flex gap-5">
          <FaChevronLeft
            className="cursor-pointer hover:text-slate-500"
            onClick={() => handleCount(-1)}
            // onClick={handleCountPrevious}
          />
          <FaChevronRight
            className="cursor-pointer hover:text-slate-500"
            onClick={() => handleCount(1)}
            // onClick={handleCountNext}
          />
        </div>
        <button
          className="btn btn-primary text-white capitalize mt-5"
          onClick={handleCountRandom}
        >
          surprise me!
        </button>
      </div>
    </div>
  );
};

export default Review;
