import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/localDB";

const Shop = () => {
  const productData = useLoaderData();
  const handleAddToCart = (id) => {
    console.log(id);
    addToDB(id);
  };
  console.log(productData);
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
