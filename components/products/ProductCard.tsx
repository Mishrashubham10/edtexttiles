'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card"
    >
      <Link href={`/products/${product.id}`} className="block relative">
        <div className="relative overflow-hidden bg-secondary aspect-3/4">
          <Image
            src={product.images[0]}
            alt={product.name}
            className={cn(
              'product-card-image',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
            fill
            priority
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse" />
          )}

          {product.isNew && <span className="badge-new">New</span>}
          {product.originalPrice && <span className="badge-sale">Sale</span>}

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-background text-foreground py-3 text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              Quick View
            </button>
          </div>
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(product)}
        className={cn(
          'absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 z-10',
          inWishlist ? 'text-destructive' : 'text-foreground'
        )}
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart className={cn('w-5 h-5', inWishlist && 'fill-current')} />
      </button>

      <div className="p-4 text-center">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-sm hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="font-medium">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* ========== COLOR SWATCHES ========== */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color.name}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}