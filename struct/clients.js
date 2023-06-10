const express = require("express");
const app = express();

app.get("/api/connectedClients", (req, res) => {
    res.send(global.connectedClients);
});

module.exports = app;