
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ProfileCardProps {
  title: string;
  username: string;
  stats: { label: string; value: string }[];
  image: string;
  link: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  title, 
  username, 
  stats, 
  image, 
  link,
  className
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "glass-card p-6 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 hover:shadow-xl animate-scale-in",
        className
      )}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-16 h-16 object-contain"
      />
      
      <div className="flex-1 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-muted-foreground">@{username}</span>
        </div>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center sm:justify-start gap-1 text-sm text-primary hover:underline">
          <span>View Profile</span>
          <ExternalLink size={14} />
        </div>
      </div>
    </a>
  );
};

export default ProfileCard;
