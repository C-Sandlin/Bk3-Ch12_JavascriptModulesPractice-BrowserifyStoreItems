import reviewAPI from "./ReviewFetch";

const displayReviews = productId => {
  reviewAPI.getAllReviewsForSingleProduct(productId).then(reviews => {
    reviews.forEach(review => {
      const reviewHere = document.querySelector("#reviews-container");
      reviewHere.innerHTML += `
            <h4>Username: ${review.userName}</h4>
            <p>Review: ${review.userReview}</p>`;
    });
  });
};

export default displayReviews;
