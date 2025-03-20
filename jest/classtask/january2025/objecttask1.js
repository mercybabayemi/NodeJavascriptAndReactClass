const person = {
	name : "Mercy",
	age : 17,
	sex : "female",
	complexion : "dark skinned",
	stateOfComplexion : "Ogun state",
	country : "Nigeria",
};

console.log(person);

console.log("The person's name is " + person.name);


let keys = Object.keys(person);
console.log("The keys are : " + keys);

let values = Object.values(person);
console.log("The values are : " + values);

let entries = Object.entries(person);
console.log("The entries are : " + entries);