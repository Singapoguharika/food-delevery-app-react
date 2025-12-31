import React from 'react';
import FoodCard from './FoodCard';
import './FoodCategory.css';

function FoodCategory({ category, foods }) {
  if (foods.length === 0) return null;

  return (
    <div className="food-category">
      <h2 className="category-title">{category}</h2>
      <div className="foods-grid">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default FoodCategory;
