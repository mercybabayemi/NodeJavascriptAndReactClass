function objectFunction(car) {
	for(let index in car){
		console.log(index + " " + car[index]);
	};

	return " ";
};


const car = {
	make : "Toyota",
	model : "Camry",
	year : 2021,
};
console.log(objectFunction(car));