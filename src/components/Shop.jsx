import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/localDB";
import { CartContext, ProductContext } from "../App";
import { toast } from "react-hot-toast";

const Shop = () => {
  const productData = useContext(ProductContext);
  const [cartItems, setCartItems] = useContext(CartContext);
  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cartItems.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!exist) {
      product.quantity = 1;
      newCart = [...cartItems, product];
    } else {
      const rest = cartItems.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    console.log("exist ==>", exist);
    setCartItems(newCart);
    addToDB(product.id);
    toast.success("Product added");
  };
  // console.log(productData);
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  ">
      {productData.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default Shop;
