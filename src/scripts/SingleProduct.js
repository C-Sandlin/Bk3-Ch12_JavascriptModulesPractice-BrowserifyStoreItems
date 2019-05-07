import productAPI from "./ProductFetch";

const displaySingleProduct = productId => {
  productAPI.getOneProduct(productId).then(product => {
    const renderHere = document.querySelector(".product-location");
    renderHere.innerHTML += `
    <div id="product-container">
      <div id="product-${productId}" class="single-item-focus">
        <img src="${product.image}"></img>
        <h1>${product.product_name}</h1>
        <h4>Price: $${product.price}</h4>
        <p>Description: ${product.description}</p>
      </div>
      <hr>
    </div>`;
  });
};

export default displaySingleProduct;

// <button type="click" id="btn-back" value="">Back to Products</button>
