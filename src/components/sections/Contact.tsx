"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "d06801cb-a386-4178-81e7-7e3c93c755c9";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      delay: 0.25,
    },
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast.error("Failed to send message", {
          description: data.message || "Please try again later.",
        });
      }
    } catch {
      toast.error("Failed to send message", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <h2 className="section-heading mb-12">Get In Touch</h2>
          <motion.p
            className="text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            Have a question or want to work together? Feel free to drop me a
            message. I&apos;d love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Fill up the form and I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-start gap-3">
                <a
                  data-touch-hover
                  href="mailto:ashkenazzio@gmail.com"
                  className="contact-icon-hover"
                >
                  <Mail className="w-5 h-5 mt-1 text-primary" />
                </a>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    <a
                      data-touch-hover
                      href="mailto:ashkenazzio@gmail.com"
                      className="contact-link-hover"
                    >
                      ashkenazzio@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <a
                  data-touch-hover
                  href="tel:+972503577738"
                  className="contact-icon-hover"
                >
                  <Phone className="w-5 h-5 mt-1 text-primary" />
                </a>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    <a
                      data-touch-hover
                      href="tel:+972503577738"
                      className="contact-link-hover"
                    >
                      +972 50-3577738
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Tel Aviv-Jaffa, Israel
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Connect with me
              </h3>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/ashkenazzio",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/ashkenazzio",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:ashkenazzio@gmail.com",
                    label: "Email",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    data-touch-hover
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon-btn"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formVariants}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              {/* Honeypot spam protection - hidden from users, bots fill it */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary/50 focus:outline-none focus:border-primary focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-200"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary/50 focus:outline-none focus:border-primary focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-200"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary/50 focus:outline-none focus:border-primary focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-200"
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground hover:border-primary/50 focus:outline-none focus:border-primary focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
