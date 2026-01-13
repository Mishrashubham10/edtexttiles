'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { ProductGrid } from '../products/ProductGrid';

export default function HomePageClient() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 3);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <>
      {/* ========== HERO SECTION ============ */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/1200x/d0/d7/f9/d0d7f9eda59eb41c8f0f1ee4602399d7.jpg"
            alt="EdTextiles Collection"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/60 via-foreground/30 to-transparent" />
        </div>

        <div className="relative container-wide h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-primary-foreground"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4 block">
              Spring/Summer 2026
            </span>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6">
              Timeless Elegance, <br />
              <span className="italic">Modern Craft</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">
              Discover our curated collection of premium fabrics and
              contemporary silhouettes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-accent">
                Shop Collection
              </Link>
              <Link
                href="/new-arrivals"
                className="flex items-center gap-2 text-primary-foreground font-medium group"
              >
                View New Arrivals
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========= FEATURED CATEGORIES =========== */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {featuredProducts.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-100 lg:h-125 overflow-hidden cursor-pointer"
              >
                <Image
                  src={category.images[0]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-2">
                    {category.description}
                  </p>
                  <h3 className="text-primary-foreground text-2xl lg:text-3xl font-serif">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEW ARRIVALS ============ */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Just Arrived
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif">New Arrivals</h2>
          </motion.div>
          <ProductGrid products={newArrivals} />
          <div className="text-center mt-12">
            <Link href="/new-arrivals" className="btn-secondary">
              View All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BRAND STORY BANNER =========== */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                Our Philosophy
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-6">
                Crafted with Intention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At EdTextiles, we believe that exceptional garments begin with
                exceptional fabrics. Each piece in our collection is
                thoughtfully designed to transcend seasons and trends, offering
                you enduring style that grows more beautiful with time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From Italian linens to Mongolian cashmere, we source only the
                finest materials, working with artisans who share our commitment
                to quality and sustainability.
              </p>
              <Link href="/about" className="btn-secondary">
                Discover Our Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-3/4 overflow-hidden"
            >
              <Image
                src="https://i.pinimg.com/736x/3f/d8/17/3fd81709b11599b362fdc6f8c342a275.jpg"
                alt="EdTextiles craftsmanship"
                className="w-full aspect-4/5 object-cover"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS =========== */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif">
              Featured This Season
            </h2>
          </motion.div>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary">
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ========= SERVICES ======== */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                title: 'Complimentary Shipping',
                description:
                  'Free shipping on all orders over ₹2500. Express delivery available.',
              },
              {
                title: 'Quality Guarantee',
                description:
                  'Each garment is inspected to ensure it meets our exacting standards.',
              },
              {
                title: 'Easy Returns',
                description:
                  '30-day returns on all unworn items. No questions asked.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-serif mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}