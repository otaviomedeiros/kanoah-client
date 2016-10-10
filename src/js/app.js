import "jquery";
import angular from "angular";
import angularRouter from "angular-route";
import angularSanitize from "angular-sanitize";
import flashMessages from "./flash/main";
import TestResultsController from "./test_cases/controllers/TestResultsController";
import TestCasesController from "./test_cases/controllers/TestCasesController";
import testCaseService from "./test_cases/services/TestCaseService";
import testResultService from "./test_cases/services/TestResultService";
import config from "./config.js"
import "../css/style.less"

angular.module("app", [angularRouter, angularSanitize, flashMessages])
  .controller("TestCasesController", TestCasesController)
  .controller("TestResultsController", TestResultsController)
  .service("testCaseService", testCaseService)
  .service("testResultService", testResultService)
  .config(config)



angular.bootstrap(document, ["app"]);
