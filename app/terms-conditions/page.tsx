"use client";

import { motion } from 'framer-motion';

export default function TermsConditions() {
  return (
    <>
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif"
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the EdTextiles website, you agree to be
                  bound by these Terms and Conditions. If you disagree with any
                  part of these terms, you may not access the website or use our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  Purchases and Payment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All purchases made through our website are subject to product
                  availability. We reserve the right to refuse or cancel any
                  order for any reason. Prices are subject to change without
                  notice. Payment must be received prior to shipment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  Product Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to display our products as accurately as possible.
                  However, we cannot guarantee that your computer monitor will
                  accurately display colors. Product descriptions are for
                  informational purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of EdTextiles and is
                  protected by intellectual property laws. You may not
                  reproduce, distribute, or create derivative works without our
                  express permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  EdTextiles shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising from your
                  use of the website or purchase of products.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting on the
                  website. Your continued use of the website constitutes
                  acceptance of the modified terms.
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