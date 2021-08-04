import axios from "axios";

const url = "0.0.0.0:"
const port = process.env.PORT || 3000;

const baseURL = url + port
export const apiClient = axios.create({
  baseURL
});