import { useCallback, useEffect, useState } from "react";
import {
  addFavoriteRequest,
  getFavoritesRequest,
  removeFavoriteRequest,
} from "../api/favoritesApi";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getFavoritesRequest();
      setFavorites(data);
      setError("");
    } catch {
      setError("Couldn't load favorites.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const addFavorite = async ({ city, country, lat, lon }) => {
    try {
      const created = await addFavoriteRequest({
        cityName: city,
        country,
        lat,
        lon,
      });
      setFavorites((prev) => [created, ...prev]);
      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        message: err.response?.data?.message || "Couldn't save favorite.",
      };
    }
  };

  const removeFavorite = async (id) => {
    const prev = favorites;
    setFavorites((f) => f.filter((fav) => fav._id !== id)); // optimistic
    try {
      await removeFavoriteRequest(id);
    } catch {
      setFavorites(prev); // roll back on failure
    }
  };

  const isFavorite = (cityName) =>
    favorites.some((f) => f.cityName.toLowerCase() === cityName?.toLowerCase());

  return { favorites, loading, error, addFavorite, removeFavorite, isFavorite };
}