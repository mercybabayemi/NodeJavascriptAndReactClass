const person = {
	firstName : "Tomi",
	lastName : "Feyi",
	fullNames : function(){
		return person['firstName'] +" " + person['lastName']
	}
};

console.log(person.fullNames());

