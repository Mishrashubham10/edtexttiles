'use client';

import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CheckoutPopup from '@/components/cart/CheckoutPopup';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCart();
  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    setOpen(true);
  };

  return (
    <>
      {/* ========== HER0 ============= */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-serif mb-4">
              Shopping Bag
            </h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your bag
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif mb-4">Your bag is empty</h2>
              <p className="text-muted-foreground mb-8">
                Discover our collection and add some items to your bag.
              </p>
              <Link href="/products" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-6 p-4 border border-border"
                  >
                    <Link
                      href={`/product/${item.product.id}`}
                      className="w-28 h-36 bg-secondary shrink-0"
                    >
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        width={28}
                        height={36}
                      />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            href={`/product/${item.product.id}`}
                            className="font-medium hover:text-accent transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.selectedColor} / {item.selectedSize}
                          </p>
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
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
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
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-medium">
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
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-medium">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Bag
                </button>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/30 p-6 sticky top-24">
                  <h2 className="text-xl font-serif mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{totalPrice >= 250 ? 'Free' : '₹15.00'}</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>
                        ₹
                        {(totalPrice + (totalPrice >= 250 ? 0 : 15)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button className="w-full btn-primary mb-3" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                  <CheckoutPopup
                    open={open}
                    setOpen={setOpen}
                    title="Order Successful 🎉"
                    description="Thank you for shopping with us. Your order has been placed and
              will be delivered soon!"
                  />
                  <Link
                    href="/shop"
                    className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Continue Shopping
                  </Link>

                  {totalPrice < 250 && (
                    <p className="mt-4 text-xs text-muted-foreground text-center">
                      Add ₹{(250 - totalPrice).toFixed(2)} more for free
                      shipping
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
