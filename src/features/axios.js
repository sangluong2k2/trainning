import axios from "axios";

const baseUrl = "http://thanglx.ddns.net:8080/";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers = {
      ...config.headers,
      "Access-Token": accessToken,
    };
  }

  return config;
});

instance.interceptors.response.use((response) => {
  return response;
});

export default instance;
