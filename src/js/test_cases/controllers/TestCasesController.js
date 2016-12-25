class TestCasesController {

  constructor(testCaseService, $routeParams){
    this.$routeParams = $routeParams;
    this.testCaseService = testCaseService;
    this.testCases = [];
  }

  loadTestCases(){
    this.testCaseService
      .all()
      .success(testCases => this.testCases = []);
  }

  getTestCase(){
    this.testCaseService
      .get(this.$routeParams.key)
      .success(testCase => this.testCase = testCase);
  }

}

TestCasesController.$inject = ["testCaseService", "$routeParams"];

export default TestCasesController;
