const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// website routes
app.get("/", (req, res) => {
  // main (index.html)
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/services", (req, res) => {
  // services (services.html)
  res.send("work in progress..");
});

// css
app.get("/assets/css/:file", (req, res) => {
  const file = req.params.file;
  if (typeof file === "undefined") {
    res.send("Path was undefined!");
  } else {
    if (fs.existsSync(path.join(__dirname(`../public/assets/css/${file}`)))) {
      res.sendFile(path.join(__dirname, `../public/assets/css/${file}`));
    } else {
      res.send("File was not found [Err404]");
    }
  }
});

// js
app.get("/assets/js/:file", (req, res) => {
  const file = req.params.file;
  if (typeof file === "undefined") {
    res.send("Path was undefined!");
  } else {
    if (fs.existsSync(path.join(__dirname(`../public/assets/js/${file}`)))) {
      res.sendFile(path.join(__dirname, `../public/assets/js/${file}`));
    } else {
      res.send("File was not found [Err404]");
    }
  }
});

// img
app.get("/assets/img/:file", (req, res) => {
  const file = req.params.file;
  if (typeof file === "undefined") {
    res.send("Path was undefined!");
  } else {
    if (fs.existsSync(path.join(__dirname(`../public/assets/img/${file}`)))) {
      res.sendFile(path.join(__dirname, `../public/assets/img/${file}`));
    } else {
      res.send("File was not found [Err404]");
    }
  }
});

module.exports = app;
