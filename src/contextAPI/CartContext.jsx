import { createContext, useState, useContext, useEffect } from "react";
import {
  addToCartAPI,
  getCartItemApI,
  removeCartItemApi,
} from "../services/allAPI";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [click, setClick] = useState(0)

  // fetch cart items
  useEffect(() => {
    const fetchCart = async () => {
      setLoadingCart(true);
      try {
        const result = await getCartItemApI();
        if (result.status === 200) {
          setCart(result.data.cartItems || []);
        }
      } catch (err) {
        console.error("Error fetching cart items:", err);
        toast.error("Failed to load cart");
      }
      setLoadingCart(false);
    };
    fetchCart();
  }, [cart]);

  // add to cart
  const addToCart = async (product) => {
    setLoadingCart(true);
    try {
      const cartItem = { productId: product._id };
      const result = await addToCartAPI(cartItem);

      if (result.status === 200 || result.status === 201) {
        setCart((prev) => [...prev, { ...product, quantity: 1 }]);
        toast.success("Item added to cart");
      } else {
        toast.error("Failed to add item");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding to cart");
    }
    setLoadingCart(false);
  };

  // remove from cart
  const removeFromCart = async (id) => {
    setLoadingCart(true);
    try {
      const result = await removeCartItemApi(id);
      if (result.status === 200) {
        setCart((prev) => prev.filter((item) => item._id !== id));
        toast.success("Item removed from cart");
      } else {
        toast.error("Failed to remove item");
      }
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Error removing item");
    }
    setLoadingCart(false);
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
        loadingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
