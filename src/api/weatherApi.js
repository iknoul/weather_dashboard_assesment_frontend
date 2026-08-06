import api from "./axios";

// GET /api/weather/search?city=London
// -> { city, country, temperature, feelsLike, humidity, windSpeed, condition, description, icon, lat, lon }
export const searchWeatherRequest = (city) =>
  api.get("/weather/search", { params: { city } }).then((res) => res.data);

// GET /api/weather/history -> array of { cityName, searchedAt, ... }, most recent first
export const getSearchHistoryRequest = () =>
  api.get("/weather/history").then((res) => res.data);