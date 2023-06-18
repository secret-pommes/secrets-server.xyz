const express = require("express");
const app = express();

app.get("/redirect/main_site", (req, res) => {
  res.redirect("/");
});

module.exports = app;