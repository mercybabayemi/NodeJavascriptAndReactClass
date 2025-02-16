const {greaterThanOrEqualTo70, add10To, squareOfEachNumber, bookDistribution } = require("./ArrayMethodTask.js");

test("find scores greater or equal to 70", ()=>{
  let scores = [60, 98, 56, 45, 70,73,98];
  let result= greaterThanOrEqualTo70(scores);
  let actual = [98, 70,73,98];
  expect(result).toEqual(actual);
});

test("adding 10 to each score", ()=>{
  let scores = [60, 98, 56, 45, 70,73,98];
  let result = add10To(scores);
  let actual = [70,108,66,55,80,83,108];
  expect(result).toEqual(actual);
});

test("square of each number", ()=>{
  let scores = [2,3,4,5,6,7];
  let result = squareOfEachNumber(scores);
  let actual = [4,9,16,25,36,49];
  expect(result).toEqual(actual);
});

test("pairing members to books available", ()=>{
  let books = ["wizard of oz", "Romeo and Juliet", "Julius Ceaser", "Arms and the man"];
  let members = ["Mercy", "Janet", "IyanuOluwa", "Boluwatife"];
  let result = bookDistribution(books,members);
  let expected = {
   "wizard of oz": "Mercy",
   "Romeo and Juliet" : "Janet",
   "Julius Ceaser" : "IyanuOluwa",
   "Arms and the man" : "Boluwatife"
  };
  expect(result).toStrictEqual(expected);
});