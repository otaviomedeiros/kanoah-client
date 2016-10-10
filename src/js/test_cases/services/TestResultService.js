class TestResultService {

  constructor($http) {
    this.$http = $http;
  }

  postStatus(testCase, status){
    return this.$http
            .post(`/testcase/${testCase.key}/testresult`, { status });
  }

  static factory($http){
    return new TestResultService($http);
  }

}

TestResultService.factory.$inject = ["$http"];

export default TestResultService.factory;
