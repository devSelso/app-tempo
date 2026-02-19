import React from 'react';
import './RecentSearches.css';

const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) return null;

  return (
    <div className="recent-searches">
      <h4>Buscas recentes</h4>
      <div className="recent-list">
        {searches.map((city, index) => (
          <button
            key={index}
            className="recent-item"
            onClick={() => onSelect(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;