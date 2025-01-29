let number = 11;

for(let index = 0; index < number; index++){
	console.log(index);
};

console.log("Enhanced for loop sample (for/of) : ");

let numbers = [1,2,3,4,5];

for(let num of numbers){
	if(num > 3){
		num = 5;
	};
	console.log(num);
};

console.log("For/in loop: ");

for(let index in numbers) {
	console.log(index + " " + numbers[index]);
	console. log(" ");
};

let userProfile = {
	firstName : "Ifeanyi",
	lastName : "Cyriacus",
	wifeFirstName : "Lolo",
	wifeSecondName : "MaryJane",
}

for(let index in userProfile){
	console.log(index + " " + userProfile[index]);
	console.log(" ");
}

console.log("Do while loop : ");
let index = 0;
do{
	console.log(numbers[index]);
	index++;
}while(index < numbers.length);