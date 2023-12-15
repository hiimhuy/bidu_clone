import axios from "axios";

const URL_API = process.env.NEXT_PUBLIC_BASE_API_URL;
console.log(process);

const axiosClient = axios.create({
  baseURL: "https://commerce-staging.bidu.com.vn/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosClient;
