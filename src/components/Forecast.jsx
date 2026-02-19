import React from 'react';
import { getDayName, getWeatherIconUrl } from '../utils/helpers';
import './Forecast.css';

const Forecast = ({ data }) => {
  if (!data) return null;

  // Pegar uma previsão por dia (12:00)
  const dailyForecasts = data.list
    .filter(item => item.dt_txt.includes('12:00:00'))
    .slice(0, 5);

  return (
    <div className="forecast">
      <h3>Previsão para 5 dias</h3>
      <div className="forecast-container">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-day">{getDayName(day.dt)}</div>
            <img 
              src={getWeatherIconUrl(day.weather[0].icon)} 
              alt={day.weather[0].description}
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <span className="max-temp">{Math.round(day.main.temp_max)}°</span>
              <span className="min-temp">{Math.round(day.main.temp_min)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;