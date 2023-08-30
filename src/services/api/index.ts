import axios from "axios";
import Cookies from "js-cookie";

type API_PROPS = {
  [key: string]: string;
};

export const API_URL: API_PROPS = {
  LOCAL: "http://localhost:5000",
  DEV: "https://api.dangand.com",
  PROD: "https://api.dangand.com",
};

export const BASE_URL = API_URL[`${process.env.NEXT_PUBLIC_API}`];

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config: any) => {
  const token = Cookies.get("dangand_access_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
