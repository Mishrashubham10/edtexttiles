'use client';

import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products } from '@/data/products';

export function NewArrivalsClient() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <>
      {/* =========== HER0 ========== */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Fresh Arrivals
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif mb-4">
              New Arrivals
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover the latest additions to our collection, featuring premium
              fabrics and contemporary designs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          {newProducts.length > 0 ? (
            <ProductGrid products={newProducts} />
          ) : (
            <p className="text-center text-muted-foreground">
              No new arrivals at the moment. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}