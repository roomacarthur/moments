import axios from "axios";

axios.defaults.baseURL = "https://drfapi-roo-f5011a5fe545.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();