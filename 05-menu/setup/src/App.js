import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState('all');

  const categories = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <main className="bg-violet-300 min-h-screen">
      <section className="flex flex-col items-center justify-center">
        <h2 className="pt-16 pb-3 font-bold text-6xl text-white capitalize">
          our menu
        </h2>
        <Categories
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <Menu items={items} filterCategory={category} />
      </section>
    </main>
  );
}

export default App;
