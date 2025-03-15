
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import CodingProfiles from '@/components/sections/CodingProfiles';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <CodingProfiles />
        <Certificates />
        <Contact />
      </main>
      
      <footer className="py-8 bg-secondary/50 text-center">
        <div className="container mx-auto">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Amit Kumar. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
