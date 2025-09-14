function calculateDiscount(price, discountRate) {
  if (typeof price !== "number") return null;
  if (typeof discountRate !== "number") return null;
  if (discountRate < 0 || discountRate > 1) return null;

  return price * (1 - discountRate);
}

function filterProducts(products, callback) {
  if (!Array.isArray(products)) return [];
  if (typeof callback !== "function") return [];

  return products.filter(callback);
}

function sortInventory(inventory, key) {
  if (!Array.isArray(inventory)) return [];
  if (typeof key !== "string") return [];

  return inventory.sort(function (a, b) {
    let aValue;
    if (a && typeof a === "object") {
      aValue = a[key];
    } else {
      aValue = undefined;
    }

    let bValue;
    if (b && typeof b === "object") {
      bValue = b[key];
    } else {
      bValue = undefined;
    }

    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return 1;
    if (bValue === undefined) return -1;

    if (aValue > bValue) return 1;
    if (aValue < bValue) return -1;
    return 0;
  });
}

module.exports = { calculateDiscount, filterProducts, sortInventory };
