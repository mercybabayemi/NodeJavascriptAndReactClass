function reverse(number){
	let extractedNumber = number;
	let numberString = "";
	let numberStr = String(number);
	let numberLength = numberStr.length


	while(numberLength != 0){
		let removedNumber = extractedNumber % 10;
		numberString = numberString + removedNumber;
		extractedNumber = Math.trunc(extractedNumber / 10);
		numberLength --;
	}
	
	if(numberString == number){
		console.log("Number is a palindrome");
	} 
	if(numberString != number){
		console.log("Number is not a palindrome");
	}

	return numberString;
}

console.log(reverse(121));