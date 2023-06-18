const express = require("express");
const app = express();

app.get("/server-status", (req, res) => {
  res.send("server status soon 👀");
});

module.exports = app;
