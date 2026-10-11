'use client';

import React from 'react';
import TargetCursor from './TargetCursor';

const CustomCursor: React.FC = () => {
  return (
    <TargetCursor
      targetSelector="a, button, [role='button'], input, textarea, select, .cursor-target"
      spinDuration={2}
      hoverDuration={0.2}
      size={36}
      cornerSize={12}
      thickness={3}
      padding={6}
      dotSize={4}
      cursorColor="#ffffff"
      cursorColorOnTarget="#ffffff"
      blendMode="difference"
      parallaxOn
      matchRadius
      showLabel
      clickEffect
      hideDefaultCursor
    />
  );
};

export default CustomCursor;
