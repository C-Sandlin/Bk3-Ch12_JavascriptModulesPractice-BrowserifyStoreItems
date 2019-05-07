import displaySingleProduct from "./SingleProduct";
import displayReviews from "./Review";
import displayAllProducts from "./AllProducts";

const eventListenerFunctions = {
  selectItem: function() {
    const location = document.querySelector(".product-location");
    location.addEventListener("click", () => {
      const reviewChange = document.querySelector("#reviews-container");
      reviewChange.classList.remove("hidden");
      const targetedItem = event.target.id;
      const targetItemArray = targetedItem.split("-");
      const targetedItemId = targetItemArray[1];
      console.log(targetedItemId);
      const renderHere = document.querySelector(".product-location");
      renderHere.innerHTML = "";
      displaySingleProduct(`${targetedItemId}`);
      displayReviews(`${targetedItemId}`);
    });
  },
  returnHome: function() {}
};

export default eventListenerFunctions;
