import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left">
          <span className="text-sm md:text-base font-medium text-primary opacity-90">
            Hello! I'm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Omri <span className="highlight-text">Ashkenazi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Full-Stack Software Developer
          </p>
          <p className="text-muted-foreground">
            Building elegant solutions to complex problems with modern
            technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10">
            <div className="flex flex-row items-center gap-4">
              <div className="touch-target">
                <a href="#contact" aria-label="Go to contact section">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 min-w-[120px] py-3 text-base">
                    Contact Me
                  </button>
                </a>
              </div>
              <div className="touch-target">
                <a href="#projects" aria-label="Go to projects section">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 min-w-[120px] py-3 text-base">
                    View Projects
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <a
                href="https://github.com/ashkenazzio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/ashkenazzio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:ashkenazzio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl"></div>
            <div className="relative bg-codebg border border-gray-200 p-6 rounded-2xl shadow-sm">
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
                  <span className="text-pink-600">const</span>{" "}
                  <span className="text-blue-600">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-orange-500"></span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600">name</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-600">'Omri Ashkenazi'</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600">skills</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">'React'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'Node.js'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'Python'</span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600">focuses</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">'Full-Stack'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'UI/UX'</span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-600">learning</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-600">'Always'</span>
                </div>
                <div>
                  <span className="text-orange-500"></span>
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
