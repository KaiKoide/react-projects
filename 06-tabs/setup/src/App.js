import useFetchData from './helper/useFetchData';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const data = useFetchData();
  console.log(data);

  return (
    <div className="h-auto">
      <div className="flex">
        <ul>
          {data.map((page) => {
            return <button key={page.id}>{page.company}</button>;
          })}
        </ul>
        <main>
          {data.map((page) => {
            return (
              <div key={page.id}>
                <h2>{page.title}</h2>
                <p>{page.company}</p>
                <div>
                  {page.duties.map((duty, index) => {
                    return <p key={index}>{duty}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
