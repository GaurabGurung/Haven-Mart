import { createContext } from "react";
import products from "../assets/data/products";
import { useState, useEffect } from "react";

export const ProductsContext = createContext({
  trendingProducts: [],
  bestSalesProducts: [],
  newArrivals: [],
  popularInCategory: [],
});

export const ProductsProvider = ({ children }) => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [popularInCategory, setPopularInCategory] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProducts(filteredTrendingProducts);

    const filteredBestSalesProducts = products.filter(
      (items) => items.category === "sofa"
    );
    setBestSalesProducts(filteredBestSalesProducts);

    const filteredNewArrivals = products.filter(
      (item) => item.category === "mobile" || item.category === "wireless"
    );
    setNewArrivals(filteredNewArrivals);

    const filteredPopularInCategory = products.filter(
      (item) => item.category === "watch"
    );
    setPopularInCategory(filteredPopularInCategory);
  }, []);

  const value = {
    trendingProducts,
    bestSalesProducts,
    newArrivals,
    popularInCategory,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
