const person = {
	firstName : "Tomi",
	lastName : "Feyi",
	age : 17,
};

function stringReturn(person){
	console.log("First Name: " + person['firstName'] + ", Last Name: " + person['lastName'] + ", Age: " + person['age'])
	return "done"
};

stringReturn(person);