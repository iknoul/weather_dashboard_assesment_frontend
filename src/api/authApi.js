import api from "./axios";

// POST /api/auth/register -> { _id, name, email, token }
export const registerRequest = (name, email, password) =>
  api.post("/auth/register", { name, email, password }).then((res) => res.data);

// POST /api/auth/login -> { _id, name, email, token }
export const loginRequest = (email, password) =>
  api.post("/auth/login", { email, password }).then((res) => res.data);

// GET /api/auth/me -> current user (requires token)
export const getMeRequest = () => api.get("/auth/me").then((res) => res.data);