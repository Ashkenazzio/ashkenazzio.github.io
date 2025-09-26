import { Github, Code } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="pt-14 bg-background/50">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="overflow-hidden">
                <span className="w-full h-full lazy-load-image-background blur lazy-load-image-loaded">
                  <img
                    src="ticketz.png"
                    alt="Ticketz"
                    className="transition-all duration-500 scale-100 blur-0 w-full h-48 object-cover"
                  />
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ashkenazzio/ticketz"
                    className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository for Ticketz"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">Ticketz</h3>
              <p className="text-muted-foreground text-sm">
                A Python-based scraper using Scrapy to extract product details
                from Amazon, with MongoDB integration for data storage.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Python
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Scrapy
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  MongoDB
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Data Mining
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/ashkenazzio/ticketz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Ticketz on GitHub"
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex gap-2 items-center"
                >
                  <Github />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="overflow-hidden">
                <span className="w-full h-full lazy-load-image-background blur lazy-load-image-loaded">
                  <img
                    src="Arise.png"
                    alt="Arise"
                    className="transition-all duration-500 scale-100 blur-0 w-full h-48 object-cover"
                  />
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ashkenazzio/arise"
                    className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository for Arise"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">Arise</h3>
              <p className="text-muted-foreground text-sm">
                A responsive full-stack expense tracker web app. Built with
                Next.js and MySQL using custom built RESTful APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  React
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Node.js
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Express
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/ashkenazzio/arise"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Arise on GitHub"
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex gap-2 items-center"
                >
                  <Github />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="overflow-hidden">
                <span className="w-full h-full lazy-load-image-background blur lazy-load-image-loaded">
                  <img
                    src="weather2music.png"
                    alt="Weather2Music"
                    className="transition-all duration-500 scale-100 blur-0 w-full h-48 object-cover"
                  />
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ashkenazzio/weather2music"
                    className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository for Weather2Music"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Weather2Music
              </h3>
              <p className="text-muted-foreground text-sm">
                A responsive web app that displays song recommendations based on
                the weather. Built with React using third-party APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  React Native
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Firebase
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Authentication
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Cloud Functions
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/ashkenazzio/weather2music"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Weather2Music on GitHub"
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex gap-2 items-center"
                >
                  <Github />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="overflow-hidden">
                <span className="w-full h-full lazy-load-image-background blur lazy-load-image-loaded">
                  <img
                    src="SpaceLots.png"
                    alt="SpaceLots"
                    className="transition-all duration-500 scale-100 blur-0 w-full h-48 object-cover"
                  />
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ashkenazzio/SpaceLots"
                    className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository for SpaceLots"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">SpaceLots</h3>
              <p className="text-muted-foreground text-sm">
                SpaceLots is a fun exercise of a dummy-store I built with
                modern React using functional components and hooks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  React Native
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Firebase
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Authentication
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Cloud Functions
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/ashkenazzio/SpaceLots"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View SpaceLots on GitHub"
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex gap-2 items-center"
                >
                  <Github />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="overflow-hidden">
                <span className="w-full h-full lazy-load-image-background blur lazy-load-image-loaded">
                  <img
                    src="Bicycle1.png"
                    alt="CityBicycleStuff"
                    className="transition-all duration-500 scale-100 blur-0 w-full h-48 object-cover"
                  />
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ashkenazzio/Online-Shop"
                    className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository for CityBicycleStuff"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                CityBicycleStuff
              </h3>
              <p className="text-muted-foreground text-sm">
                A functional MVC e-Commerce store I've built from the ground up,
                using Node.js, Express.js and MongoDB.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  React Native
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Firebase
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Authentication
                </span>
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  Cloud Functions
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/ashkenazzio/Online-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CityBicycleStuff on GitHub"
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex gap-2 items-center"
                >
                  <Github />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group">
            <span>Show More Projects</span>
            <Code />
          </button>
        </div>
      </div>
    </section>
  );
}
