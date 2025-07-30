import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const stored = localStorage.getItem("Flynest-cart");

const initialState = {
  cartItems: stored ? JSON.parse(stored) : [],
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  useEffect(() => {
    localStorage.setItem("Flynest-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const existingItem = useCallback(
    (id, type) =>
      cartItems.find((item) => item.id === id && item.type === type),
    [cartItems]
  );

  const addToCart = useCallback(
    (item, type) => {
      const existingCartItem = existingItem(item.id, type);
      if (existingCartItem) {
        console.log(existingCartItem);
        const newQuantity = existingCartItem.quantity + 1;
        toast.info(
          `Increased quantity of ${item.name} in Cart to ${parseInt(
            newQuantity
          )}`,
          { autoClose: 2500 }
        );
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === existingCartItem.id
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
      } else {
        toast.success(`${item.name} added to cart`, { autoClose: 2500 });
        setCartItems((prev) => [...prev, { ...item, quantity: 1, type }]);
      }
    },
    [existingItem]
  );

  const removeFromCart = useCallback(
    (id, type) => {
      const item = cartItems.find(
        (item) => item.id === id && item.type === type
      );
      toast.error(`${item.name} removed from cart`, {
        autoClose: 2500,
      });
      setCartItems((prev) =>
        prev.filter((item) => item.id !== id || item.type !== type)
      );
    },
    [cartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const updateQuantity = useCallback(
    (id, quantity) => {
      const newQuantity = parseInt(quantity);
      if (newQuantity < 1) return;

      const item = existingItem(id);
      if (!item) return;

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );

      toast.info(`Updated quantity of ${item.name} to ${newQuantity}`, {
        autoClose: 2500,
      });
    },
    [existingItem]
  );

  const incrementQuantity = useCallback((item) => {
    const newQuantity = item.quantity + 1;
    toast.info(
      `Increased quantity of ${item.name} in Cart to ${parseInt(newQuantity)}`,
      { autoClose: 2500 }
    );
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }, []);

  const decrementQuantity = useCallback(
    (item) => {
      if (item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        toast.info(
          `Decreased quantity of ${item.name} in Cart to ${parseInt(
            newQuantity
          )}`,
          { autoClose: 2500 }
        );
        setCartItems((prev) =>
          prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          )
        );
      } else if (item.quantity === 1) {
        removeFromCart(item.id);
      }
    },
    [removeFromCart]
  );

  const cartDetails = useCallback(
    (type = "all") => {
      let filteredItems = cartItems;
      if (type !== "all") {
        filteredItems = cartItems.filter((item) => item.type === type);
      }
      const cartSubTotal = filteredItems.reduce((total, item) => {
        const guidePrice = item.guidePrice || 0;
        const dinnerPrice = item.dinnerPrice || 0;
        return total + item.price + guidePrice + dinnerPrice;
      }, 0);
      const Tax = Math.round(cartSubTotal * 0.05);
      const cartTotal = cartSubTotal + Tax;
      return { cartSubTotal, Tax, cartTotal };
    },
    [cartItems]
  );

  const itemQuantity = useCallback((item) => {
    return item.quantity;
  }, []);

  const filterCartItems = useCallback(
    (type) => {
      return cartItems.filter((item) => item.type === type);
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        existingItem,
        cartDetails,
        decrementQuantity,
        itemQuantity,
        incrementQuantity,
        filterCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
