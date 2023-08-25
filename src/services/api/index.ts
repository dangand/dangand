import axios from "axios";

type API_PROPS = {
  [key: string]: string;
};

const API_URL: API_PROPS = {
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
