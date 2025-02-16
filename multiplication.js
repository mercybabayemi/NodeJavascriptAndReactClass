function addTwoNumbers(firstNumber, secondNumber){
	let answer = firstNumber + secondNumber;
	return answer;
}

function multiply(numberOne, numberTwo){
	let result = numberOne * numberTwo;
	return result;
}

function divideTwoNumbers(numberTwo, numberOne){
	let response = numberTwo / numberOne;
	return response;
}

const getOddNumbers =(arr)=> {
	let newArray = [];
	for(element of arr){
		if(element % 2 != 0){
			newArray.push(element);
		}
	}
	return newArray;
}

/*
const getOddNumbers =(arr)=> {
	let newArray = [];
	for(index in arr){
		if(arr[index] % 2 != 0){
			newArray[count++] = arr[index];
		}
	}
	return newArray;
}
*/

module.exports = {multiply, addTwoNumbers, divideTwoNumbers, getOddNumbers};