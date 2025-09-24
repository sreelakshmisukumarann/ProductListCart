import { createContext, useState, useContext, useEffect } from "react";
import {
  addToCartAPI,
  getCartItemApI,
  removeCartItemApi,
} from "../services/allAPI";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // fetch cartitems
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const result = await getCartItemApI();
        if (result.status === 200) {
          setCart(result.data.cartItems || []);
          console.log("cartitems", result.data.cartItems);
        }
      } catch (err) {
        console.error("Error fetching cart items:", err);
      }
    };
    fetchCart();
  }, []);

  // add to cart
  const addToCart = async (product) => {
    try {
      const cartItem = { productId: product._id };
      const result = await addToCartAPI(cartItem);

      if (result.status === 200 || result.status === 201) {
        console.log("Item added to the cart", result.data);

        // latest cart from backend so no duplicates
        const updatedCart = await getCartItemApI();
        if (updatedCart.status === 200) {
          setCart(updatedCart.data.cartItems || []);
        }
      } else {
        console.error("Error adding the product to the cart");
      }
    } catch (error) {
      console.error(error, "error message");
    }
  };

  const removeFromCart = async (id) => {
    try {
      const result = await removeCartItemApi(id);
      if (result.status === 200) {
        // Remove from local state
        setCart((prev) => prev.filter((item) => item._id !== id));
      } else {
        console.error("Error removing item from cart");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const totalItems = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
