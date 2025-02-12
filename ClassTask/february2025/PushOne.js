// function returnedNumber(numbers){
//   if(numbers[numbers.length - 1] < 9){
//    numbers[numbers.length - 1] += 1
//   }
//   else {
//     for(let number = numbers.length - 1; number >= 0; number--){
//       if(numbers[number] >= 9){
//         numbers[number] = 0;
//       }
//       if(number == 0 && numbers[number] >= 9){
//         numbers[number] = 0;
//         numbers.unshift(1);
//       }
//     }
//   }
//   return numbers;
// };

let num = [9,9,9];
console.log(returnedNumber(num));