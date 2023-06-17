const express = require("express");
const app = express();

const motos = require("../configs/motos.json");

app.get("/api/webserver/getMoto", (req, res) => {
  const randomMoto = motos[Math.floor(Math.random() * motos.length)];
  res.json([randomMoto]);
});

module.exports = app;
