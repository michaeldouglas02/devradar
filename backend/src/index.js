const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const Dev = require("./models/Dev");
require("dotenv/config");

const app = express();
console.log();
mongoose.connect(
  `mongodb+srv://omnistack:${process.env.BD_PASSWORD}@cluster0-khfx4.mongodb.net/week-10?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

// Tipos de paramêtros

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro no corpo da requisição)

app.listen(3333);
