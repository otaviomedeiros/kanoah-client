class TestCasesController {

  constructor(testCaseService, $routeParams){
    this.$routeParams = $routeParams;
    this.testCaseService = testCaseService;
    this.testCases = [];
  }

  loadTestCases(){
    this.testCaseService
      .all()
      .then(testCases => this.testCases = testCases);
  }

  getTestCase(){
    this.testCaseService
      .get(this.$routeParams.key)
      .then(testCase => this.testCase = testCase);
  }

}

TestCasesController.$inject = ["testCaseService", "$routeParams"];

export default TestCasesController;
