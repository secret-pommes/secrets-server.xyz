const express = require("express");
const app = express();

app.get("/api/versionchecker/latest", (req, res) => {
  const version = require("../package.json").version;
  res.json([`Version: ${version}`]);
});

module.exports = app;
