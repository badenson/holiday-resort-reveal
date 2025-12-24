
import React, { useMemo } from 'react';

interface SnowflakeProps {
  count: number;
}

const Snowfall: React.FC<SnowflakeProps> = ({ count }) => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${Math.random() * 8 + 5}s`,
      delay: `${Math.random() * -10}s`,
      size: `${Math.random() * 12 + 8}px`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((s) => (
        <div
          key={s.id}
          className="absolute top-[-20px] text-white animate-fall"
          style={{
            left: s.left,
            animationDuration: s.duration,
            animationDelay: s.delay,
            fontSize: s.size,
            opacity: s.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
