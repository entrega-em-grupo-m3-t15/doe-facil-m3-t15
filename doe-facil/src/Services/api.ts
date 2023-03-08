import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:3001",
  timeout: 5000,
});
