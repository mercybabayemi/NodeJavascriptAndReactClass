function displaySortedNumbers(num1,num2,num3){
	let numbers = [num1, num2, num3];
	numbers.sort((a, b) => a - b);
	console.log(numbers.join(", "));
	return numbers.join(", ");
}

console.log(displaySortedNumbers(50, 20, 30));