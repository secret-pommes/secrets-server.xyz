const express = require("express");
const app = express();

// maybe this will fix the "checking connection to datacenters" on switch and mobile
app.get("/fortnite/api/game/v2/voice/*", (req, res) => {
  res.status(204);
  res.end();
});

module.exports = app;
