const findExpensiveProducts = require("./ObjectTask6.js");

test("return elements with prices greater than 700", () => {
  let threshold = 700;
  const products = [
    {id: 1, name: "Laptop", price: 1200},
    {id:2, name: "Phone", price: 800},
    {id:3, name: "Tablet", price: 500},
    {id:4, name: "Desktop", price:700}
  ];
  let answer = findExpensiveProducts(products, threshold);
  let response = [{id: 1, name: "Laptop", price: 1200},
  {id:2, name: "Phone", price: 800}];

  expect(answer).toEqual(response);
});