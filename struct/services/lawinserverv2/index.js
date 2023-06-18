const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const error = require("./structs/error.js");
const functions = require("./structs/functions.js");
const tokens = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./tokenManager/tokens.json")).toString()
);

app.use(rateLimit({ windowMs: 0.5 * 60 * 1000, max: 45 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1/lawindb");

if (!fs.existsSync(path.join(__dirname, "./ClientSettings")))
  fs.mkdirSync(path.join(__dirname, "./ClientSettings"));
fs.writeFileSync(
  path.join(__dirname, "tokenManager/tokens.json"),
  JSON.stringify(tokens, null, 2)
);

for (let tokenType in tokens) {
  for (let tokenIndex in tokens[tokenType]) {
    let decodedToken = jwt.decode(
      tokens[tokenType][tokenIndex].token.replace("eg1~", "")
    );

    if (
      functions
        .DateAddHours(
          new Date(decodedToken.creation_date),
          decodedToken.hours_expire
        )
        .getTime() <= new Date().getTime()
    ) {
      tokens[tokenType].splice(Number(tokenIndex), 1);
    }
  }
}

// idk but fs.readFileSync is not working in the index of LawinServerV2
app.use("/services/lawinserverv2", require("./routes/auth.js"));
app.use("/services/lawinserverv2", require("./routes/cloudstorage.js"));
app.use("/services/lawinserverv2", require("./routes/content.js"));
app.use("/services/lawinserverv2", require("./routes/friends.js"));
app.use("/services/lawinserverv2", require("./routes/lightswitch.js"));
app.use("/services/lawinserverv2", require("./routes/main.js"));
app.use("/services/lawinserverv2", require("./routes/matchmaking.js"));
app.use("/services/lawinserverv2", require("./routes/mcp.js"));
app.use("/services/lawinserverv2", require("./routes/privacy.js"));
app.use("/services/lawinserverv2", require("./routes/storefront.js"));
app.use("/services/lawinserverv2", require("./routes/timeline.js"));
app.use("/services/lawinserverv2", require("./routes/user.js"));
app.use("/services/lawinserverv2", require("./routes/version.js"));
app.use("/services/lawinserverv2", require("./routes/voice.js"));
app.use("/services/lawinserverv2", require("./routes/xmppRequests.js"));

// if endpoint not found, return this error
app.use("/services/lawinserverv2", (req, res, next) => {
  error.createError(
    "errors.com.epicgames.common.not_found",
    "Sorry the resource you were trying to find could not be found",
    undefined,
    1004,
    undefined,
    404,
    res
  );
});

module.exports = app;
