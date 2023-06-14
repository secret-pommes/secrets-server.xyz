console.log("[/] secrets-server! made by Secret1337.\nScripts are loaded!");
const API_URL = "/api/"; // API URL to server
console.log("[/] API is reachable at: " + API_URL);

const versionCheckURL = API_URL + "versionchecker/latest"; // sub stuff where stuff gets handled <= is this correct grammer?
fetch(versionCheckURL)
  .then((res) => res.json())
  .then((data) => (version.innerHTML = data));

// erinnert mich an minecraft
const motoURL = API_URL + "webserver/getMoto";
fetch(motoURL)
  .then((res) => res.json())
  .then((data) => (footer_moto.innerHTML = data));
