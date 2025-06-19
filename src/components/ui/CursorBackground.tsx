
import { useEffect, useState } from 'react';

export const CursorBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary gradient that follows cursor */}
      <div
        className="absolute w-96 h-96 opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Secondary gradient with delayed response */}
      <div
        className="absolute w-80 h-80 opacity-15 blur-2xl transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      />

      {/* Ambient background gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};
