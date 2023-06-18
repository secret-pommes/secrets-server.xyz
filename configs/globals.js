// LawinServerV2:
const functions = require("../struct/services/lawinserverv2/structs/functions.js");
const tokens = require("../struct/services/lawinserverv2/tokenManager/tokens.json");
global.xmppDomain = "prod.ol.epicgames.com"; // XMPP Domain
global.JWT_SECRET = functions.MakeID(); // SECRET
global.accessTokens = tokens.accessTokens; // CURRENT TOKENS
global.refreshTokens = tokens.refreshTokens; // CURRENT REFRESH TOKENS
global.clientTokens = tokens.clientTokens; // CURRENT CLIENT TOKENS
global.Clients = []; // ONLINE XMPP CLIENTS
global.MUCs = {}; // CURRENT MULTI-USER-CHATS
global.exchangeCodes = []; // CURRENT EXCHANGE-CODES
