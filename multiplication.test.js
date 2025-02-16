const {multiply, addTwoNumbers, divideTwoNumbers, getOddNumbers} = require("./multiplication.js")
let numberOne = 2;
let numberTwo = 6;		//Arrange

test("multiply two numbers", ()=>{
	let result = multiply(numberOne, numberTwo);		//Act
	let answer = 12;
	expect(result).toBe(answer); 		//Assert
});

test("add two numbers", ()=>{
	let sum = addTwoNumbers(numberOne, numberTwo);
	let answer = 8;
	expect(sum).toBe(answer);
});

test("division of two numbers", ()=>{
	let division = divideTwoNumbers(numberTwo,numberOne);
	let response = 3;
	expect(division).toBe(response);
});

test("return odd numbers", ()=>{
	let arrayOfNumbers = [1,2,3,4,8,5];
	let result = getOddNumbers(arrayOfNumbers);
	let answer = [1,3,5];
	expect(result).toEqual(answer);
});
