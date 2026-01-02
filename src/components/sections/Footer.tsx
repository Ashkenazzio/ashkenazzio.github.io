import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-primary">OA.</span>
            <p className="mt-2 text-gray-300 max-w-md">
              Building elegant digital solutions with a focus on user experience
              and technical excellence.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-2 mb-4">
              <a
                href="https://github.com/ashkenazzio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-all duration-200 p-2 rounded-full hover:bg-white/10 cursor-pointer"
                style={{ color: "white" }}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ashkenazzio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-all duration-200 p-2 rounded-full hover:bg-white/10 cursor-pointer"
                style={{ color: "white" }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ashkenazzio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="hover:text-primary transition-all duration-200 p-2 rounded-full hover:bg-white/10 cursor-pointer"
                style={{ color: "white" }}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-gray-300 text-sm text-right">
              <p>© 2025 Omri Ashkenazi | Built with Next.js and shadcn/ui</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
