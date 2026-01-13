'use client';

import { useState } from 'react';
import { Menu, X, Heart, ShoppingBag, User2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'New Arrivals', path: '/new-arrivals' },
  { name: 'Collections', path: '/collections' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, toggleCart } = useCart();
  const { totalItems: wishlistItems } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* ============ ANNOUNCEMENT BAR ============== */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-widest uppercase">
        Free shipping on orders over ₹2500
      </div>

      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ============ MOBILE MENU BUTTON ============= */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* ======== LOGO ========= */}
          <Link href="/" className="shrink-0">
            <h1 className="text-2xl lg:text-3xl font-serif font-semibold tracking-wide text-primary">
              EdTextiles
            </h1>
          </Link>

          {/* ========= DESKTOP NAVIGATION ========== */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest font-medium transition-colors link-underline',
                  pathname === link.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ========== ACTIONS ============ */}
          <div className="flex items-center gap-4">
            <Link
              href="/wishlist"
              className="p-2 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                  {wishlistItems}
                </span>
              )}
            </Link>
            <Link href="/cart">
              <button
                onClick={toggleCart}
                className="p-2 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            <Link href="/login">
              <button
                className="p-2 relative"
                aria-label="Cart"
              >
                <User2 className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ============ MOBILE MENU =========== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2',
                    pathname === link.path
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}