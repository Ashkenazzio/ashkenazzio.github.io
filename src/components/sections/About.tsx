'use client';

import { FileText, GraduationCap, Briefcase, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { HoverCardEffect } from '../ui/HoverCardEffect';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="section-container">
        <motion.h2
          className="section-heading mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Bio
              </h3>
              <p className="text-muted-foreground">
                Full-stack engineer building production-grade web applications
                end-to-end, from server configuration to deployment. Open-source
                advocate and homelab enthusiast who self-hosts everything
                possible. Graduate of the AI & Deep Learning Development program
                by Google × Reichman Tech School.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
              >
                <HoverCardEffect
                  className="bg-card rounded-lg h-full"
                  containerClassName="h-full rounded-lg"
                >
                  <div className="p-6 h-full">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Education
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">
                        AI and Deep Learning Models Development
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Google and Reichman Tech School
                      </p>
                      <p className="text-sm text-muted-foreground">2025</p>
                    </div>
                    <div className="space-y-2 my-2">
                      <p className="font-medium">Full-Stack Web Development</p>
                      <p className="text-sm text-muted-foreground">
                        Self-taught
                      </p>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                  </div>
                </HoverCardEffect>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              >
                <HoverCardEffect
                  className="bg-card rounded-lg h-full"
                  containerClassName="h-full rounded-lg"
                >
                  <div className="p-6 h-full">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Full Stack Web Developer</p>
                        <p className="text-sm text-muted-foreground">
                          Zoom REI
                        </p>
                        <p className="text-sm text-muted-foreground">
                          March 2024 - Present
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Freelance Web Developer</p>
                        <p className="text-sm text-muted-foreground">
                          Self-employed
                        </p>
                        <p className="text-sm text-muted-foreground">
                          January 2022 - Present
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCardEffect>
              </motion.div>
            </div>
          </div>

          {/* Profile Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
            {/* Image + Title group */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
            >
              <span
                data-touch-hover
                className="profile-hover relative flex shrink-0 overflow-hidden rounded-full w-40 h-40 border-4 border-primary/20"
              >
                <img
                  className="aspect-square h-full w-full"
                  alt="Omri Ashkenazi"
                  loading="lazy"
                  src="/Omri-bw-320w.webp"
                  srcSet="/Omri-bw-160w.webp 160w, /Omri-bw-320w.webp 320w, /Omri-bw.webp 600w"
                  sizes="160px"
                />
              </span>
            </motion.div>

            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold">Omri Ashkenazi</h3>
              <p className="text-muted-foreground">
                Full-Stack & AI Engineer
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
            >
              {['Full Stack', 'AI/ML', 'Next.js', 'Docker'].map(skill => (
                <span key={skill} data-touch-hover className="about-tag">
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Download button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.92 }}
            >
              <Button asChild className="cursor-pointer text-white">
                <a
                  href="/Omri_Ashkenazi_CV.pdf"
                  download="Omri_Ashkenazi_CV.pdf"
                >
                  <Download />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
