import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import './FoodGrid.css';

function FoodGrid() {
  return (
    <section className="restaurants-section">
      <div className="section-container">
        <h2>Popular Restaurants</h2>
        <p>Order from the best restaurants in your area</p>
        <div className="restaurants-grid">
          {restaurants.map(restaurant => (
            <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p className="cuisine">{restaurant.cuisine}</p>
                <div className="restaurant-details">
                  <span>⭐ {restaurant.rating}</span>
                  <span>🚗 {restaurant.deliveryTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodGrid;
