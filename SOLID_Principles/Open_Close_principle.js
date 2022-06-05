const size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

const color = Object.freeze({
  red: "red",
  blue: "blue",
  green: "green",
});

class Product {
  constructor(name, size, color) {
    this.name = name;
    this.size = size;
    this.color = color;
  }
}

/**
 * the open close principle state that, the class is open for extension but not for modification
 * we can extend the class and then use it properties to extend the fucntionlites
 * cause when the app is tested and deployed it is not good idea to modify the code in the prod instead create new class and then add functionality to it. b
 */

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((f) => f.color === color);
  }
  filterByColorAndSize(products, size, color) {
    return products.filter((f) => f.size === size && f.color === color);
  }
}

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }
  isSatisfied(item) {
    return this.color === item.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }
  isSatisfied(item) {
    return this.size === item.size;
  }
}

class BetterFilter {
  filter(items, specs) {
    return items.filter((item) => specs.isSatisfied(item));
  }

  filterby_S_C(items, s1, s2) {
    return items.filter((item) => s1.isSatisfied(item) && s2.isSatisfied(item));
  }
}

class andSpecification {
  constructor(...specs) {
    this.specs = specs;
  }
  isSatisfied(item) {
    return this.specs.every((spec) => {
      console.log(spec, " ---- ");
      return spec.isSatisfied(item);
    });
  }
}

const apple = new Product("apple", size.small, color.green);
const house = new Product("house", size.large, color.red);
const tree = new Product("tree", size.large, color.green);
const land = new Product("land", size.large, color.green);
const laptop = new Product("laptop", size.medium, color.blue);
// console.log(p);
const Products = [apple, house, tree, land, laptop];

// console.log(Products);
const pf = new ProductFilter();
// console.log(pf.filterByColor(Products, color.green));
// console.log(pf.filterByColorAndSize(Products, size.large, color.green));

const bf = new BetterFilter();
console.log(" -------- ");
// console.log(bf.filter(Products, new SizeSpecification(size.large)));
// console.log(
//   bf.filterby_S_C(
//     Products,
//     new SizeSpecification(size.large),
//     new ColorSpecification(color.green)
//   )
// );
for (const p of bf.filter(Products, new ColorSpecification(color.green))) {
  //   console.log(` * ${p.name} is  green`);
}

const SPEC = new andSpecification(
  new ColorSpecification(color.green),
  new SizeSpecification(size.large)
);

console.log(bf.filter(Products, SPEC));
