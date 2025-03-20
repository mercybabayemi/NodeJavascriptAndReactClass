
function findExpensiveProducts(products, threshold){
  let newarr = [];
  products.forEach(element => {
    if(element.price > threshold){
      newarr.push(element);
    }
  });
  return newarr;
}

module.exports = findExpensiveProducts;