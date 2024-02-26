import React from 'react';

const Categories = ({ categories }) => {
  console.log(categories);

  const handleClick = (category) => {
    console.log(category);
  };

  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className="btn mx-2 bg-orange-400 text-white border-none shadow-lg hover:bg-orange-600"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
