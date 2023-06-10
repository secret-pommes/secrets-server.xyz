const express = require("express");
const app = express();
const fs = require("fs");

app.listen(port, () => {
  console.log("secrets-server started listening on port: " + port);
});

fs.readdirSync("./structs").forEach((file) => {
  app.use(require(`./struct/${file}`));
});
