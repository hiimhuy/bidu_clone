import axios from "axios";

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log(process);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZWViNTQ2MTliMTU5MDAxOTY2YWQyMCIsImlhdCI6MTcwOTE3ODgzNCwiZXhwIjoxNzQwNzE0ODM0fQ.pvn-ABrRCB5gNIPk6q__CnZfO6qfw1i7exmWo7Rveaw";

const axiosClient = axios.create({
  // baseURL: "https://web-staging.bidu.com.vn/",
  baseURL: "https://commerce-staging.bidu.com.vn/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bidu ${token}`,
    "Accept-Language": "vi",
  },
});

export default axiosClient;
