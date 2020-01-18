import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.6.211:3333" //colocar seu ip
});

export default api;
