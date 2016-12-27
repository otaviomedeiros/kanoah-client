import TestResultsController from "../src/js/test_cases/controllers/TestResultsController";

describe("TestResultsController", () => {

  let controller;
  const testCase = { name: "TestCase" };
  let service = {
    postStatus(t, s){
    },
    then(c){
    }
  };

  beforeEach(() => {
    spyOn(service, 'postStatus').and.returnValue(service);
    controller = new TestResultsController(service);
  });

  describe(".pass(testCase)", () => {

    it("should post status as 'Pass'", () => {
      controller.pass(testCase);
      expect(service.postStatus).toHaveBeenCalledWith(testCase, "Pass");
    });

  });

  describe(".fail(testCase)", () => {

    it("should post status as 'Fail'", () => {
      controller.fail(testCase);
      expect(service.postStatus).toHaveBeenCalledWith(testCase, "Fail");
    });

  });

});
