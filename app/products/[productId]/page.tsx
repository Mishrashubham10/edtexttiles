'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  const router = useRouter();
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <>
        <div className="container-wide py-24 text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/products')}
            className="btn-secondary"
          >
            Back to Shop
          </button>
        </div>
      </>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast('Please select a size', {
        description: 'Please select a size',
      });
      return;
    }
    if (!selectedColor) {
      toast('Please select a color', {
        description: 'Please select a color',
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }

    toast('Added to bag', {
      description: `${product.name} has been added to your shopping bag.`,
    });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <>
      {/* =========== BREADCRUMB ============= */}
      <div className="bg-secondary/30 py-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <button
              onClick={() => router.push('/')}
              className="hover:text-foreground transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => router.push('/products')}
              className="hover:text-foreground transition-colors"
            >
              Shop
            </button>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* ========== IMAGES ============ */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative aspect-3/4 bg-secondary overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  fill
                  priority
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/90 hover:bg-background transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/90 hover:bg-background transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                {product.isNew && <span className="badge-new">New</span>}
                {product.originalPrice && (
                  <span className="badge-sale">Sale</span>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        'relative w-20 h-28 bg-secondary overflow-hidden transition-opacity',
                        selectedImage === index
                          ? 'opacity-100 ring-2 ring-foreground'
                          : 'opacity-60 hover:opacity-100'
                      )}
                    >
                      <Image
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                        fill
                        priority
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* =========== DETAILS =========== */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:py-8"
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl lg:text-4xl font-serif mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-medium">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* =========== COLOR SECTION =========== */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">
                  Color:{' '}
                  <span className="font-normal text-muted-foreground">
                    {selectedColor || 'Select a color'}
                  </span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        'w-8 h-8 rounded-full transition-all',
                        selectedColor === color.name
                          ? 'ring-2 ring-offset-2 ring-foreground'
                          : 'hover:scale-110'
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* ============ SIZE SELECTION ============ */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'min-w-12 h-12 px-4 border transition-colors',
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border hover:border-foreground'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* =========== QUALITY & ADD TO CART ============ */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Link href="/cart">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 btn-primary"
                  >
                    Add to Bag
                  </button>
                </Link>
              </div>

              {/* =========== WISHLIST ============ */}
              <button
                onClick={() => toggleWishlist(product)}
                className={cn(
                  'flex items-center justify-center gap-2 w-full py-3 border transition-colors',
                  inWishlist
                    ? 'border-destructive text-destructive'
                    : 'border-border hover:border-foreground'
                )}
              >
                <Heart
                  className={cn('w-5 h-5', inWishlist && 'fill-current')}
                />
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>

              {/* ============ ADDITIONAL INFO ============= */}
              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">
                    Shipping & Returns
                    <Plus className="w-4 h-4 group-open:hidden" />
                    <Minus className="w-4 h-4 hidden group-open:block" />
                  </summary>
                  <p className="text-muted-foreground text-sm py-2">
                    Free standard shipping on orders over ₹2500. Express
                    shipping available at checkout. Returns accepted within 30
                    days of delivery for unworn items.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">
                    Care Instructions
                    <Plus className="w-4 h-4 group-open:hidden" />
                    <Minus className="w-4 h-4 hidden group-open:block" />
                  </summary>
                  <p className="text-muted-foreground text-sm py-2">
                    Dry clean recommended. Store hung to maintain shape. Iron on
                    low heat if needed.
                  </p>
                </details>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========== RELATED PRODUCTS ============== */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container-wide">
            <h2 className="text-2xl lg:text-3xl font-serif text-center mb-12">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </>
  );
}