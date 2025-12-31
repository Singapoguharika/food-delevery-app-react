import React, { useState, useMemo } from 'react';
import { restaurants } from '../data/restaurants';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';
import './Foods.css';

function Foods() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Get all unique food items from all restaurants
  const allFoods = useMemo(() => {
    return restaurants.flatMap(restaurant => 
      restaurant.foods.map(food => ({ ...food, restaurantName: restaurant.name }))
    );
  }, []);

  // Filter foods based on search and category
  const filteredFoods = useMemo(() => {
    return allFoods.filter(food => {
      const matchesSearch = 
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = 
        activeFilter === 'all' || 
        food.category === activeFilter || 
        food.type === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter, allFoods]);

  // Group by restaurant
  const groupedByRestaurant = useMemo(() => {
    const groups = {};
    filteredFoods.forEach(food => {
      if (!groups[food.restaurantName]) {
        groups[food.restaurantName] = [];
      }
      groups[food.restaurantName].push(food);
    });
    return groups;
  }, [filteredFoods]);

  return (
    <div className="foods-page">
      <div className="foods-header">
        <h1>All Foods & Dishes</h1>
        <p>Explore all delicious items from our restaurants</p>
      </div>

      <div className="foods-container">
        <SearchBar onSearch={setSearchTerm} />
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="foods-section">
          {filteredFoods.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h2>No items found</h2>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            Object.entries(groupedByRestaurant).map(([restaurantName, foods]) => (
              <div key={restaurantName} className="restaurant-food-group">
                <h2 className="restaurant-section-title">
                  <span className="restaurant-name">{restaurantName}</span>
                  <span className="food-count">({foods.length})</span>
                </h2>
                <div className="foods-grid">
                  {foods.map(food => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Foods;
