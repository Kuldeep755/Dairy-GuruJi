"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "dg_cart_items";
const BUY_NOW_STORAGE_KEY = "dg_buy_now_item";
const USER_ID_STORAGE_KEY = "dg_checkout_user_id";
const MAX_QUANTITY = 10;

const CartContext = createContext(null);

function clampQuantity(value) {
  const parsed = Number.parseInt(value, 10) || 1;
  return Math.max(1, Math.min(MAX_QUANTITY, parsed));
}

function createGuestUserId() {
  return `guest_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function itemKey(item) {
  return `${item.productId}__${item.variantLabel || "standard"}`;
}

export function CartProvider({ children }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [userId, setUserId] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [buyNowItem, setBuyNowItemState] = useState(null);

  useEffect(() => {
    const savedUserId = window.localStorage.getItem(USER_ID_STORAGE_KEY) || createGuestUserId();
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    const savedBuyNow = window.localStorage.getItem(BUY_NOW_STORAGE_KEY);

    setUserId(savedUserId);
    window.localStorage.setItem(USER_ID_STORAGE_KEY, savedUserId);

    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setCartItems(parsed);
        }
      } catch {
        setCartItems([]);
      }
    }

    if (savedBuyNow) {
      try {
        const parsed = JSON.parse(savedBuyNow);
        setBuyNowItemState(parsed && parsed.productId ? parsed : null);
      } catch {
        setBuyNowItemState(null);
      }
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems, isHydrated]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    if (buyNowItem) {
      window.localStorage.setItem(BUY_NOW_STORAGE_KEY, JSON.stringify(buyNowItem));
      return;
    }

    window.localStorage.removeItem(BUY_NOW_STORAGE_KEY);
  }, [buyNowItem, isHydrated]);

  const addToCart = (item, quantity = 1) => {
    const nextQty = clampQuantity(quantity);

    setCartItems((previousItems) => {
      const key = itemKey(item);
      const existingIndex = previousItems.findIndex((entry) => itemKey(entry) === key);

      if (existingIndex === -1) {
        return [...previousItems, { ...item, quantity: nextQty }];
      }

      const copy = [...previousItems];
      const existing = copy[existingIndex];
      copy[existingIndex] = {
        ...existing,
        quantity: clampQuantity(existing.quantity + nextQty),
      };

      return copy;
    });
  };

  const updateCartItemQuantity = (productId, variantLabel, quantity) => {
    setCartItems((previousItems) =>
      previousItems.map((item) => {
        if (item.productId === productId && (item.variantLabel || "") === (variantLabel || "")) {
          return {
            ...item,
            quantity: clampQuantity(quantity),
          };
        }
        return item;
      }),
    );
  };

  const removeFromCart = (productId, variantLabel) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => !(item.productId === productId && (item.variantLabel || "") === (variantLabel || "")),
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const setBuyNowItem = (item, quantity = 1) => {
    setBuyNowItemState({
      ...item,
      quantity: clampQuantity(quantity),
    });
  };

  const clearBuyNowItem = () => {
    setBuyNowItemState(null);
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + clampQuantity(item.quantity), 0),
    [cartItems],
  );

  const value = useMemo(
    () => ({
      isHydrated,
      userId,
      cartItems,
      cartCount,
      buyNowItem,
      addToCart,
      updateCartItemQuantity,
      removeFromCart,
      clearCart,
      setBuyNowItem,
      clearBuyNowItem,
    }),
    [isHydrated, userId, cartItems, cartCount, buyNowItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

export { MAX_QUANTITY };
