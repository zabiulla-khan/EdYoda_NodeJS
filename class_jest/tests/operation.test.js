const OperationController = require("../controller/operation.controller");
const OperationService = require("../service/operation.service");

jest.mock("../service/operation.service.js");

test("should return name", () => {
  const data = { name: "Zabi" };

  const spy = jest.spyOn(OperationService, "getName").mockImplementation(() => {
    return { name: "Zabi" };
  });
  const result = OperationController.getName();
  expect(result).toStrictEqual(data);
});

test("should return Age", () => {
  const data = { age: 24 };

  const spy = jest.spyOn(OperationService, "getAge").mockImplementation(() => {
    return { age: 24 };
  });
  const result = OperationController.getAge();
  expect(result).toStrictEqual(data);
});
