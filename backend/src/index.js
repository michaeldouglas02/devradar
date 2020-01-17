const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http')

const routes = require("./routes");
const { setupWebsocket } = require('./websocket')

require("dotenv/config");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  `mongodb+srv://omnistack:MI99228407@cluster0-khfx4.mongodb.net/week-10?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos de paramêtros

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro no corpo da requisição)

server.listen(3333);
