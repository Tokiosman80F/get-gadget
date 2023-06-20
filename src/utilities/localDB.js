const addToDB = (id) => {
  let shoppingCart = {};
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    shoppingCart = JSON.parse(storedCard);
  }
  // quantity
  // define quantity
  // check if there is quantity
  // YES if there is quantity increase
  // NO if there is no quantity set the value of the quantity to 1
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    // now we have newQuantity we need to set it the orginal value shoppingCart[id]
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
    /* 
     Explaining this  shoppingCart[id] = 1;
     1. shoppingCart is an object 
     2. Inside shoppingCart we have key:Value
     3.Initially shoppingCart Value is 0 
     4.When we see that there no quantity that means now we need to add the quantity 
     5. We need to set the value 
        ShoppingCart:{ id:1}
        ShoppingCart:{ 12343234243 :1}

    */
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const getStoredDataFromDB = () => {
  let shoppingCart = {};
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    shoppingCart = JSON.parse(storedCard);
  }
  return shoppingCart;
};
const removeItemfromDb = (id) => {
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    const shoppingCart = JSON.parse(storedCard);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
export { addToDB, getStoredDataFromDB, removeItemfromDb };
