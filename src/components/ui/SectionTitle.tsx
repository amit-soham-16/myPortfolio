
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtitle, 
  title, 
  description, 
  centered = false,
  className
}) => {
  return (
    <div className={cn(
      'mb-12 space-y-2', 
      centered ? 'text-center mx-auto' : '', 
      className
    )}>
      <p className="text-sm uppercase tracking-widest font-medium text-primary animate-fade-in">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in animation-delay-100">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-muted-foreground animate-fade-in animation-delay-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
