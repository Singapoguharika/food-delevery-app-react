import React from 'react';
import FoodGrid from '../components/FoodGrid';
import './Restaurants.css';

function Restaurants() {
  return (
    <div className="restaurants-page">
      <h1>Explore All Restaurants</h1>
      <p>Browse through our collection of the finest restaurants and cuisines</p>
      <FoodGrid />
    </div>
  );
}

export default Restaurants;
