import { createContext, useState } from "react";

export const CategoryContext = createContext({
  categoryValue: null,
  setCategoryValue: () => {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryValue, setCategoryValue] = useState(null);

  const value = { categoryValue, setCategoryValue };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
