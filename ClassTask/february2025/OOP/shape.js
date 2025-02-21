class Shape{
  #name;
  constructor(name){
    this.#name = name;
  }

  get shapeName(){
    return this.#name;
  }

}


module.exports = Shape;