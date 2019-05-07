const baseURL = "http://localhost:8090";

const productAPI = {
  getAllProducts: function() {
    return fetch(`${baseURL}/products`).then(response => response.json());
  },
  getOneProduct: function(productId) {
    return fetch(`${baseURL}/products/${productId}`).then(response =>
      response.json()
    );
  }
};

export default productAPI;
