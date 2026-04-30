'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Instant follow for dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Smooth follow for ring with lerp/spring
  const ringX = useSpring(useMotionValue(-100), { damping: 25, stiffness: 250, restDelta: 0.001 });
  const ringY = useSpring(useMotionValue(-100), { damping: 25, stiffness: 250, restDelta: 0.001 });

  const requestRef = useRef<number>(null);
  const mousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      // Check cursor type
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"]')) {
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

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[var(--z-cursor)]">
      {/* Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--text-primary)] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{
          opacity: isVisible && cursorType === 'default' ? 1 : 0,
          scale: cursorType === 'default' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Smooth Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[var(--text-primary)] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        initial={{ width: 36, height: 36, opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: cursorType === 'text' ? 2 : cursorType === 'pointer' ? 72 : 36,
          height: cursorType === 'text' ? 32 : cursorType === 'pointer' ? 72 : 36,
          backgroundColor: cursorType === 'pointer' ? 'var(--accent-glow)' : 'transparent',
          borderColor: cursorType === 'text' ? 'var(--accent-cyan)' : cursorType === 'pointer' ? 'transparent' : 'var(--text-primary)',
          borderRadius: cursorType === 'text' ? '2px' : '50%',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <AnimatePresence>
          {cursorType === 'view' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[11px] font-mono whitespace-nowrap text-[var(--text-primary)]"
            >
              VIEW →
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
