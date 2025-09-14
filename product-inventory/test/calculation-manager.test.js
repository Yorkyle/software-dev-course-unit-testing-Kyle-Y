const {
  calculateDiscount,
  filterProducts,
  sortInventory,
} = require("../calculation-manager");

describe("calculateDiscount", () => {
  test("should return discounted price for valid inputs (positive)", () => {
    expect(calculateDiscount(100, 0.3)).toBe(70);
  });

  test("should return null for invalid inputs (negative)", () => {
    expect(calculateDiscount("100", 0.3)).toBeNull();
    expect(calculateDiscount(100, "0.3")).toBeNull();
    expect(calculateDiscount(100, -0.1)).toBeNull();
    expect(calculateDiscount(100, 1.1)).toBeNull();
  });

  test("should handle boundary rates 0 and 1 (edge)", () => {
    expect(calculateDiscount(50, 0)).toBe(50);
    expect(calculateDiscount(50, 1)).toBe(0);
  });
});

describe("filterProducts", () => {
  test("should filter items using the predicate (positive)", () => {
    const products = [{ price: 5 }, { price: 12 }, { price: 20 }];
    const result = filterProducts(products, (p) => p.price > 10);
    expect(result).toEqual([{ price: 12 }, { price: 20 }]);
  });

  test("should return [] for invalid inputs (negative)", () => {
    expect(filterProducts(null, () => true)).toEqual([]);
    expect(filterProducts([], "not-a-function")).toEqual([]);
  });

  test("should return [] for an empty list (edge)", () => {
    expect(filterProducts([], () => true)).toEqual([]);
  });
});

describe("sortInventory", () => {
  test("should sort by numeric key ascending, in place (positive)", () => {
    const inv = [{ price: 20 }, { price: 5 }, { price: 12 }];
    const result = sortInventory(inv, "price");

    expect(inv).toEqual([{ price: 5 }, { price: 12 }, { price: 20 }]);
    expect(result).toBe(inv);
  });

  test("should return [] for invalid inputs (negative)", () => {
    expect(sortInventory("not-array", "price")).toEqual([]);
    expect(sortInventory([{ price: 1 }], 123)).toEqual([]);
  });

  test("should put missing-key items at the end (edge)", () => {
    const inv = [{ name: "B" }, { other: 1 }, { name: "A" }];
    sortInventory(inv, "name");

    expect(inv).toEqual([{ name: "A" }, { name: "B" }, { other: 1 }]);
  });
});
