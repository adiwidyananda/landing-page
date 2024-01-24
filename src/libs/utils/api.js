import axios from "axios";

const instance = axios.create({
  baseURL: "https://blockchain.info/",
  timeout: 40000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8;multipart/form-data",
  },
});

export default instance;
