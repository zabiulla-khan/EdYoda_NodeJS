const OperationService = require("../service/operation.service");

class OperationController {
  getName() {
    const response = OperationService.getName();
    return response;
  }
  getAge() {
    const response = OperationService.getAge();
    return response;
  }
}

// const obj1 = new OperationController();

// const name = obj1.getName();
// console.log(name);

// const age = obj1.getAge();
// console.log(age);

module.exports = new OperationController();
