import { createContext, useEffect, useState } from "react";
import { fetchFoods } from "../API/API";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  // Add to cart
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
  setCartItems((prev) => {
    if (prev[itemId] > 1) {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    } else {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    }
  });
};


  // Log cartItems whenever it changes
//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = foods.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
  }
  return totalAmount;
};


  // Fetch foods on mount
  useEffect(() => {
    const loadFoods = async () => {
      setLoading(true);
      const data = await fetchFoods();
      setFoods(data);
      setLoading(false);
    };
    loadFoods();
  }, []);

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    foods,
    loading,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
