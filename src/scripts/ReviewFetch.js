const baseURL = "http://localhost:8090";

const reviewAPI = {
  getAllReviewsForSingleProduct: function(productId) {
    return fetch(`${baseURL}/Reviews/?productId=${productId}`).then(response =>
      response.json()
    );
  }
};

export default reviewAPI;

// http://localhost:8088/Reviews/?productId=0
