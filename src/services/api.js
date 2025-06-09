import axios from "axios";

const URI = import.meta.env.VITE_APP_API_BACKEND == undefined ? "http://localhost:3001" : import.meta.env.VITE_APP_API_BACKEND;

export const api = axios.create({
  baseURL: URI,
});