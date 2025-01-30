function getPentagonalNumber(number){
	let count = 0;
	for(let n = 1; n <= 100; n++){
		let formulaResult = n * (3 * n - 1) / 2;
		process.stdout.write(formulaResult + " ");
		count++;


		if(count % 10 === 0){
			console.log();
		}
	}
	return "";
}

getPentagonalNumber(100);