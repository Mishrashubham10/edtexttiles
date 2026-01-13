'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/1200x/d0/d7/f9/d0d7f9eda59eb41c8f0f1ee4602399d7.jpg"
            alt="EdTextiles craftsmanship"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container-wide h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-foreground max-w-2xl"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif mb-4">
              Our Story
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Crafting timeless garments since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========= MISSION ========== */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-8">
                Elevating Everyday Elegance
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Our Directors <span className='text-2xl font-bold'>Chandrakant Kamble and Swapnil Prakash Nitnaware</span> at EdTextiles, we believe that what you wear should be as
                intentional as how you live. Our mission is to create garments
                that transcend fleeting trends, offering you enduring style
                crafted from the world&apos;s finest fabrics.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Every piece in our collection tells a story of craftsmanship,
                sustainability, and thoughtful design. We work with artisans who
                share our passion for quality, ensuring that each garment meets
                the highest standards of excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========= VALUES ========= */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Quality First',
                description:
                  'We never compromise on quality. From fabric selection to final stitching, every detail matters.',
              },
              {
                title: 'Sustainable Practice',
                description:
                  'We prioritize sustainable materials and ethical manufacturing, caring for both people and planet.',
              },
              {
                title: 'Timeless Design',
                description:
                  "Our designs are made to last, both in construction and style. We create pieces you'll wear for years.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= CRAFTMANSHIPS ========== */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://i.pinimg.com/1200x/d0/d7/f9/d0d7f9eda59eb41c8f0f1ee4602399d7.jpg"
                alt="Craftsmanship"
                className="w-full aspect-square object-cover"
                width={500}
                height={500}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                Craftsmanship
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-6">
                The Art of Making
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our garments are created by skilled artisans who have dedicated
                their lives to the craft. From the rolling hills of Tuscany
                where we source our linens, to the workshops of Portugal where
                our pieces come to life, every step is handled with care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in slow fashion—taking the time to do things right
                rather than rushing to meet demands. This patience results in
                garments that not only look beautiful but feel extraordinary
                against your skin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
