import Header from "@/components/sections/Header";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { ScrollProgress, BackToTop } from "@/components/scroll-utilities";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen bg-background">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
