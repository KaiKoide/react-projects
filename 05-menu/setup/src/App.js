import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const categories = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <main className="">
      <section className="flex flex-col items-center justify-center">
        <h2 className="pt-16 pb-3">our menu</h2>
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
