const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
require("dotenv/config");

const app = express();
mongoose.connect(
  `mongodb+srv://omnistack:${process.env.BD_PASSWORD}@cluster0-khfx4.mongodb.net/week-10?retryWrites=true&w=majority`,
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

app.listen(3333);
