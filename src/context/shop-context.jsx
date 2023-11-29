import React, { createContext, useState, useEffect } from "react";
import { mergeData } from "../data/products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [mergedProducts, setMergedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await mergeData();
        setMergedProducts(products);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < mergedProducts.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  useEffect(() => {
    if (mergedProducts.length > 0) {
      setCartItems(getDefaultCart());
    }
  }, [mergedProducts]);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    if (cartItems[id] > 0) {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };
  const updateCartItem=(newAmount,id)=>{
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));

  }

  const getTotal=()=>{
    let total=0
    for (const item in cartItems){
        if (cartItems[item]>0){
            let info=mergedProducts.find((product)=>product.id ===Number(item))
            total+=cartItems[item]* info.price
        }
    }
    return total
  }
  const contextValue = { mergedProducts, cartItems, addToCart, removeFromCart,updateCartItem ,getTotal};
console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
