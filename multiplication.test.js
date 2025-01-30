const multiply = require("./multiplication.js")

test('multiply two numbers', ()=>{
	let numberOne = 2;
	let numberTwo = 6;		//Arrange
	let result = multiply(numberOne, numberTwo);		//Act
	let answer = 12;
	expect(result).toBe(answer); 		//Assert
});