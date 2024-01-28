import { createContext } from "react";
import products from "../assets/data/products";
import { useState, useEffect } from "react";

export const ProductsContext = createContext({
  trendingProducts: [],
  setTrendingProducts: null,
  setBestSalesProducts: null,
  bestSalesProducts: [],
});

export const ProductsProvider = ({ children }) => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProducts(filteredTrendingProducts);

    const filteredBestSalesProducts = products.filter(
      (items) => items.category === "sofa"
    );
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  const value = {
    trendingProducts,
    setTrendingProducts,
    bestSalesProducts,
    setBestSalesProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
