"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) is available for an additional fee. International orders typically take 7-14 business days.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free standard shipping on all orders over $250. For orders under $250, standard shipping is $15.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely. Once your order ships, you will receive an email with tracking information. You can also track your order through your account dashboard.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 30 days of delivery for unworn items with original tags attached. Items must be in original packaging. Sale items are final sale.',
      },
      {
        q: 'How do I start a return?',
        a: 'Contact our customer service team at returns@edtextiles.com to receive a prepaid return label. Pack your items securely and drop off at any authorized shipping location.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Refunds are processed within 5-7 business days of receiving your return. The credit will appear on your original payment method.',
      },
    ],
  },
  {
    category: 'Products & Care',
    questions: [
      {
        q: 'How should I care for my garments?',
        a: 'Care instructions vary by fabric. Generally, we recommend dry cleaning for tailored pieces, gentle machine wash for knitwear, and hand wash for delicates. Check the care label on each garment.',
      },
      {
        q: 'Are your products sustainable?',
        a: 'We are committed to sustainable practices. We source eco-friendly fabrics, use responsible manufacturing, and are working to reduce our environmental footprint.',
      },
      {
        q: 'How do I find my size?',
        a: 'Visit our Size Guide page for detailed measurements. If you are between sizes, we generally recommend sizing up for a more relaxed fit or sizing down for a more tailored look.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-serif mb-4">FAQs</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find answers to commonly asked questions about our products,
              shipping, and policies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-serif mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const id = `${catIndex}-${qIndex}`;
                    const isOpen = openItems.includes(id);
                    return (
                      <div key={id} className="border-b border-border">
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between py-4 text-left"
                        >
                          <span className="font-medium pr-4">{item.q}</span>
                          {isOpen ? (
                            <Minus className="w-5 h-5 shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 shrink-0" />
                          )}
                        </button>
                        <div
                          className={cn(
                            'overflow-hidden transition-all duration-300',
                            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                          )}
                        >
                          <p className="text-muted-foreground">{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};