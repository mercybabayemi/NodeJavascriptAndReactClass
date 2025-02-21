const Shape = require("./shape.js");

class Rectangle extends Shape{
  #side1;
  #side2;
  constructor(name, side1, side2){
    super(name);
    this.#side1 = side1;
    this.#side2 = side2;
  }

  get side1Getter(){
      return this.#side1;
  }

  get side2Getter(){
      return this.#side2;
  }

  getArea(){
    const side1 = this.side1Getter;

    const side2 = this.side2Getter;

    return `${side1 * side2}`
  }

  get shapeName(){
    return this.name;
  }

  isSquare(){
    return `${this.shapeName} is not a square.`
  }
}

let rectangle1 = new Rectangle("rectangle shape", 12, 6);
console.log(`The calculated area of ${rectangle1.side1Getter} and ${rectangle1.side2Getter} is ${rectangle1.getArea()}`)
console.log(rectangle1.isSquare())
