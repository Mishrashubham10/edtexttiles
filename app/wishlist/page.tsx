'use client';

import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { useWishlist } from '@/context/WishlistContext';
import Link from 'next/link';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  return (
    <>
      {/* ========= HERO ========= */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-serif mb-4">Wishlist</h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'item' : 'items'} saved
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Save your favorite items to purchase later.
              </p>
              <Link href="/products" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {items.map((item, index) => (
                <div key={item.product.id} className="relative">
                  <ProductCard product={item.product} index={index} />
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="absolute top-4 right-14 z-10 p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}