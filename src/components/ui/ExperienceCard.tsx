
import React from 'react';
import { cn } from '@/lib/utils';
import { CalendarIcon, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  className?: string;
  isLeft?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  location, 
  date, 
  description,
  className,
  isLeft = true
}) => {
  return (
    <div 
      className={cn(
        "relative flex items-start gap-8",
        isLeft ? "animate-fade-in-right" : "animate-fade-in-left",
        className
      )}
    >
      {/* Timeline dot */}
      <div className="absolute left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary" />
      
      {/* Timeline line */}
      <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-border h-full" />
      
      {/* Content */}
      <div className="ml-12 pb-8">
        <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-lg text-primary font-medium mb-2">{company}</p>
          
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
