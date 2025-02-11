let obj = {firstName : "Mercy",
          lastname : "Babayemi",
          };
const array  = [1, "egg", obj.firstName , null, []];  //literal method

const arrayOfNumbers = new Array(); //array constructor

//arrayOfNumbers[0] = 20;
//arrayOfNumbers[1] = 2;

arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);

console.log(arrayOfNumbers);

let answer = Array.of("foo", 2, "bar")
console.log(answer[1]);

let firstName = "Chinedu";
let newArray = Array.from(firstName);
console.log(newArray);


// ARRAY SLICE
let animals = ["dog", "chicks", "goat", "fish","you", "test"];
console.log(animals.slice(1,3));

let result = animals.splice(1,2, "rest");
console.log(result);
console.log(animals)