// employees.js
var faker = require("faker");
function generateProducts() {
  var products = [];
  for (var id = 0; id < 20; id++) {
    var image = faker.image.image();
    var productName = faker.commerce.productName();
    var price = faker.commerce.price();
    var description = faker.commerce.productMaterial();
    var color = faker.commerce.color();
    var review = faker.lorem.paragraph();
    products.push({
      id: id,
      image: image,
      product_name: productName,
      price: price,
      description: description,
      color: color
    });
  }
  return { products: products };
}
module.exports = generateProducts;
