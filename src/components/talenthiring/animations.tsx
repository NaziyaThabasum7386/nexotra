import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll animation
export const useScrollAnimation = (threshold = 0.1, delay = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, delay]);

  return { elementRef, isVisible };
};

// Animation classes for common effects
export const fadeIn = 'opacity-0 transition-opacity duration-1000';
export const fadeInVisible = 'opacity-100';

export const slideUp = 'opacity-0 translate-y-10 transition-all duration-700';
export const slideUpVisible = 'opacity-100 translate-y-0';

export const scaleIn = 'opacity-0 scale-95 transition-all duration-700';
export const scaleInVisible = 'opacity-100 scale-100';