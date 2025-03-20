function sumOfDigit(n){
	let extractedNumber = n;
	let sum = 0;
	let numberString = String(n)
	let numberStringLength = numberString.length

	while(numberStringLength != 0){
		let removedNumber = extractedNumber % 10;
		sum += removedNumber;
		extractedNumber /= 10;
		numberStringLength --;
	}
	
	return sum;
}

console.log(Math.trunc(sumOfDigit(234)));