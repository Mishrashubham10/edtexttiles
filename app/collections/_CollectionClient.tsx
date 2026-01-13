'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 'spring-summer',
    name: 'Spring/Summer 2026',
    description: 'Light fabrics and relaxed silhouettes for the warmer months.',
    image: 'https://i.pinimg.com/736x/49/5b/5a/495b5a3b6c452e3a6daad5bad2629754.jpg',
  },
  {
    id: 'essentials',
    name: 'The Essentials',
    description: 'Timeless pieces that form the foundation of every wardrobe.',
    image: 'https://i.pinimg.com/736x/01/f9/0e/01f90e9e9f6eea801edb7577998a0959.jpg',
  }
];

export function CollectionClient() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Curated Selections
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif mb-4">
              Collections
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our thoughtfully curated collections, each telling its own
              story of craftsmanship and style.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide space-y-12 lg:space-y-24">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-4/5 bg-secondary overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  fill
                  loading="lazy"
                //   priority
                />
              </div>
              <div className="py-8">
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                  Collection
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif mb-6">
                  {collection.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {collection.description}
                </p>
                <Link href="/products" className="btn-primary">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}