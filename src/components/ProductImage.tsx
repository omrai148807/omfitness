import React, { useState } from 'react';
import { Dumbbell, Package, Activity } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt, className = '', category = '' }) => {
  const [error, setError] = useState(false);

  // MANDATORY IMAGE VALIDATION LOGIC
  const validateImageURL = (url: string, productCategory: string, productName: string) => {
    if (!url) return false;
    
    // Accept standard image CDNs immediately to prevent false rejections
    if (url.includes('unsplash.com')) return true;
    if (url.includes('pexels.com')) return true;
    
    if (!url.startsWith('http')) return false;
    
    const urlLower = url.toLowerCase();
    
    // Refuse clearly irrelevant images if they come from random text-based searches
    const irrelevantKeywords = ['nature', 'landscape', 'abstract', 'sky', 'flower', 'cat', 'dog'];
    for (const keyword of irrelevantKeywords) {
      if (urlLower.includes(keyword)) return false;
    }
    
    return true;
  };

  const isValidImage = validateImageURL(src, category, alt);

  if (!src || error || !isValidImage) {
    const isWeight = category.toLowerCase().includes('dumbbell') || category.toLowerCase().includes('barbell') || category.toLowerCase().includes('plate') || category.toLowerCase().includes('kettlebell');
    const isCardio = category.toLowerCase().includes('treadmill') || category.toLowerCase().includes('cardio');

    return (
      <div className={`flex flex-col items-center justify-center bg-[#1a1a1a] text-[#a0a0a0] ${className}`}>
        {isWeight ? (
          <Dumbbell className="h-8 w-8 mb-2 opacity-50 text-[#D4AF37]" strokeWidth={1.5} />
        ) : isCardio ? (
          <Activity className="h-8 w-8 mb-2 opacity-50 text-[#D4AF37]" strokeWidth={1.5} />
        ) : (
          <Package className="h-8 w-8 mb-2 opacity-50 text-[#D4AF37]" strokeWidth={1.5} />
        )}
        <span className="text-[10px] font-bold tracking-wider uppercase text-center px-2">Image Not Available</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={(e) => {
        // Prevent infinite loop if fallback image fails too
        if (error) return;
        console.warn('Image failed to load:', src);
        setError(true);
      }}
      referrerPolicy="no-referrer"
    />
  );
};
