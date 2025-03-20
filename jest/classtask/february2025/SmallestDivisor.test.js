const {findNumberDivisor, findSmallestCommonDivisor} = require("./SmallestDivisor.js")

test("Get a number divisors", () => {
  let number = 12;
  let result = findNumberDivisor(number);
  let answer = [2,3,4,6,12];
  expect(result).toEqual(answer);
});

test("Get smallest divisor", () => {
  let numbers = [4,12,8];
  let result = findSmallestCommonDivisor(numbers);
  let answer = 2;
  expect(result).toEqual(answer);
});

test("Get smallest divisor", () => {
  let numbers = [6,9,15];
  let result = findSmallestCommonDivisor(numbers);
  let answer = 3;
  expect(result).toEqual(answer);
});

test("Get smallest divisor 3", () => {
  let numbers = [6,18,12];
  let result = findSmallestCommonDivisor(numbers);
  let answer = 2;
  expect(result).toEqual(answer);
});
