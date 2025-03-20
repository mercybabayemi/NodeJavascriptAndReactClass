const inventory = {
  apple : 10,
  banana : 5,
  orange : 8,
  mango : 12,
};

function printEachNameAndQuantity(inventory){
  for(let fruit in inventory){
    let fruitSample = inventory[fruit];
    console.log(`${fruit} = ${inventory[fruit]} fruits`);
  }
  return " "
}

let totalFruits = (inventory) => {
  let total = 0
  for(let values in inventory){
    total += inventory[values];
  }
  return total;
};

console.log(printEachNameAndQuantity(inventory))
console.log(`The total number of fruits is ${totalFruits(inventory)}`);