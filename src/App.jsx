import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { createContext, useState } from "react";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { reviewingProducts, products } = useLoaderData();
  /* we will use the useState to show the show changes in the UI */
  const [cartItems, setCartItems] = useState(reviewingProducts);
  console.log(products);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <Header></Header>
        {/* header 68px
          --- min-h-[calc(100vh-(68px+70px))]
          footer 70px
      */}
        <div className="min-h-[calc(100vh-138px)]">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
