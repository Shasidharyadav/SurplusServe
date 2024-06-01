import { createContext, useState } from 'react';

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);

  return (
    <FoodContext.Provider value={{ foodItems, setFoodItems }}>
      {children}
    </FoodContext.Provider>
  );
};
