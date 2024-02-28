import React from 'react';

const Menu = ({ items, filterCategory }) => {
  let filteredItems = items.filter((item) => {
    return item.category === filterCategory;
  });

  filteredItems = filteredItems.length === 0 ? items : filteredItems;

  return (
    <div className=" grid grid-cols-3 gap-10 p-10">
      {filteredItems.map((item) => {
        return (
          <div
            key={item.id}
            data-category={item.category}
            className="bg-white shadow-lg rounded-md"
          >
            <img
              src={item.img}
              alt="menu"
              className="h-60 object-cover w-full rounded-t-md"
            />
            <div className="m-5 flex justify-between items-center text-center">
              <h3 className="text-lg font-bold m-0 capitalize">{item.title}</h3>
              <span className="m-0 bg-orange-400 text-white px-2 rounded-md">
                ${item.price}
              </span>
            </div>
            <p className="m-5 leading-7">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
