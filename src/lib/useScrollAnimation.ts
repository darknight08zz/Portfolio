// src/lib/useScrollAnimation.ts
'use client';

import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.75;
      const elementTop = document.documentElement.scrollHeight / 2;
      if (scrollPosition > elementTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
}