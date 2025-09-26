import {
  Terminal,
  PanelsTopLeft,
  Code,
  Database,
  Cpu,
  Palette,
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <div>
          <h2 className="section-heading">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            I've worked with a range of technologies in the web development
            world, from frontend to backend and everything in between.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md">
                <Terminal />
              </div>
              <h3 className="text-lg font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                JavaScript
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Java
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Python
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                TypeScript
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                HTML/CSS
              </span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md">
                <PanelsTopLeft />
              </div>
              <h3 className="text-lg font-semibold">Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                React
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                React Native
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Next.js
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Tailwind CSS
              </span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md">
                <Code />
              </div>
              <h3 className="text-lg font-semibold">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Node.js
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Express.js
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Spring Boot
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                REST APIs
              </span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md">
                <Database />
              </div>
              <h3 className="text-lg font-semibold">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                MongoDB
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                MySQL
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Firebase
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                PostgreSQL
              </span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md">
                <Cpu />
              </div>
              <h3 className="text-lg font-semibold">
                Tools &amp; Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Git
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Agile/Scrum
              </span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-md">
                <Palette />
              </div>
              <h3 className="text-lg font-semibold">Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Figma
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Adobe AI
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Wireframing
              </span>
              <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm">
                Prototyping
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
