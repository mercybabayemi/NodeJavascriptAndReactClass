function findNumberDivisor(number){
  let divisors = [];
  for(let index = 2; index <= number; index++){
      if(number % index === 0){
        divisors.push(index);
      }
  }
  return divisors;
}

function findSmallestCommonDivisor(numbers){
  let divisor = findNumberDivisor(numbers[0]);
  for(let number = 1; number < numbers.length; number++){
    let currentDivisors = findNumberDivisor(numbers[number]);
    divisor = divisor.filter((divisorNumber) => currentDivisors.includes(divisorNumber));
  }
  return divisor[0];
}

module.exports = {findNumberDivisor, findSmallestCommonDivisor};