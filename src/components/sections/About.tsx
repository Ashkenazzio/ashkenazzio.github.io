import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { FileText, GraduationCap, Briefcase, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText />
                Bio
              </h3>
              <p className="text-muted-foreground">
                Software engineering student with a passion for creating
                innovative solutions. Specializing in full-stack development, I
                combine technical expertise with creative problem-solving to
                build user-centric applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="rounded-lg border text-card-foreground shadow-sm h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <div className="p-6 pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap />
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
                </div>
              </div>
              <div>
                <div className="rounded-lg border text-card-foreground shadow-sm h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <div className="p-6 pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase />
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
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
            <div className="relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-40 h-40 border-4 border-primary/20">
                <img
                  className="aspect-square h-full w-full"
                  alt="Omri Ashkenazi"
                  loading="lazy"
                  src="/Omri-bw.png"
                />
              </span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold">Omri Ashkenazi</h3>
              <p className="text-muted-foreground">
                Full-Stack Software Engineer
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-primary/10">
                React
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-primary/10">
                Node
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-primary/10">
                UI/UX
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-primary/10">
                Full Stack
              </div>
            </div>
            <div>
              <a
                href="https://www.dropbox.com/scl/fi/q4xrx79y71qi3i01yffja/Aathif_Zahir_CV.pdf?rlkey=7v6aicpcshu6h1diqyq9cb0p2&amp;st=wbf2xkt8&amp;dl=1"
                download="Aathif_Zahir_CV.pdf"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
              >
                <Download />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
