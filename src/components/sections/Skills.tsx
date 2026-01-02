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
    skills: ["Node.js", "Nest.js", "GraphQL", "REST APIs", "Prisma", "Redis"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Linux", "CI/CD", "Nginx", "Git"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["PyTorch", "LangChain", "LangGraph", "RAG Systems", "AI Agents"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <div>
          <h2 className="section-heading">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            I build and deploy production applications across the full stack,
            with growing expertise in AI/ML systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <HoverCardEffect
              key={category.title}
              className="bg-card rounded-lg"
              containerClassName="cursor-pointer"
            >
              <div className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-md">
                    <category.icon />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </HoverCardEffect>
          ))}
        </div>
      </div>
    </section>
  );
}
