import api from "./axios";

// GET /api/favorites -> array of { _id, cityName, country, lat, lon }
export const getFavoritesRequest = () =>
  api.get("/favorites").then((res) => res.data);

// POST /api/favorites { cityName, country, lat, lon }
export const addFavoriteRequest = (payload) =>
  api.post("/favorites", payload).then((res) => res.data);

// DELETE /api/favorites/:id
export const removeFavoriteRequest = (id) =>
  api.delete(`/favorites/${id}`).then((res) => res.data);