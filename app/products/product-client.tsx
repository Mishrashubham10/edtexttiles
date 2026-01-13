'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

export function ProductsClientPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? products
        : products.filter((p) => p.category === selectedCategory);

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...filtered].sort(
          (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        );
      default:
        return [...filtered].sort(
          (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
        );
    }
  }, [selectedCategory, sortBy]);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif mb-4"
          >
            Shop All
          </motion.h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our complete collection of premium garments, crafted from
            the finest fabrics.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          {/* ========= FILTERS ========= */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            {/* ========= CATEGORIES ========= */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-4 py-2 text-sm transition-colors',
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* ========== SORT ========== */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-border px-4 py-2 text-sm focus:outline-none focus:border-accent"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* ========== RESULTS COUNT ========= */}
          <p className="text-muted-foreground text-sm mb-8">
            Showing {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'result' : 'results'}
          </p>

          {/* =========== PRODUCTS =========== */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
};