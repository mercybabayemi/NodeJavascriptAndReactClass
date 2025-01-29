//function declaration definition
console.log(getName());
function getName(){
	return "Mercy";
};


//function expression definition
const greet = function(){
	return "morning"
};
console.log(greet());


function assertEquals(){

//Arrow function type
	const getMen = () =>{
		let numberOfMen = 23;
		return numberOfMen
	};

//Nested function type
	function getLadies(){
		let numberOfLadies = 6;
		return numberOfLadies
	};

	return getMen() === getLadies()
};

console.log(assertEquals());

// Function as a return object.
function count(){
	let value = 0;
	return{
		increment: function(){
			return value++
		},
		decrement : ()=>{
			return value--
		},
		getValue : function(){
			return value
		}
	}
}

let counter = count()                                                                              
counter.increment();
console.log(counter.getValue());

//Function as an arguement
function greeting(name){
	return `Hello ${name}`
};
console.log(greeting("Mercy"));

let firstName = "Babayemi"
function executeFunction(callBack, userName){
	return callBack(userName)
}

let result = executeFunction(greeting, firstName);
console.log(result);

//Function scope
function countNumber(){
	let value = 0;
	
	function increaseValueByTwo(){
		let result = value + 2
		console.log(result)
		console.log(value)
	}
	increaseValueByTwo();
}

countNumber();