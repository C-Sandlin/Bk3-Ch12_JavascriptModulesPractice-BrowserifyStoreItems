// employees.js
var faker = require("faker");
function generateReviews() {
  var Reviews = [];
  for (var id = 1; id < 41; id++) {
    var userName = faker.internet.userName();
    var userRating = faker.finance.amount();
    var userReview = faker.lorem.paragraph();

    Reviews.push({
      id: id,
      userName: userName,
      userRating: userRating,
      userReview: userReview
    });
  }
  return { Reviews: Reviews };
}
module.exports = generateReviews;
