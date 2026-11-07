import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "prakrutik_tattva_cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to read cart from local storage", e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartNotification, setCartNotification] = useState(null);

  // Sync cart changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to local storage", e);
    }
  }, [cart]);

  // Add product to cart with chosen pack size
  const addToCart = (product, packSize, price, quantity = 1) => {
    const itemId = `${product.id}_${packSize}`;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.id === itemId);

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: itemId,
            productId: product.id,
            name: product.name,
            category: product.category,
            packSize: packSize,
            price: price, // number or null
            quantity: quantity,
            image: product.image
          }
        ];
      }
    });

    // Show temporary toast notification
    setCartNotification(`Added ${quantity} × ${product.name} (${packSize}) to your basket.`);
    setTimeout(() => {
      setCartNotification(null);
    }, 3200);
  };

  // Update quantity directly
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item completely
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Computed total quantity of all items in cart
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Computed total price for items with configured prices
  const pricedSubtotal = cart.reduce((sum, item) => {
    if (item.price !== null && item.price !== undefined) {
      return sum + (item.price * item.quantity);
    }
    return sum;
  }, 0);

  // Flag if any item has "price on request"
  const hasUnpricedItems = cart.some(item => item.price === null || item.price === undefined);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        pricedSubtotal,
        hasUnpricedItems,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        cartNotification
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
