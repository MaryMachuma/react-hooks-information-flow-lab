import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Example list of items (you can replace this with your own data)
  const items = [
    { id: 1, name: 'Yogurt', category: 'Dairy' },
    { id: 2, name: 'Pomegranate', category: 'Produce' },
    { id: 3, name: 'Lettuce', category: 'Produce' },
    { id: 4, name: 'String Cheese', category: 'Dairy' },
    { id: 5, name: 'Ice Cream', category: 'Dessert' },
  ];

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
