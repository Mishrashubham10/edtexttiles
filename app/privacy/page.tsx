"use client";

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At EdTextiles, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website or make
                  a purchase.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>
                    Payment information (processed securely by our payment
                    providers)
                  </li>
                  <li>Order history and preferences</li>
                  <li>Communications you send to us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to process your orders,
                  communicate with you about your purchases, send you marketing
                  communications (with your consent), improve our website and
                  services, and comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties except as necessary to provide
                  our services (such as payment processing and shipping) or as
                  required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please
                  contact us at privacy@edtextiles.com.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                Last updated: January 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};