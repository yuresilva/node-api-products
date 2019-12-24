const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

//Iniciando app
const app = express();
app.use(express.json());
app.use(cors());

// conectando banco
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

// rotas
app.use("/api", require("./src/routes"));

app.listen(9090);
