import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Carregando dados do tempo...</p>
    </div>
  );
};

export default Loading;