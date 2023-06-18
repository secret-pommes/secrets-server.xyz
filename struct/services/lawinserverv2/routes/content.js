const express = require("express");
const app = express.Router();
const functions = require("../structs/functions.js");
const path = require("path");

// website of LawinServerV2 (orginal from LawinServerV1)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/index.html"));
});
app.get("/assets/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/reqs/styles.css"));
});
app.get("/assets/index.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/reqs/index.css"));
});
app.get("/assets/jquery.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/reqs/jquery.js"));
});
app.get("/assets/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/reqs/script.js"));
});
app.get("/assets/fiddlerscript", (req, res) => {
  res.sendFile(path.join(__dirname, "../responses/reqs/script.txt"));
});

// Fortnite Content
app.get("/content/api/pages/*", async (req, res) => {
  // fortnite contentpages
  const contentpages = functions.getContentPages(req);

  res.json(contentpages);
});

module.exports = app;
