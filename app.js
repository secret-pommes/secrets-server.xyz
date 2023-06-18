const express = require("express");
const app = express();
const WebSocket = require("ws").Server;
const fs = require("fs");

// structure:
const config = require("./configs/config.json");
const websockets = require("./struct/websockets.js")
// globals:
global.PORT = config.SERVER.PORT;
global.connects = 0;

const wss = new WebSocket({
  server: app.listen(PORT, () => {
    console.log(`secrets-server started listening on port: ${global.PORT}`);
    websockets(wss);
    require("./configs/globals.js");
  }),
});


fs.readdirSync("./struct").forEach((file) => {
  app.use(require(`./struct/${file}`));
});

app.get((req, res, next) => {
  res.json(["Err404, File not found!"]);
});
