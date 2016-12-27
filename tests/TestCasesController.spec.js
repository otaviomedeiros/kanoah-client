import TestCasesController from "../src/js/test_cases/controllers/TestCasesController";

describe("TestCasesController", () => {

  let controller;
  const testCase = { name: "My Test Case" };
  const testCases = [testCase];


  it("should initialize with an empty test cases list", () => {
    controller = new TestCasesController();
    expect(controller.testCases).toEqual([]);
  });

  describe(".loadTestCases()", () => {

    beforeEach(() => {
      const service = {
        all(){
          return this;
        },

        then(callback){
          callback(testCases);
        }
      };

      controller = new TestCasesController(service);
    });

    it("should exist", () => {
      expect(controller.loadTestCases).toBeDefined();
    });

    it("should set test cases list", () => {
      controller.loadTestCases();
      expect(controller.testCases).toEqual(testCases);
    });

  });

  describe(".getTestCase()", () => {

    beforeEach(() => {
      const service = {
        get(){
          return this;
        },

        then(callback){
          callback(testCase);
        }
      };

      controller = new TestCasesController(service, {});
    });

    it("should exist", () => {
      expect(controller.getTestCase).toBeDefined();
    });

    it("should set test case", () => {
      controller.getTestCase();
      expect(controller.testCase).toEqual(testCase);
    });
  });

});
