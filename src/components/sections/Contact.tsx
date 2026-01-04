"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const WEB3FORMS_ACCESS_KEY = "d06801cb-a386-4178-81e7-7e3c93c755c9";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);

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
    <section id="contact" className="bg-background pb-8 sm:pb-12">
      <div className="section-container">
        <motion.h2
          className="section-heading mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          Have a question or want to work together? Feel free to drop me a
          message. I&apos;d love to hear from you!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Fill up the form and I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            >
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

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Connect with me
              </h3>
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((social) => (
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
          </div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border"
              >
                {/* Honeypot spam protection - hidden from users, bots fill it */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How can I help you?"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          rows={5}
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
