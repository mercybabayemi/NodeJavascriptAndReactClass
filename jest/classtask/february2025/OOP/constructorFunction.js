//constructing function with this for creating object
function Human(name,age,complexion){
  this.name = name;
  this.age = age;
  this.complexion;

  this.describe = function(){
    return `My name is ${this.name}, I am ${this.age} years old.`
  }
};

let personOne = new Human("Mercy",16, "dark");
console.log(personOne);
console.log(personOne.describe())