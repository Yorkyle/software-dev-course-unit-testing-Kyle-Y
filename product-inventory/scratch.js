// scratch.js (optional demo file)
const {
  calculateDiscount,
  filterProducts,
  sortInventory,
} = require("./Calculation-manager");

console.log(calculateDiscount(100, 0.3)); // 75

console.log(filterProducts([{ price: 5 }, { price: 12 }], (p) => p.price > 10)); // [{price:12}]

const inv = [{ price: 20 }, { price: 5 }, { price: 12 }];
sortInventory(inv, "price");
console.log(inv); // [ {price:5}, {price:12}, {price:20} ]
