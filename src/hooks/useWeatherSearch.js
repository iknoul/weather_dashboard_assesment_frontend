import { useState } from "react";
import { searchWeatherRequest } from "../api/weatherApi";

export function useWeatherSearch() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async (city) => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchWeatherRequest(city.trim());
      setResult(data);
    } catch (err) {
      setResult(null);
      setError(
        err.response?.status === 404
          ? "City not found. Check the spelling and try again."
          : err.response?.data?.message || "Couldn't fetch weather right now."
      );
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, search };
}