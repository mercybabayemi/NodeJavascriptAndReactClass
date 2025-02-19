const Human = require("./classBased.js");

class Person extends Human{
  #gender;
  constructor(name,age,gender){
    super(name,age);
    this.gender = gender ;
  }

  speak(){
    return `I speak Yoruba`
  }
}

let personOne = new Person("Gloria", 65, "sheMale");
console.log(personOne.speak())