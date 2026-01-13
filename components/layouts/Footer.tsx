import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  shop: [
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Best Sellers', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'Sale', path: '/products' },
  ],
  help: [
    { name: 'FAQs', path: '/faqs' },
    { name: 'Shipping & Returns', path: '/shipping-returns' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Contact Us', path: '/contact' },
  ],
  company: [
    { name: 'About EdTextiles', path: '/about' },
    { name: 'Sustainability', path: '/about' },
    { name: 'Careers', path: '/about' },
    { name: 'Press', path: '/about' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Cookie Policy', path: '/privacy' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12 lg:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-serif mb-4">
              Join Our World
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Subscribe to receive updates on new arrivals, exclusive offers,
              and styling inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} EdTextiles. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}