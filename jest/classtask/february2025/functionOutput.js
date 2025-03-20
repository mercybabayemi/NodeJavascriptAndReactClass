function countNumbers(numberList){
	let objectOutput = {};
	
	for(let index = 0; index < numberList.length; index++){
		const currentNumber = numberList[index];
		const count = getCount(numberList, currentNumber);

		objectOutput[currentNumber] = count;
	}
	return objectOutput;
}

const getCount = (numberList, targetNumber) =>{
	let count = 0;
	for(num of numberList){
		if(num == targetNumber){
			count += 1;
		}
	}
	return count;
};

let numberList = [2,2,1,3,5,5];
console.log(countNumbers(numberList));