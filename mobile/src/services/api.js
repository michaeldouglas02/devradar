import axios from "axios";

const api = axios.create({
  baseURL:
    "https://3333-a632abfb-4f22-4f7e-aedb-bf4b7546cc70.ws-us02.gitpod.io/" //colocar seu ip
});

export default api;
