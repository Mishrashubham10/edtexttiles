'use client';

import { Product, WishlistItem } from '@/types';
import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface WishlistState {
  items: WishlistItem[];
}

type WishlistAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] };

const wishlistReducer = (
  state: WishlistState,
  action: WishlistAction
): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.some(
        (item) => item.product.id === action.payload.id
      );
      if (exists) return state;
      return {
        items: [
          ...state.items,
          { product: action.payload, addedAt: new Date() },
        ],
      };
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    case 'LOAD_WISHLIST':
      return { items: action.payload };
    default:
      return state;
  }
};

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  useEffect(() => {
    const savedWishlist = localStorage.getItem('edtextiles-wishlist');
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist);
        dispatch({ type: 'LOAD_WISHLIST', payload: parsedWishlist });
      } catch (e) {
        console.error('Failed to parse wishlist from localStorage');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('edtextiles-wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const isInWishlist = (productId: string) => {
    return state.items.some((item) => item.product.id === productId);
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        isInWishlist,
        toggleWishlist,
        totalItems: state.items.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};