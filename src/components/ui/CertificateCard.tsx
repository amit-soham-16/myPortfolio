
import React from 'react';
import { cn } from '@/lib/utils';
import { Award, ExternalLink, Download } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  viewLink?: string;
  downloadLink?: string;
  className?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ 
  title, 
  issuer, 
  date, 
  viewLink, 
  downloadLink,
  className
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-xl animate-scale-in",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Award size={24} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight mb-1">{title}</h3>
          <p className="text-muted-foreground mb-1">{issuer}</p>
          <p className="text-sm text-muted-foreground mb-4">{date}</p>
          
          <div className="flex gap-3">
            {viewLink && (
              <a 
                href={viewLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <ExternalLink size={16} />
                <span>View</span>
              </a>
            )}
            
            {downloadLink && (
              <a 
                href={downloadLink} 
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <Download size={16} />
                <span>Download</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
