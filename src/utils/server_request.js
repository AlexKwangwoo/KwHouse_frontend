import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
// create an axios instance
const server_service = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  //withCredentials: true, // default
});

export default server_service;
