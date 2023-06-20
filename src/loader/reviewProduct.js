import { getStoredDataFromDB } from "../utilities/localDB";

export const reviewProduct = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();

  const savedProducts = getStoredDataFromDB();
  const reviewingProducts = [];
  for (const id in savedProducts) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantities = savedProducts[id];
      reviewingProducts.push(foundProduct);
    }
  }
  return { reviewingProducts, products };
};
