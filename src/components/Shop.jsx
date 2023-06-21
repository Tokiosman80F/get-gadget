import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/localDB";
import { ProductContext } from "../App";

const Shop = () => {
  const productData = useContext(ProductContext);
  console.log(productData);
  const handleAddToCart = (id) => {
    console.log(id);
    addToDB(id);
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
