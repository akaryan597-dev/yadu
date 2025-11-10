import React from 'react';

interface LogoProps {
  showText?: boolean;
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ showText = true, size = 40, className }) => (
  <div className={`flex items-center space-x-2 ${className || ''}`}>
    <img
      src="https://res.cloudinary.com/dxbugufks/image/upload/v1762728750/WhatsApp_Image_2025-10-27_at_10.49.12_AM_ht7vdx.jpg"
      alt="Yadukul Dairy Logo"
      width={size}
      height={size}
      className="rounded-full object-contain"
    />
    {showText && (
      <span className="text-2xl font-bold font-serif text-brand-green dark:text-white">
        Yadukul Dairy
      </span>
    )}
  </div>
);

export default Logo;
