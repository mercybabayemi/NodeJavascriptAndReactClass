const{getDoubledNumbers, getEvenNumbers} = require("./index.js");

beforeEach(()=>(
  numbers = [2,3,4,5,6,7]
));

test("multiply each element by two", ()=> {
  let result = getDoubledNumbers(numbers);
  let answer = [4,6,8,10,12,14];
  expect(result).toEqual(answer)
});

test("check even numbers", ()=>{
  let result = getEvenNumbers(numbers);
  let answer = [2,4,6];
  expect(result).toEqual(answer)
});