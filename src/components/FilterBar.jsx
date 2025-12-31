import React from 'react';
import { foodCategories } from '../data/restaurants';
import './FilterBar.css';

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      <div className="filters-container">
        {foodCategories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => onFilterChange(category.id)}
            title={category.name}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
