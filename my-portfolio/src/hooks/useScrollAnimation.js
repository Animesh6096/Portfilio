import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated'); // Add animation class
          } else {
            entry.target.classList.remove('animated'); // Remove when out of view (optional)
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup observer when component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
