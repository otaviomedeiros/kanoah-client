import { API_BASE_URL } from "../../config";

class TestCaseService {

  constructor($http) {
    this.$http = $http;
    this.testCases = [];
  }

  all(){
    return this.$http.get("/testcase/search");
  }


  get(key){
    return this.$http.get(`/testcase/${key}`);
  }

  static factory($http){
    return new TestCaseService($http);
  }
}

TestCaseService.factory.$inject = ["$http"];

export default TestCaseService.factory;
