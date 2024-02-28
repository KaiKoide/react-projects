import React from 'react';

const Categories = ({ categories, setCategory }) => {
  const filterMenu = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => filterMenu(category)}
            className="btn uppercase mx-2 bg-orange-400 text-white border-none shadow-lg hover:bg-orange-600"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
