
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string; 
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveLink, 
  githubLink,
  className
}) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden transition-all duration-500 hover:shadow-xl group animate-scale-in",
        className
      )}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-all duration-700 transform group-hover:scale-105" 
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto pt-2">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          )}
          
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
