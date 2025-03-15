
import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import { ArrowDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6 text-center lg:text-left animate-fade-in">
          <p className="text-sm md:text-base font-medium text-primary uppercase tracking-widest">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Amit Kumar
            <span className="block text-primary mt-2">
              Java Fullstack Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Crafting robust and scalable applications using Java, Spring Boot, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
            <AnimatedButton 
              href="#contact" 
              variant="primary" 
              size="lg"
              icon={<Mail size={18} />}
            >
              Contact Me
            </AnimatedButton>
            <AnimatedButton 
              href="#about" 
              variant="outline"
              size="lg"
              icon={<ArrowDown size={18} />}
            >
              Learn More
            </AnimatedButton>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex justify-center animate-scale-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
            
            {/* Image container with gradient backdrop */}
            <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-primary/30 rounded-full overflow-hidden backdrop-blur-sm">
              <img 
                src="pic.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover object-center rounded-full mix-blend-multiply"
              />
            </div>
            
            {/* Small dots decoration */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary"></div>
            <div className="absolute bottom-4 -left-4 w-8 h-8 rounded-full bg-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
