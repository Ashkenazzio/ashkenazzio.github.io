"use client";

import {
  Terminal,
  PanelsTopLeft,
  Code,
  Database,
  Server,
  Brain,
  LucideIcon,
} from "lucide-react";
import { HoverCardEffect } from "../ui/hover-card-effect";
import { motion } from "framer-motion";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Terminal,
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    icon: PanelsTopLeft,
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Zustand", "Storybook"],
  },
  {
    icon: Code,
    title: "Backend Development",
    skills: ["Node.js", "Nest.js", "GraphQL", "REST APIs", "Redis", "Prisma"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    skills: ["CI/CD", "Docker", "Nginx", "Git", "Linux", "VPS", "Cloud"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["AI Agents", "RAG Systems", "PyTorch", "LangChain", "LangGraph"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};


export default function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          <h2 className="section-heading mb-12">Skills</h2>
          <motion.p
            className="text-muted-foreground mb-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            I build and deploy production applications across the full stack,
            with growing expertise in AI/ML systems.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <HoverCardEffect
                className="bg-card rounded-lg h-full"
                containerClassName="cursor-pointer h-full"
              >
                <div className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      data-touch-hover
                      className="skill-icon-hover p-2 bg-primary/10 text-primary rounded-md"
                    >
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        data-touch-hover
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </HoverCardEffect>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
