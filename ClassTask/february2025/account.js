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

function withdraw(amount){
  if(amount < 0){
    throw new Error("Amount must be greater than zero");
  }
  if(amount > bankAccount.balance){
    throw new Error("Amount must be less than balance");
  }
  else{
    bankAccount.balance -= amount;
  }

  return bankAccount.balance;
}

function printBalance(){
  let sentence = `The final balance is ${bankAccount.balance}`
  return sentence
}

module.exports = {deposit, withdraw, printBalance};
