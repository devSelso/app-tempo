export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getDayName = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("pt-BR", {
    weekday: "short",
  });
};

export const kmhToMs = (kmh) => {
  return (kmh / 3.6).toFixed(1);
};

export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
