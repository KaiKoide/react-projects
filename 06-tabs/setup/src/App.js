import React, { useState, useEffect } from 'react';
// import useFetchData from './helper/useFetchData';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const url = 'https://course-api.com/react-tabs-project';

  const [pageData, setPageData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // const data = useFetchData();

  const dataFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch();
      setPageData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  const handleChange = (indexNum) => {
    setPageIndex(indexNum);
  };

  const { id, title, company, dates, duties } = pageData[pageIndex];
  return (
    <div className="h-screen">
      <div className="grid grid-cols-[200px_1fr] gap-10 p-12">
        <ul className="flex flex-col gap-5">
          {pageData.map((page, index) => {
            return (
              <button
                key={page.id}
                onClick={() => handleChange(index)}
                className={`hover:text-emerald-500
                  ${
                    pageIndex === index &&
                    'border-l-2 border-emerald-500 text-emerald-500'
                  }`}
              >
                {page.company}
              </button>
            );
          })}
        </ul>
        <main>
          <div key={id}>
            <h2>{title}</h2>
            <span className="bg-gray-300 py-1 px-2 my-2 rounded-md inline-block">
              {company}
            </span>
            <p>{dates}</p>
            <div>
              {duties.map((duty, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center gap-6 text-lg"
                  >
                    <FaAngleDoubleRight className="text-emerald-500 !w-[30px]" />
                    <p>{duty}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
