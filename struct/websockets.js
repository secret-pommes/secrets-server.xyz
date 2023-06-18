module.exports = (wss) => {
  const path = require("path");
  const lawinserverxmpp = require(path.join(
    __dirname,
    "/services/lawinserverv2/xmpp/xmpp.js"
  ));
  lawinserverxmpp(wss);
};
