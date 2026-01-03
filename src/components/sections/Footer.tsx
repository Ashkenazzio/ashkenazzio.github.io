import { SOCIAL_LINKS } from "@/lib/constants";
import { TerminalLogo } from "../ui/terminal-logo";

export default function Footer() {
  return (
    <footer className="pt-8 pb-12 bg-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Row 1: Logo left, icons right */}
          <div className="flex justify-between items-center">
            <TerminalLogo size="lg" animated={false} />
            <div className="flex space-x-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  data-touch-hover
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-icon-btn"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Row 2: Tagline */}
          <p className="text-gray-300">
            Building elegant solutions to complex problems with modern
            technologies.
          </p>
          {/* Row 3: Copyright */}
          <div className="text-gray-300 text-sm space-y-2">
            <p>Developed with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
            <p>© {new Date().getFullYear()} Omri Ashkenazi</p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex justify-between items-start">
          <div>
            <TerminalLogo size="lg" animated={false} />
            <p className="mt-2 text-gray-300">
              Building elegant solutions to complex problems with modern
              technologies.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex space-x-2 mb-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  data-touch-hover
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-icon-btn"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="text-gray-300 text-sm text-right space-y-2">
              <p>Developed with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
              <p>© {new Date().getFullYear()} Omri Ashkenazi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
