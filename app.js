const express = require("express");
const app = express();
const fs = require("fs");

const config = require("./configs/config.json");

const PORT = config.SERVER.PORT;
app.listen(PORT, () => {
  console.log(`secrets-server started listening on port: ${PORT}`);
});

fs.readdirSync("./structs").forEach((file) => {
  app.use(require(`./struct/${file}`));
});

app.get((req, res, next) => {
  res.json(["Err404, File not found!"]);
});
