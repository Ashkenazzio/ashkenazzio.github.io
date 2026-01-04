'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Github,
  ChevronDown,
  ChevronUp,
  Ticket,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { HoverCardEffect } from '../ui/HoverCardEffect';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import {
  createContainerVariants,
  createItemVariants,
  createHeadingVariants,
  easeOutQuint,
} from '@/lib/motion-variants';

// Custom smooth scroll with configurable duration and easing
const smoothScrollTo = (
  targetY: number,
  duration: number = 1200
): Promise<void> => {
  return new Promise(resolve => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuint(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};

const projects = [
  {
    id: 1,
    title: 'TrapCheck',
    description:
      'An AI-powered tourist trap detector that evaluates venues by combining live web searches and Google Maps reviews through a hybrid three-stage pipeline: deterministic metrics, RAG-based calibration, and LLM interpretation.',
    image: 'TrapCheck.webp',
    tags: ['Python', 'LangChain', 'RAG', 'Gemini AI', 'AI Agents', 'NLP'],
    github: 'https://github.com/ashkenazzio/trap-check',
    live: null,
  },
  {
    id: 2,
    title: 'Ticketz',
    description:
      'A full-stack ticketing platform featuring user authentication, role-based access control, and a modern GraphQL API architecture with type-safe database operations.',
    image: null,
    placeholder: Ticket,
    tags: [
      'Next.js',
      'Nest.js',
      'GraphQL',
      'Prisma',
      'TypeScript',
      'Full-Stack',
    ],
    github: [
      {
        label: 'Frontend',
        url: 'https://github.com/ashkenazzio/ticketz-frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/ashkenazzio/ticketz-backend',
      },
    ],
    live: null,
    wip: true,
  },
  {
    id: 3,
    title: 'Weather2Music',
    description:
      'A web app that recommends songs based on current weather conditions, integrating multiple third-party APIs.',
    image: 'weather2music.webp',
    tags: ['React', 'REST APIs', 'API Integration', 'UI/UX'],
    github: 'https://github.com/ashkenazzio/weather2music',
    live: 'https://ashkenazzio.github.io/weather2music',
  },
  {
    id: 4,
    title: 'Brain Tumor Classification',
    description:
      'Computer Vision deep learning model for classifying brain MRI scans into 4 categories using PyTorch and EfficientNet-B0 transfer learning, achieving 99.47% accuracy.',
    image: 'BrainTumorClassification.webp',
    tags: [
      'Python',
      'PyTorch',
      'Computer Vision',
      'Deep Learning',
      'Transfer Learning',
    ],
    github: 'https://github.com/ashkenazzio/brain-tumor-classification',
    live: null,
  },
  {
    id: 5,
    title: 'Arise',
    description:
      'A full-stack expense tracking application built with Next.js, featuring custom RESTful APIs and a responsive UI.',
    image: 'Arise.webp',
    tags: ['Next.js', 'React', 'Node.js', 'REST APIs', 'Full-Stack'],
    github: 'https://github.com/ashkenazzio/arise',
    live: 'https://arise-mocha.vercel.app',
  },
  {
    id: 6,
    title: 'City Bicycle & Stuff',
    description:
      'A full-stack MVC e-commerce store built from scratch with Node.js, Express, and MongoDB, featuring product management and order processing.',
    image: 'Bicycle1.webp',
    tags: ['Node.js', 'Express', 'MongoDB', 'MVC', 'E-Commerce', 'Full-Stack'],
    github: 'https://github.com/ashkenazzio/Online-Shop',
    live: null,
  },
];

const INITIAL_PROJECTS_COUNT = 3;

// Generate srcset for responsive images
const getImageSrcSet = (imageName: string) => {
  const baseName = imageName.replace('.webp', '');
  return {
    src: `/${baseName}-800w.webp`,
    srcSet: `/${baseName}-400w.webp 400w, /${baseName}-800w.webp 800w, /${imageName} 1200w`,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  };
};

const containerVariants = createContainerVariants(0.15, 0.1);
const itemVariants = createItemVariants({
  y: 30,
  scale: 0.95,
  stiffness: 80,
  damping: 14,
});
const headingVariants = createHeadingVariants('x', -30);

// Hook to detect mobile viewport
const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [justClosed, setJustClosed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewedSlides, setViewedSlides] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    const newIndex = currentSlide + newDirection;
    if (newIndex >= 0 && newIndex < projects.length) {
      setIsAnimating(true);
      setSlideDirection(newDirection);
      setCurrentSlide(newIndex);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const displayedProjects =
    showAll || isClosing ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);

  const handleToggle = () => {
    if (showAll) {
      // Closing: animate out, then hide and scroll (desktop only)
      setIsClosing(true);
      setJustClosed(true);
      setTimeout(() => {
        setShowAll(false);
        setIsClosing(false);
        // Scroll to section heading with padding for header
        if (headingRef.current) {
          const headingRect = headingRef.current.getBoundingClientRect();
          const header = document.querySelector('header');
          const headerHeight = header?.getBoundingClientRect().height ?? 0;
          const isMobile = window.innerWidth < 768;

          // Mobile: heading right beneath header with minimal margin
          // Desktop: more breathing room
          const scrollMargin = isMobile ? 16 : 40;
          const targetY =
            window.scrollY + headingRect.top - headerHeight - scrollMargin;
          smoothScrollTo(Math.max(0, targetY), 1000);
        }
        // Reset justClosed after the delay animation completes
        setTimeout(() => setJustClosed(false), 400);
      }, 300); // Match animation duration
    } else {
      setShowAll(true);
      // Scroll to show new projects only on desktop
      if (window.innerWidth >= 768) {
        requestAnimationFrame(() => {
          if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Scroll so the button is near the bottom of the viewport
            const targetY =
              window.scrollY + buttonRect.bottom - viewportHeight + 60; // 60px padding from bottom
            smoothScrollTo(targetY, 1200);
          }
        });
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="bg-background/50">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          <h2 ref={headingRef} className="section-heading mb-12">
            Projects
          </h2>
          <motion.p
            className="text-muted-foreground mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          >
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills in various technologies and problem domains.
          </motion.p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile ? (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 14,
            }}
          >
            {/* Fixed height container with relative positioning and perspective */}
            <div
              className="relative h-[520px]"
              style={{ perspective: '1200px' }}
            >
              <AnimatePresence initial={false} custom={slideDirection}>
                <motion.div
                  key={currentSlide}
                  custom={slideDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? '60%' : '-60%',
                      rotateY: direction > 0 ? -35 : 35,
                      opacity: 0,
                      scale: 0.9,
                    }),
                    center: {
                      x: 0,
                      rotateY: 0,
                      opacity: 1,
                      scale: 1,
                    },
                    exit: (direction: number) => ({
                      x: direction > 0 ? '-60%' : '60%',
                      rotateY: direction > 0 ? 35 : -35,
                      opacity: 0,
                      scale: 0.9,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 24,
                    opacity: { duration: 0.35 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  onAnimationComplete={() => setIsAnimating(false)}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {(() => {
                    const project = projects[currentSlide];
                    // Check if this slide should animate (hasn't been viewed yet)
                    const shouldAnimate = !viewedSlides.has(currentSlide);
                    return (
                      <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col border border-gray-200/60 dark:border-white/10 shadow-sm dark:shadow-none">
                        <div className="h-48 bg-muted relative overflow-hidden">
                          {project.image ? (
                            <img
                              key={`slide-img-${currentSlide}`}
                              {...getImageSrcSet(project.image)}
                              alt={project.title}
                              loading="lazy"
                              className={`w-full h-48 object-cover ${shouldAnimate ? 'animate-blur-in' : ''}`}
                              onAnimationEnd={() => {
                                if (shouldAnimate) {
                                  setViewedSlides(prev => new Set(prev).add(currentSlide));
                                }
                              }}
                            />
                          ) : project.placeholder ? (
                            <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                              <project.placeholder className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                            </div>
                          ) : null}
                          {'wip' in project && project.wip && (
                            <div className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow-sm">
                              Work in Progress
                            </div>
                          )}
                        </div>
                        <div className="p-6 space-y-4 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                data-touch-hover
                                className="project-tag"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3 pt-2 flex-wrap mt-auto">
                            {Array.isArray(project.github) ? (
                              project.github.map(repo => (
                                <a
                                  key={repo.label}
                                  href={repo.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`View ${project.title} ${repo.label} on GitHub`}
                                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                                >
                                  <Github />
                                  <span>{repo.label}</span>
                                </a>
                              ))
                            ) : (
                              <a
                                href={project.github as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                              >
                                <Github />
                                <span>GitHub</span>
                              </a>
                            )}
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View live demo of ${project.title}`}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                              >
                                <ExternalLink />
                                <span>Live Site</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => paginate(-1)}
                disabled={currentSlide === 0}
                className="p-2 rounded-full bg-background border border-input disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== currentSlide && !isAnimating) {
                        setIsAnimating(true);
                        setSlideDirection(index > currentSlide ? 1 : -1);
                        setCurrentSlide(index);
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary w-6'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                disabled={currentSlide === projects.length - 1}
                className="p-2 rounded-full bg-background border border-input disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Desktop Grid View */
          <>
            <motion.div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {displayedProjects.map((project, index) => {
                const isExtraProject = index >= INITIAL_PROJECTS_COUNT;
                const extraProjectsCount = projects.length - INITIAL_PROJECTS_COUNT;
                const openDelay = isExtraProject
                  ? `${(index - INITIAL_PROJECTS_COUNT) * 100}ms`
                  : undefined;
                // Reverse stagger for closing: last project animates first
                const closeDelay = isExtraProject
                  ? `${
                      (extraProjectsCount - 1 - (index - INITIAL_PROJECTS_COUNT)) *
                      100
                    }ms`
                  : undefined;

                // For initial projects, use Framer Motion variants
                // For extra projects, use CSS animations for show/hide
                const ProjectWrapper = isExtraProject ? 'div' : motion.div;
                const wrapperProps = isExtraProject
                  ? {}
                  : { variants: itemVariants };

                return (
                  <ProjectWrapper key={project.id} {...wrapperProps}>
                    <HoverCardEffect
                      className={`bg-card rounded-lg overflow-hidden h-full ${
                        isExtraProject && showAll && !isClosing
                          ? 'animate-pop-in'
                          : ''
                      }${isExtraProject && isClosing ? ' animate-pop-out' : ''}`}
                      containerClassName="h-full rounded-lg"
                      innerStyle={
                        isExtraProject
                          ? { animationDelay: isClosing ? closeDelay : openDelay }
                          : undefined
                      }
                    >
                      <div className="flex flex-col h-full">
                        <div className="h-48 bg-muted relative overflow-hidden group flex-shrink-0">
                          {project.image ? (
                            <motion.img
                              {...getImageSrcSet(project.image)}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-48 object-cover"
                              initial={{ filter: 'blur(16px)', opacity: 0 }}
                              whileInView={{ filter: 'blur(0px)', opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                opacity: { duration: 0.3, ease: 'easeOut' },
                                filter: { duration: 0.6, delay: 0.15, ease: 'easeOut' },
                              }}
                            />
                          ) : project.placeholder ? (
                            <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                              <project.placeholder className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                            </div>
                          ) : null}
                          {'wip' in project && project.wip && (
                            <div className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow-sm">
                              Work in Progress
                            </div>
                          )}
                          <div className="absolute inset-0 bg-primary/30 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {Array.isArray(project.github) ? (
                              project.github.map(repo => (
                                <motion.a
                                  key={repo.label}
                                  href={repo.url}
                                  className="flex flex-col items-center gap-1.5 cursor-pointer"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${repo.label} repository for ${project.title}`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.88 }}
                                >
                                  <span className="bg-background/90 text-foreground p-3 rounded-full hover:bg-background transition-colors">
                                    <Github className="h-5 w-5" />
                                  </span>
                                  <span className="bg-background/90 text-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                                    {repo.label}
                                  </span>
                                </motion.a>
                              ))
                            ) : (
                              <motion.a
                                href={project.github as string}
                                className="bg-background/90 text-foreground p-3 rounded-full hover:bg-background transition-colors cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub repository for ${project.title}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.88 }}
                              >
                                <Github className="h-5 w-5" />
                              </motion.a>
                            )}
                            {project.live && (
                              <motion.a
                                href={project.live}
                                className="bg-background/90 text-foreground p-3 rounded-full hover:bg-background transition-colors cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Live site for ${project.title}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.88 }}
                              >
                                <ExternalLink className="h-5 w-5" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                        <div className="p-6 space-y-4 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                data-touch-hover
                                className="project-tag"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3 pt-2 mt-auto flex-wrap">
                            {Array.isArray(project.github) ? (
                              project.github.map(repo => (
                                <a
                                  key={repo.label}
                                  href={repo.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`View ${project.title} ${repo.label} on GitHub`}
                                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                                >
                                  <Github />
                                  <span>{repo.label}</span>
                                </a>
                              ))
                            ) : (
                              <a
                                href={project.github as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                              >
                                <Github />
                                <span>GitHub</span>
                              </a>
                            )}
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View live demo of ${project.title}`}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                              >
                                <ExternalLink />
                                <span>Live Site</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </HoverCardEffect>
                  </ProjectWrapper>
                );
              })}
            </motion.div>

            {projects.length > INITIAL_PROJECTS_COUNT && (
              <div className="flex justify-center mt-12">
                <AnimatePresence mode="wait">
                  {!isClosing && (
                    <motion.div
                      key={showAll ? 'less' : 'more'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.2,
                        delay: justClosed && !showAll ? 0.35 : 0,
                      }}
                    >
                      <Button
                        ref={buttonRef}
                        variant="outline"
                        onClick={handleToggle}
                        className="group gap-2 hover:bg-accent hover:text-accent-foreground hover:border-primary/30 cursor-pointer"
                      >
                        {showAll ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        ) : (
                          <>
                            <span>Show More Projects</span>
                            <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
