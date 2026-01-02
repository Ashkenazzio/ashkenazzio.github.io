import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background gradients - aurora effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50/40 via-background to-slate-50/40 dark:from-background dark:via-background dark:to-background"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] right-[10%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-primary/[0.07] rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute top-[40%] left-[5%] w-[min(400px,60vw)] h-[min(400px,60vw)] bg-purple-400/[0.05] rounded-full blur-[80px] animate-pulse-slow [animation-delay:2s] pointer-events-none"></div>
      </div>

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left animate-fade-in-up">
          <span className="text-sm md:text-base font-medium text-primary opacity-90">
            Hello! I'm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Omri <span className="highlight-text">Ashkenazi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Full-Stack Developer & AI Engineer
          </p>
          <p className="text-muted-foreground">
            Building elegant solutions to complex problems with modern
            technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10">
            <div className="flex flex-row items-center gap-4">
              <a href="#contact" aria-label="Go to contact section">
                <Button size="lg" className="min-w-[120px] btn-glow cursor-pointer">
                  Contact Me
                </Button>
              </a>
              <a href="#projects" aria-label="Go to projects section">
                <Button variant="outline" size="lg" className="min-w-[120px] hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  View Projects
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-2 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <a
                href="https://github.com/ashkenazzio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground icon-btn"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com/in/ashkenazzio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:ashkenazzio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground icon-btn"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Code block with rotating shadow effect */}
        <div className="w-full max-w-md animate-fade-in-up [animation-delay:0.2s] group/code">
          <div className="relative transition-transform duration-300 ease-out group-hover/code:-translate-y-2">
            {/* Oscillating gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl blur-[1px] animate-tilt transition-all duration-300 group-hover/code:from-primary/30 group-hover/code:to-primary/10 group-hover/code:blur-[2px]"></div>
            <div className="relative bg-white dark:bg-[var(--codebg)] border border-gray-200/50 dark:border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] transition-shadow duration-300 group-hover/code:shadow-[0_20px_50px_-10px_rgba(var(--primary-rgb),0.25)]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500">developer.js</div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-500">// Software Engineer</div>
                <div>
                  <span className="text-pink-600 dark:text-pink-400">const</span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-orange-500 dark:text-orange-400">{"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600 dark:text-purple-400">name</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-600 dark:text-green-400">'Omri Ashkenazi'</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600 dark:text-purple-400">skills</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500 dark:text-orange-400">[</span>
                  <span className="text-green-600 dark:text-green-400">'Next.js'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600 dark:text-green-400">'Node.js'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600 dark:text-green-400">'Docker'</span>
                  <span className="text-orange-500 dark:text-orange-400">]</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600 dark:text-purple-400">focuses</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500 dark:text-orange-400">[</span>
                  <span className="text-green-600 dark:text-green-400">'Full-Stack'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600 dark:text-green-400">'AI/ML'</span>
                  <span className="text-orange-500 dark:text-orange-400">]</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600 dark:text-purple-400">learning</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-600 dark:text-green-400">'Always'</span>
                </div>
                <div>
                  <span className="text-orange-500 dark:text-orange-400">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
