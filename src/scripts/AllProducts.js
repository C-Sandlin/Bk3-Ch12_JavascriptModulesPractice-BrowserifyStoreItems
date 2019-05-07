import productAPI from "./ProductFetch";

const displayAllProducts = () => {
  productAPI.getAllProducts().then(products => {
    products.forEach(product => {
      const renderHere = document.querySelector(".product-location");
      renderHere.innerHTML += `
        <div id="product-container-${product.id}" class="product-card">
            <div id="product">
                <img src="${product.image}"></img>
                <h1>${product.product_name}</h1>
                <h4>Price: $${product.price}</h4>
                <p>Description: ${product.description}</p>
            </div>
            <button type="click" id="btn-${product.id}">See Reviews</button>
            <div id="reviews">
            </div>
        </div>`;
    });
  });
};

export default displayAllProducts;
