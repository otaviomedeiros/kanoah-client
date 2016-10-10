export default function config($routeProvider){
  $routeProvider.
    when("/testcases", {
      controller: "TestCasesController",
      controllerAs: "testCasesCtrl",
      templateUrl: "/pages/test_cases/index.html"
    }).
    when("/testcases/:key", {
      controller: "TestCasesController",
      controllerAs: "testCasesCtrl",
      templateUrl: "/pages/test_cases/show.html"
    }).
    otherwise({ redirectTo: "/testcases" });
}

config.$inject = ["$routeProvider"];
