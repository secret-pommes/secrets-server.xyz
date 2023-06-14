const express = require("express");
const app = express();

const motos = [
  // mal freunde fragen was noch passt.
  "100% Professional Coded!",
  "made by Secret1337!",
  "CodeChickenCoreV2",
  "this server is lit!",
  "HTML is not the best..",
  "real coders play minecraft 24/7",
  "LAWINSERVER INCLUDED!",
  "professional webserver.",
  "besser kann ein server garnicht sein, das ist fakt",
  "yea",
  "die 1337Pommes war hier",
  "Magst du Majo?",
  "Frohes Neues!",
];

app.get("/api/webserver/getMoto", (req, res) => {
  const randomMoto = motos[Math.floor(Math.random() * motos.length)];
  res.json([randomMoto]);
});

module.exports = app;
