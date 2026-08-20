import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  smSrc?: string;
  smWebpSrc?: string;
  alt: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  smSrc,
  smWebpSrc,
  alt,
  sizes,
  className = '',
  containerClassName = '',
  priority = false,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive WebP and JPG paths automatically if not explicitly provided
  const baseSrcWithoutExt = src.replace(/\.(webp|jpg|jpeg|png)$/i, '');
  const actualJpg = src.endsWith('.jpg') ? src : `${baseSrcWithoutExt}.jpg`;
  const actualWebp = webpSrc || `${baseSrcWithoutExt}.webp`;
  const actualSmJpg = smSrc || (src.includes('-sm') ? actualJpg : `${baseSrcWithoutExt}-sm.jpg`);
  const actualSmWebp = smWebpSrc || (src.includes('-sm') ? actualWebp : `${baseSrcWithoutExt}-sm.webp`);

  const hasSm = smSrc || smWebpSrc || baseSrcWithoutExt.endsWith('-sm') || false;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <picture>
        {/* WebP Sources */}
        {!hasError && (
          <source
            type="image/webp"
            srcSet={
              hasSm
                ? `${actualSmWebp} 360w, ${actualWebp} 640w`
                : actualWebp
            }
            sizes={sizes}
          />
        )}

        {/* JPEG Sources */}
        {!hasError && hasSm && (
          <source
            type="image/jpeg"
            srcSet={`${actualSmJpg} 360w, ${actualJpg} 640w`}
            sizes={sizes}
          />
        )}

        {/* Fallback image */}
        <img
          src={hasError ? actualJpg : actualWebp}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} ${
            isLoaded ? 'opacity-100' : 'opacity-90'
          } transition-opacity duration-200`}
          {...rest}
        />
      </picture>
    </div>
  );
};
