function returnedNumber(numbers){
  if(numbers[numbers.length - 1] < 9){
   numbers[numbers.length - 1] += 1
  }
  else {
    let shift = 0;
    for(let number = numbers.length - 1; number >= 0; number--){
      if(numbers[number] >= 9){
        numbers[number] = 0;
        shift = 1;
      }
    }
    if(shift == 1 && numbers[0] == 0){
      numbers.unshift(1);
    } 
    else if(shift == 1 && numbers[0] < 9){
      numbers[0] += 1;
    }
    else if( shift == 1){
      numbers.unshift(1);
    }
  }
  return numbers;
};

let num = [9,9,9];
console.log(returnedNumber(num));

let num1 = [3,2,4];
console.log(returnedNumber(num1));

let num2 = [9,3,5];
console.log(returnedNumber(num2));

let num3 = [1,9,9];
console.log(returnedNumber(num3));