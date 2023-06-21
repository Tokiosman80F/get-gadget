import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { removeAllData, removeItemfromDb } from "../utilities/localDB";

// remove single data
const handleRemoveItem = (id) => {
  removeItemfromDb(id);
};
//remove all data
const handleRemoveAllItems = () => {
  removeAllData();
};
const Cart = () => {
  //here product is products.json data if needed u can access all 9 datas
  const { reviewingProducts, products } = useLoaderData();
  console.log(reviewingProducts);
  let total = 0;
  if (reviewingProducts.length > 0) {
    for (const product of reviewingProducts) {
      total = total + product.price * product.quantities;
    }
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {reviewingProducts.length ? "Review the item" : "Cart is EMPTY !!"}
        </h2>
        <ul className="flex flex-col divide-y-2 ">
          {reviewingProducts.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></CartItem>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount :<span className="font-semibold">{total}</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {reviewingProducts.length > 0 ? (
            <button onClick={handleRemoveAllItems} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back to Shop</button>
            </Link>
          )}
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
