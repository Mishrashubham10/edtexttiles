"use client";

import { motion } from 'framer-motion';
import { Truck, RotateCcw, Package, Clock } from 'lucide-react';

export default function ShippingReturns() {
  return (
    <>
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-serif"
          >
            Shipping & Returns
          </motion.h1>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Truck,
                title: 'Free Shipping',
                desc: 'On orders over ₹2500',
              },
              {
                icon: Clock,
                title: '3-5 Business Days',
                desc: 'Standard delivery',
              },
              {
                icon: RotateCcw,
                title: '30-Day Returns',
                desc: 'Hassle-free returns',
              },
              {
                icon: Package,
                title: 'Secure Packaging',
                desc: 'Premium protection',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-secondary/30"
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif mb-6">Shipping Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Standard Shipping:
                  </strong>{' '}
                  3-5 business days. Free on orders over ₹2500, otherwise ₹150.
                </p>
                <p>
                  <strong className="text-foreground">Express Shipping:</strong>{' '}
                  1-2 business days. Available for an additional ₹250.
                </p>
                <p>
                  <strong className="text-foreground">
                    International Shipping:
                  </strong>{' '}
                  7-14 business days. Rates calculated at checkout based on
                  destination.
                </p>
                <p>
                  All orders are processed within 1-2 business days. You will
                  receive a confirmation email with tracking information once
                  your order has shipped.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif mb-6">Return Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We want you to love your EdTextiles purchase. If you are not
                  completely satisfied, you may return unworn items within 30
                  days of delivery for a full refund.
                </p>
                <p>
                  <strong className="text-foreground">
                    To be eligible for a return:
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Items must be unworn, unwashed, and in original condition
                  </li>
                  <li>All original tags must be attached</li>
                  <li>Items must be returned in original packaging</li>
                  <li>Sale items are final sale and cannot be returned</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif mb-6">How to Return</h2>
              <div className="space-y-4 text-muted-foreground">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Contact our customer service team at returns@edtextiles.com
                  </li>
                  <li>Receive your prepaid return label via email</li>
                  <li>Pack items securely in original packaging</li>
                  <li>Drop off at any authorized shipping location</li>
                </ol>
                <p>
                  Refunds will be processed within 5-7 business days of
                  receiving your return. The refund will be credited to your
                  original payment method.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};