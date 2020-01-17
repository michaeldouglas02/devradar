import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.209:3333" //colocar seu ip
});

export default api;
