
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#coding', label: 'Coding Profiles' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Find active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') as string;
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm" 
        : "py-6 bg-transparent"
    )}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          Portfolio
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-full bg-secondary text-secondary-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 flex flex-col bg-white z-50 p-6 transition-all duration-300 ease-in-out md:hidden transform",
          isMenuOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        )}>
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-xl font-bold tracking-tight">
              Portfolio
            </a>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full bg-secondary text-secondary-foreground"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  activeSection === link.href.substring(1)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
