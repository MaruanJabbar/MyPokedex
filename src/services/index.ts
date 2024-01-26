import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5 * 1000,
});
