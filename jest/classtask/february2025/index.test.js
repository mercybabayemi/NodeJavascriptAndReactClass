const{getDoubledNumbers, getEvenNumbers, addThreeToEachElement, getOddNumbers, getWordsGreaterThanFourLetters, getStudents, evenAndOddNumberReplacement} = require("./index.js");

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

test("Add three to each element", ()=>{
  let result = addThreeToEachElement(numbers);
  let answer = [5,6,7,8,9,10];
  expect(result).toEqual(answer)
})

test("return odd numbers", ()=>{
  let result = getOddNumbers(numbers);
  let answer = [3,5,7];
  expect(result).toEqual(answer)
});

test("return words greater than four letters", ()=>{
  let words = ["hello", "world", "javascript", "java","egg"];
  let result = getWordsGreaterThanFourLetters(words);
  let answer = ["hello", "world", "javascript"];
  expect(result).toEqual(answer)
});

test("return objects with age greater than 40", ()=>{
  const students = [
    {name: "John", age: 20},
    {name: "Jane", age: 21},
    {name: "Alice", age: 19},
    {name: "Bob", age: 22}
  ];
  let result = getStudents(students);
  let answer = [
    {name: "Jane", age: 21},
    {name: "Bob", age: 22}
  ];
  expect(result).toStrictEqual(answer)
});

test("Replace odd number with one and even number with zero", () =>{
  arr = [4,5,8,8,8,2,9]
  let result = evenAndOddNumberReplacement(arr);
  let answer = [0,1,0,0,0,0,1]
  expect(result).toEqual(answer)
});