import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';

function ParallaxFlex({ depth, mb = 0, ml = 0, className = '', children }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate offset based on mouse position relative to center
      const offsetX = ((e.clientX - centerX) / window.innerWidth) * depth * 30;
      const offsetY = ((e.clientY - centerY) / window.innerHeight) * depth * 30;

      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [depth]);

  return (
    <Box
      ref={containerRef}
      className={className}
      sx={{
        mb: mb,
        ml: ml,
        transition: 'transform 0.1s ease-out',
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {children}
    </Box>
  );
}

export default ParallaxFlex;
