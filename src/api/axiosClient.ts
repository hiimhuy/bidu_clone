import axios from "axios";

const URL_API = process.env.NEXT_PUBLIC_BASE_API_URL;
console.log(process);

const axiosClient = axios.create({
  // baseURL: "http://128.199.204.61:8000",
  baseURL: "https://commerce-staging.bidu.com.vn/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosClient;
