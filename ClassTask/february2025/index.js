
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

module.exports = {getDoubledNumbers, getEvenNumbers};