import React from 'react';
import { formatDate, formatTime, getWeatherIconUrl, capitalizeFirstLetter } from '../utils/helpers';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const {
    name,
    sys: { country, sunrise: sunriseTime, sunset: sunsetTime },
    main: { temp, feels_like, humidity, pressure },
    weather: [{ description, icon }],
    wind: { speed }
  } = data;

  return (
    <div className="weather-card">
      <div className="city-info">
        <h2>{name}, {country}</h2>
        <p>{formatDate(Date.now() / 1000)}</p>
      </div>

      <div className="weather-main">
        <img 
          src={getWeatherIconUrl(icon)} 
          alt={description}
          className="weather-icon"
        />
        <div className="temperature">
          <span>{Math.round(temp)}</span>
          <span className="celsius">°C</span>
        </div>
        <p className="weather-description">{capitalizeFirstLetter(description)}</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <i className="fas fa-temperature-low"></i>
          <div>
            <span className="detail-label">Sensação</span>
            <span>{Math.round(feels_like)}°C</span>
          </div>
        </div>
        <div className="detail-item">
          <i className="fas fa-droplet"></i>
          <div>
            <span className="detail-label">Umidade</span>
            <span>{humidity}%</span>
          </div>
        </div>
        <div className="detail-item">
          <i className="fas fa-wind"></i>
          <div>
            <span className="detail-label">Vento</span>
            <span>{Math.round(speed * 3.6)} km/h</span>
          </div>
        </div>
        <div className="detail-item">
          <i className="fas fa-gauge-high"></i>
          <div>
            <span className="detail-label">Pressão</span>
            <span>{pressure} hPa</span>
          </div>
        </div>
      </div>

      <div className="sun-times">
        <div className="sun-item">
          <i className="fas fa-sun"></i>
          <span>Nascer: {formatTime(sunriseTime)}</span>
        </div>
        <div className="sun-item">
          <i className="fas fa-moon"></i>
          <span>Pôr: {formatTime(sunsetTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;