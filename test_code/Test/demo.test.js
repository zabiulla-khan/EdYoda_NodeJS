const { execute } = require("../demo");

test("Check Execute Function", () => {
  const result = execute();
  expect(result).toBe("EVEN");
});
