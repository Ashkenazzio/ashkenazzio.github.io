'use client';

import { useState, useRef } from 'react';
import { Github, ChevronDown, ChevronUp, Ticket, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { HoverCardEffect } from '../ui/hover-card-effect';

// Luxurious easing function - ease-out-quint for smooth deceleration
const easeOutQuint = (t: number): number => 1 - Math.pow(1 - t, 5);

// Custom smooth scroll with configurable duration and easing
const smoothScrollTo = (targetY: number, duration: number = 1200): Promise<void> => {
  return new Promise((resolve) => {
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
    image: 'TrapCheck.png',
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
    tags: ['Next.js', 'Nest.js', 'GraphQL', 'Prisma', 'TypeScript', 'Full-Stack'],
    github: 'https://github.com/ashkenazzio/ticketz-frontend',
    live: null,
  },
  {
    id: 3,
    title: 'Weather2Music',
    description:
      'A web app that recommends songs based on current weather conditions, integrating multiple third-party APIs.',
    image: 'weather2music.png',
    tags: ['React', 'REST APIs', 'Tailwind CSS', 'API Integration'],
    github: 'https://github.com/ashkenazzio/weather2music',
    live: 'https://ashkenazzio.github.io/weather2music',
  },
  {
    id: 4,
    title: 'Brain Tumor Classification',
    description:
      'Computer Vision deep learning model for classifying brain MRI scans into 4 categories using PyTorch and EfficientNet-B0 transfer learning, achieving 99.47% accuracy.',
    image: 'BrainTumorClassification.png',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Transfer Learning'],
    github: 'https://github.com/ashkenazzio/brain-tumor-classification',
    live: null,
  },
  {
    id: 5,
    title: 'Arise',
    description:
      'A full-stack expense tracking application built with Next.js, featuring custom RESTful APIs and a responsive UI.',
    image: 'Arise.png',
    tags: ['Next.js', 'React', 'Node.js', 'REST APIs', 'Full-Stack'],
    github: 'https://github.com/ashkenazzio/arise',
    live: 'https://arise-mocha.vercel.app',
  },
  {
    id: 6,
    title: 'City Bicycle & Stuff',
    description:
      'A full-stack MVC e-commerce store built from scratch with Node.js, Express, and MongoDB, featuring product management and order processing.',
    image: 'Bicycle1.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'MVC', 'E-Commerce', 'Full-Stack'],
    github: 'https://github.com/ashkenazzio/Online-Shop',
    live: null,
  },
];

const INITIAL_PROJECTS_COUNT = 3;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const displayedProjects =
    showAll || isClosing ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);

  const handleToggle = () => {
    if (showAll) {
      // Closing: animate out, then hide and scroll
      setIsClosing(true);
      setTimeout(() => {
        setShowAll(false);
        setIsClosing(false);
        // Luxurious scroll back to section top
        if (sectionRef.current) {
          const yOffset = -80; // Account for header
          const targetY =
            sectionRef.current.getBoundingClientRect().top +
            window.scrollY +
            yOffset;
          smoothScrollTo(targetY, 1000);
        }
      }, 300); // Match animation duration
    } else {
      setShowAll(true);
      // Scroll to show new projects immediately after state update
      requestAnimationFrame(() => {
        if (buttonRef.current) {
          const buttonRect = buttonRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Scroll so the button is near the bottom of the viewport
          const targetY =
            window.scrollY +
            buttonRect.bottom -
            viewportHeight +
            60; // 60px padding from bottom
          smoothScrollTo(targetY, 1200);
        }
      });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="pt-14 bg-background/50">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const isExtraProject = index >= INITIAL_PROJECTS_COUNT;
            const extraProjectsCount = projects.length - INITIAL_PROJECTS_COUNT;
            const openDelay = isExtraProject
              ? `${(index - INITIAL_PROJECTS_COUNT) * 100}ms`
              : undefined;
            // Reverse stagger for closing: last project animates first
            const closeDelay = isExtraProject
              ? `${(extraProjectsCount - 1 - (index - INITIAL_PROJECTS_COUNT)) * 100}ms`
              : undefined;

            return (
              <HoverCardEffect
                key={project.id}
                className={`bg-card rounded-lg overflow-hidden ${
                  isExtraProject && showAll && !isClosing
                    ? 'animate-pop-in'
                    : ''
                }${isExtraProject && isClosing ? ' animate-pop-out' : ''}`}
                containerClassName="cursor-pointer"
                innerStyle={
                  isExtraProject
                    ? { animationDelay: isClosing ? closeDelay : openDelay }
                    : undefined
                }
              >
                <div className="flex flex-col h-full">
                  <div className="h-48 bg-muted relative overflow-hidden rounded-t-lg group flex-shrink-0">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    ) : project.placeholder ? (
                      <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <project.placeholder className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                      </div>
                    ) : null}
                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        className="bg-background/90 text-foreground p-3 rounded-full hover:bg-background transition-all duration-200 hover:scale-110 cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          className="bg-background/90 text-foreground p-3 rounded-full hover:bg-background transition-all duration-200 hover:scale-110 cursor-pointer"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live site for ${project.title}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
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
                          className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30 h-9 rounded-md px-3 flex gap-2 items-center cursor-pointer"
                      >
                        <Github />
                        <span>GitHub</span>
                      </a>
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
            );
          })}
        </div>

        {projects.length > INITIAL_PROJECTS_COUNT && (
          <div className="flex justify-center mt-10">
            <div className="relative h-11">
              {/* Show More button */}
              <Button
                ref={!showAll && !isClosing ? buttonRef : undefined}
                variant="outline"
                size="lg"
                onClick={handleToggle}
                className={`gap-2 hover:bg-accent hover:text-accent-foreground hover:border-primary/30 transition-all duration-300 cursor-pointer ${
                  showAll || isClosing
                    ? 'opacity-0 pointer-events-none scale-95'
                    : 'opacity-100 scale-100'
                }`}
              >
                Show More Projects
                <ChevronDown className="h-4 w-4" />
              </Button>

              {/* Show Less button */}
              <Button
                ref={showAll ? buttonRef : undefined}
                variant="outline"
                size="lg"
                onClick={handleToggle}
                className={`gap-2 hover:bg-accent hover:text-accent-foreground hover:border-primary/30 transition-all duration-300 cursor-pointer absolute top-0 left-1/2 -translate-x-1/2 ${
                  showAll && !isClosing
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 pointer-events-none scale-95'
                }`}
              >
                Show Less
                <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
