bankAccount = {
  owner : "Alice",
  balance : 500,
};

function deposit(amount){
  if(amount < 0 ) {
    throw new Error("Amount cannot be less than 0");
  }
  else{
    bankAccount.balance += amount;
  }

  return bankAccount.balance;
}

// let withdraw = (amount) =>{
//   if(amount < 0 ){
//     throw new Error("Amount must be greater than zero");
//   }
//   if(amount > bankAccount.balance){
//     throw new Error("Amount must be less than balance");
//   }
//   else{
//     bankAccount.balance -= amount;
//   }
//   return bankAcount.balance
// }

module.exports = {deposit};
