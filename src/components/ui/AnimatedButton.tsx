
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  target?: string;
  animated?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  target,
  animated = true,
  icon,
  iconPosition = 'right'
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg active:translate-y-1 active:shadow-none",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:translate-y-1",
    outline: "border border-primary text-primary hover:bg-primary/10 active:translate-y-1"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  const animationClass = animated ? "btn-hover" : "";
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    animationClass,
    className
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target}
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default AnimatedButton;
