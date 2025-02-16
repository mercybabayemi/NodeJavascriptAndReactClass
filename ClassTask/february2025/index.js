
function getDoubledNumbers(arrayOfNumbers){
  let doubledNumbers = []
  arrayOfNumbers.forEach((element) => {
    let doubledNumber = element * 2;
    doubledNumbers.push(doubledNumber);
  })
  return doubledNumbers;
}

const getEvenNumbers = (arrayOfNumbers)=>{
  let evenNumbers = []
  arrayOfNumbers.forEach((element) =>{
    if(element % 2 == 0){
      evenNumbers.push(element)
    };
  });
  return evenNumbers;
}

function addThreeToEachElement(arr){
  let result = arr.map((number) => (number + 3))
  return result;
}



function getOddNumbers(array){
  return array.filter((number) => number % 2 !== 0);
}

const getWordsGreaterThanFourLetters = (arrayOfWords) =>{
  return arrayOfWords.filter((word) => word.length > 4);
}

function getStudents(students){
  return students.filter((student)=> student.age > 20);
}

const evenAndOddNumberReplacement = (arr) =>{

}


module.exports = {
  getDoubledNumbers, 
  getEvenNumbers, 
  addThreeToEachElement, 
  getOddNumbers,
  getWordsGreaterThanFourLetters,
  getStudents
};