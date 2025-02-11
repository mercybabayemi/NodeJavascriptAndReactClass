const {deposit} = require("./account.js");
bankAccount = {
  owner : "Alice",
  balance : 500,
};

test("deposit 200 to account", ()=> {
  let actual = deposit(200);
  let expected = 700;
  expect(actual).toBe(expected)
});

// test ("deposit throws exception", ()=>{
//   let actual = deposit(-1);
//   let expected = "Amount cannot be less than 0";
//   expect(actual).toThrowError(expected)
// });

