import axios from "axios";

const baseURL = "localhost:8080"

export const apiClient = axios.create({
  baseURL
});