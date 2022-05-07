const proxy = require("express-http-proxy");
const app = require("express")();
const https = require("https");
const fs = require("fs");

const PORT = 443;

app.use("/proxy", proxy("localhost:9000"));

const key = fs.readFileSync("./key.pem");
const cert = fs.readFileSync("./cert.pem");
const server = https.createServer({ key, cert }, app);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
