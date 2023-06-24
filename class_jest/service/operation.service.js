class OperationService {
  getName() {
    return {
      name: "Zabi",
    };
  }
  getAge() {
    return {
      age: 24,
    };
  }
}

// const obj1 = new OperationController();

// const name = obj1.getName();
// console.log(name);

// const age = obj1.getAge();
// console.log(age);

module.exports = new OperationService();
