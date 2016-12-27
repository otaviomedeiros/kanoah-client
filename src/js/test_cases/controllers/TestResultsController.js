class TestResultsController {

  constructor(testResultService, flash) {
    this.testResultService = testResultService;
    this.flash = flash;
  }

  pass(testCase){
    this.testResultService
      .postStatus(testCase, "Pass")
      .then(() => this.flash.success("Test Case saved with success"));
  }

  fail(testCase){
    this.testResultService
      .postStatus(testCase, "Fail")
      .then(() => this.flash.success("Test Case saved with success"));
  }
}

TestResultsController.$inject = ["testResultService", "flash"];

export default TestResultsController;
