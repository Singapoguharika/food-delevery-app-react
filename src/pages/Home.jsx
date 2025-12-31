import React, { useState, useMemo } from 'react';
import { restaurants, foodCategories } from '../data/restaurants';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import FoodCategory from '../components/FoodCategory';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Get all unique food items from all restaurants
  const allFoods = useMemo(() => {
    return restaurants.flatMap(restaurant => restaurant.foods);
  }, []);

  // Filter foods based on search and category
  const filteredFoods = useMemo(() => {
    return allFoods.filter(food => {
      const matchesSearch = 
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = 
        activeFilter === 'all' || 
        food.category === activeFilter || 
        food.type === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter, allFoods]);

  // Group filtered foods by category
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
    <div className="home-page">
      <Hero />
      
      <div className="home-container">
        <SearchBar onSearch={setSearchTerm} />
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        <div className="food-section">
          {filteredFoods.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h2>No items found</h2>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            Object.entries(groupedFoods.groups).map(([category, foods]) => (
              <FoodCategory
                key={category}
                category={groupedFoods.categoryIcons[category] || category}
                foods={foods}
              />
            ))
          )}
        </div>
      </div>

      <div className="cta-section">
        <h2>Order from Your Favorite Restaurants</h2>
        <p>Get your favorite food delivered to your doorstep in minutes</p>
        <div className="stats">
          <div className="stat">
            <div className="stat-number">{restaurants.length}+</div>
            <div className="stat-label">Restaurants</div>
          </div>
          <div className="stat">
            <div className="stat-number">{allFoods.length}+</div>
            <div className="stat-label">Food Items</div>
          </div>
          <div className="stat">
            <div className="stat-number">🚀</div>
            <div className="stat-label">Fast Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
