import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onLocationClick }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade..."
        className="search-input"
      />
      <button type="submit" className="search-btn">
        <i className="fas fa-search"></i>
      </button>
      <button 
        type="button" 
        className="location-btn" 
        onClick={onLocationClick}
        title="Usar minha localização"
      >
        <i className="fas fa-location-dot"></i>
      </button>
    </form>
  );
};

export default SearchBar;