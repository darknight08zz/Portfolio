'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // Instant follow for dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Smooth follow for ring with spring physics
  const ringX = useSpring(useMotionValue(-100), { damping: 24, stiffness: 220, restDelta: 0.001 });
  const ringY = useSpring(useMotionValue(-100), { damping: 24, stiffness: 220, restDelta: 0.001 });

  const requestRef = useRef<number>(null);
  const mousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check touch device or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion) {
      setIsDisabled(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"], input, textarea')) {
        setCursorType('pointer');
      } else if (target.closest('[data-cursor="text"]')) {
        setCursorType('text');
      } else if (target.closest('[data-cursor="view"]')) {
        setCursorType('view');
      } else {
        setCursorType('default');
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const animate = () => {
      ringX.set(mousePos.current.x);
      ringY.set(mousePos.current.y);
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible, dotX, dotY, ringX, ringY]);

  if (isDisabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[var(--z-cursor)]">
      {/* Center Precision Point */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{
          opacity: isVisible && cursorType === 'default' ? 1 : 0,
          scale: cursorType === 'default' ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Smooth Following Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        initial={{ width: 32, height: 32, opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: cursorType === 'text' ? 2 : cursorType === 'pointer' ? 56 : 32,
          height: cursorType === 'text' ? 24 : cursorType === 'pointer' ? 56 : 32,
          backgroundColor: cursorType === 'pointer' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0)',
          borderColor: cursorType === 'text' ? 'rgba(255, 255, 255, 0.9)' : cursorType === 'pointer' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.25)',
          borderRadius: cursorType === 'text' ? '1px' : '50%',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 210 }}
      >
        <AnimatePresence>
          {cursorType === 'view' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[9px] font-mono tracking-widest uppercase text-[var(--accent-primary)]"
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
