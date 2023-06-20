const express = require("express");
const app = express();

app.get("/services/nx-proxy", (req, res) => {
  res.json([
    "NX-Proxy is up!\n\n--Proxy is listening at:\n-IP: hosting.pommesmitketchup.com\n-Port: 7373\nAutomaticAuth: No",
  ]);
});

module.exports = app;
