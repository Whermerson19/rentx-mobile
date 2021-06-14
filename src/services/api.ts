import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.30.160.1:3000",
});
