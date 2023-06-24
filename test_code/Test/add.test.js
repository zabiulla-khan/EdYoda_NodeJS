const { add, subtract } = require("../add");

test("Check Add Function", () => {
  const result = add(10, 20);
  expect(result).toBe(30);
});

test("Check Subtract Function", () => {
  const result = subtract(20, 10);
  expect(result).toBe(10);
});
