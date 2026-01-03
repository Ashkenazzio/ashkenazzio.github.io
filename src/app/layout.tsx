import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TouchHoverProvider } from "@/lib/contexts/touch-hover-context";
import { MotionProvider } from "@/components/motion-provider";
import { Toaster } from "sonner";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omri Ashkenazi | Full-Stack & AI Engineer",
  description:
    "Full-stack engineer building production-grade web applications end-to-end. Specializing in Next.js, Node.js, and AI/ML systems.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "Web Development",
  ],
  authors: [{ name: "Omri Ashkenazi" }],
  creator: "Omri Ashkenazi",
  metadataBase: new URL("https://ashkenazzio.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashkenazzio.github.io",
    siteName: "Omri Ashkenazi",
    title: "Omri Ashkenazi | Full-Stack & AI Engineer",
    description:
      "Full-stack engineer building production-grade web applications end-to-end. Specializing in Next.js, Node.js, and AI/ML systems.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Omri Ashkenazi - Full-Stack & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omri Ashkenazi | Full-Stack & AI Engineer",
    description:
      "Full-stack engineer building production-grade web applications end-to-end. Specializing in Next.js, Node.js, and AI/ML systems.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <TouchHoverProvider>
            <MotionProvider>
              {children}
            </MotionProvider>
          </TouchHoverProvider>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
