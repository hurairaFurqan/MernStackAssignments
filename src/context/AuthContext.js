import axios from "axios";
import { createContext, useEffect, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";

import { API_BASEURL_USERS } from "./constants";

export const AuthContext = createContext();

console.log("in Auth Component");

export const AuthProvider = ({ children }) => {
  console.log("in AuthProvider");

  const tokenLocal = JSON.parse(window.localStorage.getItem("token"));
  const [token, setToken] = useState(tokenLocal);
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([{
    id:0,
    quantity:0
  }]);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  console.log("token", token, "user", user, "cart items", cartItems, 'cartQuantity', cartQuantity);
  useEffect(() => {
    console.log(`!!${token}!!`);

    (async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(`${API_BASEURL_USERS}/getme`, config);
      setUser(res.data);
      console.log("this is response from use effect of context", res);
    })();
    console.log("use effect of context");
  }, [token]);
  const login = (tk, uData) => {
    window.localStorage.setItem("token", JSON.stringify(tk));
    setToken(tk);
    setUser(uData);
  };
  const logout = () => {
    window.localStorage.removeItem("token");

    setToken(null);
    setUser(null);
  };


  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const getCartItems = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartItem = (id) => {
    console.log("id in increase cart Item function is:", id);
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartItem = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeCartItem = (id) => {
    setCartItems((item) => {
      return item.filter((st) => st.id !== id);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        getCartItems,
        increaseCartItem,
        decreaseCartItem,
        removeCartItem,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      {<ShoppingCart isOpen = {isOpen}/>}
    </AuthContext.Provider>
  );
};
