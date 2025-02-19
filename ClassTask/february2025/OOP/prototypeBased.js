let animal = {
  name: "Unknown",
  color: "",
  sound: function(soundType){
    return `${this.name} makes a ${soundType} sound`
  }
};
//create object of prototype based programming
let dog = Object.create(animal);
console.log(dog);
dog.name = "Bingo";
dog.color = "Brown";
console.log(dog);

dog.age = 4;
console.log(dog.sound("bark"))
console.log(dog)

//set prototype of prototyping based program
let cat = {};
Object.setPrototypeOf(cat,animal);
cat.name = "Pussy cat";
cat.color = "White";
cat.age = 1;
console.log(cat.sound("meow"))
console.log(cat)