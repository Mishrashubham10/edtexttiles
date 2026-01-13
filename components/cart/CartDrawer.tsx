'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ========== BACKDROP ========== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-foreground/50 z-50"
          />

          {/* =========== DRAWER =========== */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
          >
            {/* =========== HEADER ============ */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-serif">
                Shopping Bag ({items.length})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-secondary rounded-sm transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* =========== ITEMS =========== */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-muted-foreground mb-4">
                    Your bag is empty
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="btn-secondary"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-32 bg-secondary shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-medium text-sm">
                          {item.product.name}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-1">
                          {item.selectedColor} / {item.selectedSize}
                        </p>
                        <p className="font-medium mt-2">
                          ${item.product.price}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border border-border">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor,
                                  item.quantity - 1
                                )
                              }
                              className="p-2 hover:bg-secondary transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-4 text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor,
                                  item.quantity + 1
                                )
                              }
                              className="p-2 hover:bg-secondary transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              removeItem(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor
                              )
                            }
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* =========== FOOTER ============= */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span>Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Shipping and taxes calculated at checkout
                </p>
                <Link
                  href="/cart"
                  onClick={() => setCartOpen(false)}
                  className="block w-full btn-primary text-center"
                >
                  View Bag
                </Link>
                <button className="w-full btn-accent">Checkout</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}