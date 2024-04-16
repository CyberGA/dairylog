import axios from "axios";
import requests from "./requests"

//& axios instance for consuming api
export const instance = axios.create({
  baseURL: requests.baseURL,
  headers: {
    "Content-Type": "application/json",
  }
});