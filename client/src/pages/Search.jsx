import React, { useState } from 'react';


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const foodItems = [
    { name: 'Burger', category: 'food' },
    { name: 'Pizza', category: 'food' },
    { name: 'Pasta', category: 'food' },
    { name: 'Cheesecake', category: 'cake' },
    { name: 'Chocolate cake', category: 'cake' },
    { name: 'Coffee', category: 'drink' },
    { name: 'Tea', category: 'drink' },
    { name: 'Cola', category: 'drink' },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredItems = foodItems.filter((item) => {
    if (filter === 'all') {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        item.category === filter &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        className="bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-md p-2.5 w-full sm:w-64 mb-4"
        placeholder="Search"
        onChange={handleSearch}
      />
      <div className="flex gap-2 mb-4">
        <button
          className={`py-2 px-4 rounded-md ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            filter === 'food' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleFilter('food')}
        >
          Food
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            filter === 'cake' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleFilter('cake')}
        >
          Cakes
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            filter === 'drink' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleFilter('drink')}
        >
          Drinks
        </button>
      </div>
      <ul className="list-disc pl-6">
        {filteredItems.map((item, index) => (
          <li key={index} className="text-gray-900">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
