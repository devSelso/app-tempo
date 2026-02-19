import React, { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import RecentSearches from "./components/RecentSearches";
import Loading from "./components/Loading";
import { getWeatherByCity, getWeatherByCoords } from "./services/weatherApi";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentCities, setRecentCities] = useState([]);
  const { isDark, toggleTheme } = useTheme();

  // Carregar cidades recentes do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentCities");
    if (saved) {
      setRecentCities(JSON.parse(saved));
    }
  }, []);

  // Salvar cidades recentes no localStorage
  const addToRecentCities = (city) => {
    const updated = [city, ...recentCities.filter((c) => c !== city)].slice(
      0,
      5,
    );
    setRecentCities(updated);
    localStorage.setItem("recentCities", JSON.stringify(updated));
  };

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data.current);
      setForecastData(data.forecast);
      addToRecentCities(city);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      setError("Seu navegador não suporta geolocalização");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await getWeatherByCoords(latitude, longitude);
          setWeatherData(data.current);
          setForecastData(data.forecast);
          addToRecentCities(data.cityName);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Não foi possível obter sua localização");
        setLoading(false);
      },
    );
  };

  return (
    <div className="app">
      <header>
        <h1>
          <i className="fas fa-cloud-sun"></i>
          App do Tempo
        </h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          <i className={`fas fa-${isDark ? "sun" : "moon"}`}></i>
        </button>
      </header>

      <SearchBar
        onSearch={handleSearch}
        onLocationClick={handleLocationClick}
      />

      {error && (
        <div className="error-message">
          <i className="fas fa-exclamation-triangle"></i>
          <p>{error}</p>
        </div>
      )}

      {loading && <Loading />}

      {weatherData && (
        <>
          <WeatherCard data={weatherData} />
          <Forecast data={forecastData} />
        </>
      )}

      <RecentSearches searches={recentCities} onSelect={handleSearch} />
    </div>
  );
}

export default App;
