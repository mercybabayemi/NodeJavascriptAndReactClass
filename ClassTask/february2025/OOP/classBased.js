//Class creation of object
class Human{
  #name;
  #age;  //private field with #
  constructor(name,age){
    this.#name = name;
    this.#age = age;
  }

  speak(){
    return `${this.name} speaks English`
  }

  // setFirstName(name){
  //   this.#name = name;
  // }

  // getFirstName(){
  //   return this.#name;
  // }

  set name(name){
    this.#name = name;
  }

  get name(){
    return this.#name;
  }
}

// let personOne = new Human("Chinedu", 12);
// // console.log(personOne.getFirstName());
// console.log(personOne.name)

module.exports = Human;