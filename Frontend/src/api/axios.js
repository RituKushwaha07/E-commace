import axios from "axios";

const api = axios.create({
  baseURL: "https://e-commerce-backend-iota-eight.vercel.app/api",
});

export default api;