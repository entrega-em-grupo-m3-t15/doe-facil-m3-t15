import axios from "axios";

export const API = axios.create({
  baseURL: "https://doe-facil-server.onrender.com",
  timeout: 5000,
});
// comenbtario