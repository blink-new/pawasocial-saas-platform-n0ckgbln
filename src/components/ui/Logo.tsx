import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const LogoIcon = () => (
    <div className="relative flex items-center justify-center">
      {/* Main icon - interconnected nodes representing social intelligence */}
      <svg 
        className={`${sizeClasses[size]} w-auto`}
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle 
          cx="20" 
          cy="20" 
          r="18" 
          fill="url(#gradient)" 
          className="drop-shadow-sm"
        />
        
        {/* Network nodes pattern */}
        <g className="opacity-90">
          {/* Central hub */}
          <circle cx="20" cy="20" r="3" fill="white" />
          
          {/* Surrounding nodes */}
          <circle cx="12" cy="12" r="2" fill="white" opacity="0.8" />
          <circle cx="28" cy="12" r="2" fill="white" opacity="0.8" />
          <circle cx="12" cy="28" r="2" fill="white" opacity="0.8" />
          <circle cx="28" cy="28" r="2" fill="white" opacity="0.8" />
          
          {/* Connection lines */}
          <line x1="20" y1="20" x2="12" y2="12" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <line x1="20" y1="20" x2="28" y2="12" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <line x1="20" y1="20" x2="12" y2="28" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <line x1="20" y1="20" x2="28" y2="28" stroke="white" strokeWidth="1.5" opacity="0.6" />
          
          {/* Data flow indicators */}
          <circle cx="20" cy="8" r="1.5" fill="#F59E0B" />
          <circle cx="32" cy="20" r="1.5" fill="#F59E0B" />
          <circle cx="20" cy="32" r="1.5" fill="#F59E0B" />
          <circle cx="8" cy="20" r="1.5" fill="#F59E0B" />
        </g>
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const LogoText = () => (
    <div className="flex items-center">
      <span className={`font-bold ${className?.includes('text-white') ? 'text-white' : 'text-slate-900'} ${textSizes[size]}`}>
        Pawa
      </span>
      <span className={`font-medium ${className?.includes('text-white') ? 'text-blue-300' : 'text-blue-600'} ${textSizes[size]}`}>
        Social
      </span>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <LogoText />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
};

export default Logo;