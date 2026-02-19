import axios from "axios";

// ✅ Usando variável de ambiente
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Validação para garantir que a API key existe
if (!API_KEY) {
  console.error(
    "⚠️ API Key não encontrada! Verifique suas variáveis de ambiente.",
  );
}

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: "metric",
    lang: "pt_br",
  },
});

export const getWeatherByCity = async (city) => {
  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      weatherApi.get("/weather", { params: { q: city } }),
      weatherApi.get("/forecast", { params: { q: city } }),
    ]);

    return {
      current: weatherResponse.data,
      forecast: forecastResponse.data,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao buscar dados");
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      weatherApi.get("/weather", { params: { lat, lon } }),
      weatherApi.get("/forecast", { params: { lat, lon } }),
    ]);

    return {
      current: weatherResponse.data,
      forecast: forecastResponse.data,
      cityName: weatherResponse.data.name,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao buscar dados");
  }
};
