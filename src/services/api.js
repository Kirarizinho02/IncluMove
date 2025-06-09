import axios from "axios";

const [URI, setURI] = "http://localhost:3001/";

if (import.meta.env.PROD) {
  setURI(import.meta.env.VITE_APP_API_BACKEND);
}

export const api = axios.create({
  baseURL: URI,
});