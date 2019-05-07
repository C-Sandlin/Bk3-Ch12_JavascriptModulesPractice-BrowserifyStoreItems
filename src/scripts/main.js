console.log("hey");

// Importing Funtions
import makeNavBar from "./Nav";
import displaySingleProduct from "./SingleProduct";
import displayAllProducts from "./AllProducts";
import displayReviews from "./Review";
import eventListenerFunctions from "./EventListeners";

// Calling Functions
makeNavBar();

displayAllProducts();

eventListenerFunctions.selectItem();
// eventListenerFunctions.returnHome();
