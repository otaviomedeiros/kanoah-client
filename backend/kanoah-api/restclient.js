var Client = require("node-rest-client").Client;
var client = new Client();
var config = require("./config");

module.exports = {
  searchTestCase: function(callback){
    client.get(
      config.API_BASE_URL + "/testcase/search",
      {
        parameters: { query: "projectKey = AST" },
        headers: config.requestHeaders
      },
      callback
    )
  },

  getTestCase: function(key, callback){
    client.get(
      config.API_BASE_URL + "/testcase/" + key,
      { headers: config.requestHeaders },
      callback
    )
  },

  postTestResult: function(testResult, callback){
    var data = {
      userKey: config.username,
      projectKey: "AST",
      testCaseKey: testResult.testCaseKey,
      status: testResult.status
    };

    client.post(
      config.API_BASE_URL + "/testresult",
      {
        data: data,
        headers: config.requestHeaders
      },
      callback
    )
  }
}
