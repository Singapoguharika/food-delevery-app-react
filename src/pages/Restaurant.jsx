import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import FoodCard from '../components/FoodCard';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import './Restaurant.css';

function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  if (!restaurant) {
    return (
      <div className="error-page">
        <h1>Restaurant not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const filteredFoods = useMemo(() => {
    return restaurant.foods.filter(food => {
      const matchesSearch = 
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = 
        activeFilter === 'all' || 
        food.category === activeFilter || 
        food.type === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const groupedFoods = useMemo(() => {
    const groups = {};
    const categoryIcons = {
      pizza: '🍕 Pizza',
      burger: '🍔 Burgers',
      sushi: '🍣 Sushi',
      tacos: '🌮 Tacos',
      nonveg: '🍗 Non-Veg',
      veg: '🥗 Vegetarian',
      dessert: '🍰 Desserts',
      icecream: '🍦 Ice Cream',
    };

    filteredFoods.forEach(food => {
      const category = food.category || food.type;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(food);
    });

    return { groups, categoryIcons };
  }, [filteredFoods]);

  return (
    <div className="restaurant-page">
      <div className="restaurant-header">
        <img src={restaurant.image} alt={restaurant.name} className="header-image" />
        <div className="restaurant-header-info">
          <Link to="/" className="back-link">← Back</Link>
          <h1>{restaurant.name}</h1>
          <p className="cuisine">{restaurant.cuisine} Cuisine</p>
          <div className="details">
            <span className="detail-item">⭐ {restaurant.rating}</span>
            <span className="detail-item">🚗 {restaurant.deliveryTime}</span>
            <span className="detail-item">💰 Min: ${restaurant.minOrder}</span>
          </div>
        </div>
      </div>

      <div className="restaurant-content">
        <SearchBar onSearch={setSearchTerm} />
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="menu-section">
          <h2 className="menu-title">Menu</h2>
          
          {filteredFoods.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🍽️</div>
              <h3>No items found</h3>
              <p>Try different search or filter options</p>
            </div>
          ) : (
            <div>
              {Object.entries(groupedFoods.groups).map(([category, foods]) => (
                <div key={category} className="food-category">
                  <h3 className="category-title">
                    {groupedFoods.categoryIcons[category] || category}
                  </h3>
                  <div className="foods-grid">
                    {foods.map(food => (
                      <FoodCard key={food.id} food={food} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
