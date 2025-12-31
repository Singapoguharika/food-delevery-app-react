import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder="Search for restaurants, cuisines, or dishes..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-btn" onClick={handleClear}>✕</button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
