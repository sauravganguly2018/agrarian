import React, { useState } from 'react';

const ProductImage = ({ src, alt, className, containerClassName }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName || 'w-full h-full flex items-center justify-center'}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
          <div className="w-full h-full animate-shimmer" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </div>
  );
};

export default ProductImage;
