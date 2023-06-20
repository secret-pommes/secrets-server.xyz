const express = require("express");
const app = express();

// LawinServerV2:
app.use(require("./services/lawinserverv2/index.js"));
//app.use(require("./services/lawinserverv2/DiscordBot/index.js"));

// SwitchProxy:
//app.use(require("./SwitchProxy/index.js"));

module.exports = app;
