let user = {
	firstName : "Esther",
	lastName : "James",
	age : 12,
	greet : function(){
		console.log("hello")
	}
};

console.log("User's last name is " + user.lastName);
console.log("User's age is " + user.age);

user.firstName = "Favour";

user.sex = "male";

console.log(user);

user.greet();

let keys = Object.keys(user);
console.log(keys);

let values = Object.values(user);
console.log(values);

let entries = Object.entries(user);
console.log(entries);