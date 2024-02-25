import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <>
      <div className="bg-cyan-500 flex justify-center items-center">
        <div className="bg-white w-[90vw] max-w-[800px] h-auto my-16 flex flex-col justify-center items-center p-10">
          <h2 className="mb-9">questions</h2>
          <div className="flex flex-col justify-center items-center">
            {data.map((data) => {
              return <SingleQuestion {...data} key={data.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
