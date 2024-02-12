import React from 'react';
import data from './data';

const List = () => {
  // console.log(data);
  let mappedData = data.map((person) => {
    return (
      <div key={person.id} className="flex pb-2">
        <img
          src={person.image}
          alt="person"
          className="rounded-full h-20 w-20 object-cover"
        />
        <div>
          <p className="text-2xl">{person.name}</p>
          <p className="text-lg">{person.age} years</p>
        </div>
      </div>
    );
  });

  function handleClick() {
    console.log('clicked!');
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container flex flex-col">
          <h3>{mappedData.length} birthday today</h3>
          <div>{mappedData}</div>
          <button onClick={handleClick}>Clear All</button>
        </div>
      </div>
    </>
  );
};

export default List;
