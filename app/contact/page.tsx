'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast('Message Sent', {
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* ========== HERO ========= */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-4 md:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full input-elegant"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full input-elegant"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full input-elegant"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full input-elegant resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* =========== CONTACT INFO =========== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    shop no 5, bmc retail market
                    <br />
                    Chikuwaadi near Phoenix Hospital
                    <br />
                    Borivali West, Mumbai, 400092
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 9359043986</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@edtextiles.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary/30">
              <h3 className="font-serif text-xl mb-4">Customer Service</h3>
              <p className="text-muted-foreground text-sm">
                For order inquiries, returns, or general questions, our customer
                service team is available Monday through Friday, 9am to 6pm EST.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}