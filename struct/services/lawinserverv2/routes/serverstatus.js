const express = require("express");
const app = express();
const path = require("path");

let proxyStatus;

app.get("/services/lawinserverv2/server-status", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/serverstatus.html"));
});

app.get(
  "/services/lawinserverv2/api/server-status/js/serverstatus.js",
  (req, res) => {
    res.sendFile(path.join(__dirname, "../responses/serverstatus.js"));
  }
);

app.get("/services/lawinserverv2/connectionCheck", (req, res) => {
  res.json(["Server is online! | You are connected!"]);
});

app.get(
  "/services/lawinserverv2/api/serverstatus/connectionCheck",
  (req, res) => {
    res.send(200); // cant be anything else lol.
  }
);

app.get("/services/lawinserverv2/api/serverstatus/proxyCheck", (req, res) => {
  // its on the server and not on the client so i can use local ips.
  fetch("http://192.168.178.97:7373/proxyCheck").then((response) => {
    if (response.status === 200) {
      proxyStatus = 200;
    } else {
      proxyStatus = 521;
    }
  });
  res.send(`${proxyStatus}`);
});

module.exports = app;
