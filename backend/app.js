var kanoah = require("./kanoah-api/restclient");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use('/', express.static(__dirname + "/../public"));
app.use(bodyParser.json());

app.get("/testcase/search", function (req, res) {
  kanoah.searchTestCase(function(testCases){
    res.json(testCases);
  });
});

app.get("/testcase/:key", function(req, res){
  kanoah.getTestCase(req.params.key, function(testCase){
    res.json(testCase);
  })
});

app.post("/testcase/:key/testresult", function(req, res){
  kanoah.postTestResult({
    testCaseKey: req.params.key,
    status: req.body.status
  }, function(data){
    res.json(data);
  })
});

app.listen(8080);
