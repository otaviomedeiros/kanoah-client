var username = process.env.KANOAH_API_USERNAME;
var password = process.env.KANOAH_API_PASSWORD;
var base64Credentials = new Buffer(username + ":" + password).toString("base64");

module.exports = {
  API_BASE_URL: process.env.KANOAH_API_BASE_URL,
  username: username,
  requestHeaders: {
    "Authorization" : "Basic " + base64Credentials,
    "Content-Type": "application/json"
  }
}
