const express = require("express");
const app = express();

const version = require("../package.json").version;

app.get("/api/versionchecker/latest", (req, res) => {
  res.json([`Version: ${version}`]);
});

app.get("/api/versionchecker/raw", (req, res) => {
  res.json([version]);
});

module.exports = app;
