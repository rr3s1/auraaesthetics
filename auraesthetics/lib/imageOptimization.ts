// Image optimization utilities
export const imageConfig = {
  // Responsive image sizes for different breakpoints
  sizes: {
    mobile: '(max-width: 640px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw',
    full: '100vw',
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  
  // Quality settings for different use cases
  quality: {
    thumbnail: 60,
    standard: 75,
    high: 85,
    hero: 90,
  },
  
  // Placeholder blur data URLs for different aspect ratios
  placeholders: {
    square: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    landscape: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAACAAMDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    portrait: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  },
};

// Generate responsive image props
export function getResponsiveImageProps(
  src: string,
  alt: string,
  width: number,
  height: number,
  options: {
    priority?: boolean;
    quality?: keyof typeof imageConfig.quality;
    sizes?: keyof typeof imageConfig.sizes | string;
    placeholder?: boolean;
  } = {}
) {
  const {
    priority = false,
    quality = 'standard',
    sizes = 'desktop',
    placeholder = true,
  } = options;

  const aspectRatio = width / height;
  let placeholderKey: keyof typeof imageConfig.placeholders = 'square';
  
  if (aspectRatio > 1.5) placeholderKey = 'landscape';
  else if (aspectRatio < 0.75) placeholderKey = 'portrait';

  return {
    src,
    alt,
    width,
    height,
    quality: imageConfig.quality[quality],
    priority,
    sizes: typeof sizes === 'string' && sizes in imageConfig.sizes 
      ? imageConfig.sizes[sizes as keyof typeof imageConfig.sizes]
      : sizes,
    placeholder: placeholder ? 'blur' as const : 'empty' as const,
    blurDataURL: placeholder ? imageConfig.placeholders[placeholderKey] : undefined,
  };
}

// Image optimization recommendations based on Lighthouse audit
export const imageOptimizations = {
  // Convert these images to WebP/AVIF
  toOptimize: [
    '/TreatmentRoom.png',
    '/laser.png', 
    '/client_SCase.png',
    '/client_SCase2.png',
    '/frontEnd.png',
    '/body_sculpt.png',
    '/products.png',
    '/advanced_dermal.png',
    '/hairR.png',
    '/assets/d2.png',
  ],
  
  // Recommended dimensions for responsive images
  dimensions: {
    hero: { width: 1920, height: 1080 },
    card: { width: 400, height: 300 },
    thumbnail: { width: 150, height: 150 },
    gallery: { width: 800, height: 600 },
  },
};

// Utility to check if image should be lazy loaded
export function shouldLazyLoad(priority: boolean = false, isAboveFold: boolean = false): boolean {
  return !priority && !isAboveFold;
}