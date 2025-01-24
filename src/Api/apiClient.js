import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000, // Optional timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
