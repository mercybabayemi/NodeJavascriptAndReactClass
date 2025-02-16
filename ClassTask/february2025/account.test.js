const {deposit, withdraw, printBalance} = require("./account.js");
bankAccount = {
  owner : "Alice",
  balance : 500,
};

test("deposit 200 to account", ()=> {
  let actual = deposit(200);
  let expected = 700;
  expect(actual).toBe(expected)
});

test("deposit throws exception", ()=>{
  expect(()=>{
    deposit(-1);
  }).toThrow("Amount cannot be less than 0")
});

test("withdraw 100", ()=>{
  let actual = withdraw(100);
  let expected = 600;
  expect(actual).toBe(expected)
});

test("withdraw throws exception", ()=>{
  expect(()=>{
    withdraw(1000);
  }).toThrow("Amount must be less than balance")
});

test("printing balance", ()=>{
  let actual = printBalance();
  let expected = "The final balance is 600";
  expect(actual).toBe(expected)
});