'use client';

import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/lib/hooks/use-smooth-scroll';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Home() {
  const { scrollToSection } = useSmoothScroll();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background gradients - aurora effect */}
      <div className="absolute inset-0 -z-10 bg-background"></div>
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[20%] right-[10%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-primary/[0.07] rounded-full blur-[100px] pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute top-[40%] left-[5%] w-[min(400px,60vw)] h-[min(400px,60vw)] bg-primary/[0.05] rounded-full blur-[80px] pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
        />
      </div>

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col max-w-xl text-center lg:text-left">
          <motion.span
            className="text-sm md:text-base font-medium text-primary opacity-90 mb-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            Hello! I&apos;m
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: 'spring',
              stiffness: 100,
            }}
          >
            Omri Ashkenazi
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-primary font-light mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          >
            Full-Stack & AI Engineer
          </motion.p>

          <motion.p
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
          >
            Building elegant solutions to complex problems with modern
            technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
          >
            <div className="flex flex-row items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="touch-target"
              >
                <a
                  href="#contact"
                  aria-label="Go to contact section"
                  onClick={e => handleAnchorClick(e, 'contact')}
                >
                  <Button size="lg" className="min-w-[120px] cursor-pointer">
                    Contact Me
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="touch-target"
              >
                <a
                  href="#projects"
                  aria-label="Go to projects section"
                  onClick={e => handleAnchorClick(e, 'projects')}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-[120px] hover:bg-accent hover:text-accent-foreground cursor-pointer"
                  >
                    View Projects
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  data-touch-hover
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Code block with rotating shadow effect */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 1.2,
            type: 'spring',
            stiffness: 80,
            damping: 15,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl blur-[1px]"
              animate={{ rotate: [0, 6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />

            <div
              data-touch-hover
              className="hero-code-hover relative bg-white dark:bg-[var(--codebg)] border border-gray-200/50 dark:border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="text-xs text-gray-500">engineer.ts</div>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-500">{'// Software Engineer'}</div>
                <div>
                  <span className="text-pink-600 dark:text-pink-400">
                    const
                  </span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">
                    engineer
                  </span>
                  <span className="text-gray-500">:</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-400">
                    Engineer
                  </span>{' '}
                  <span className="text-gray-500">=</span>{' '}
                  <span className="text-orange-500 dark:text-orange-400">
                    {'{'}
                  </span>
                </div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <span className="text-purple-600 dark:text-purple-400">
                    name
                  </span>
                  <span className="text-gray-500">:</span>{' '}
                  <span className="text-green-600 dark:text-green-400">
                    {`'Omri Ashkenazi'`}
                  </span>
                  <span className="text-gray-500">,</span>
                </motion.div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.3 }}
                >
                  <span className="text-purple-600 dark:text-purple-400">
                    skills
                  </span>
                  <span className="text-gray-500">:</span>{' '}
                  <span className="text-orange-500 dark:text-orange-400">
                    [
                  </span>
                  <span className="text-green-600 dark:text-green-400">
                    {`'Next.js'`}
                  </span>
                  <span className="text-gray-500">,</span>{' '}
                  <span className="text-green-600 dark:text-green-400">
                    {`'Node.js'`}
                  </span>
                  <span className="text-gray-500">,</span>{' '}
                  <span className="text-green-600 dark:text-green-400">
                    {`'Docker'`}
                  </span>
                  <span className="text-orange-500 dark:text-orange-400">
                    ]
                  </span>
                  <span className="text-gray-500">,</span>
                </motion.div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  <span className="text-purple-600 dark:text-purple-400">
                    focuses
                  </span>
                  <span className="text-gray-500">:</span>{' '}
                  <span className="text-orange-500 dark:text-orange-400">
                    [
                  </span>
                  <span className="text-green-600 dark:text-green-400">
                    {`'Full-Stack'`}
                  </span>
                  <span className="text-gray-500">,</span>{' '}
                  <span className="text-green-600 dark:text-green-400">
                    {`'AI/ML'`}
                  </span>
                  <span className="text-orange-500 dark:text-orange-400">
                    ]
                  </span>
                  <span className="text-gray-500">,</span>
                </motion.div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.0, duration: 0.3 }}
                >
                  <span className="text-purple-600 dark:text-purple-400">
                    scope
                  </span>
                  <span className="text-gray-500">:</span>{' '}
                  <span className="text-green-600 dark:text-green-400">
                    {`'End-to-end'`}
                  </span>
                </motion.div>
                <div>
                  <span className="text-orange-500 dark:text-orange-400">
                    {'}'}
                  </span>
                  <span className="text-gray-500">;</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
