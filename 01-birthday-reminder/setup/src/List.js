import React from 'react';
import data from './data';
import { useState } from 'react';

const List = () => {
  const [listNumber, setListNumber] = useState(data.length);
  const [people, setPeople] = useState(data);

  const mappedData = people.map((person) => {
    return (
      <div key={person.id} className="flex pb-2">
        <img
          src={person.image}
          alt="person"
          className="rounded-full h-20 w-20 object-cover"
        />
        <div className="pl-3">
          <p className="text-2xl">{person.name}</p>
          <p className="text-lg">{person.age} years</p>
        </div>
      </div>
    );
  });

  function handleClick() {
    setListNumber(0);
    setPeople([]);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container flex flex-col">
          <h3>{listNumber} Birthday Today</h3>
          <div>{mappedData}</div>
          <button onClick={handleClick}>Clear All</button>
        </div>
      </div>
    </>
  );
};

export default List;
