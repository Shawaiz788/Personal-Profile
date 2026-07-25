import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = '', style = {}, maxTilt = 12, scale = 1.02 }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-1 to 1 scale)
    const rotateX = ((mouseY / height) - 0.5) * -maxTilt * 2;
    const rotateY = ((mouseX / width) - 0.5) * maxTilt * 2;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`);

    // Glare effect calculation
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlareStyle({
      opacity: 0.15,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)`
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
      style={{
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        position: 'relative',
        ...style
      }}
    >
      {children}
      <div
        className="tilt-glare"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          transition: 'opacity 0.25s ease',
          zIndex: 10,
          ...glareStyle
        }}
      />
    </div>
  );
};

export default TiltCard;
