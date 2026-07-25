import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Create particles
    const particleCount = Math.min(Math.floor((width * height) / 12000), 80);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? 'rgba(99, 102, 241, ' : 'rgba(6, 182, 212, ',
        baseAlpha: Math.random() * 0.4 + 0.2
      });
    }

    // Ambient floating 3D wireframe geometric cubes
    const shapes = [
      { x: width * 0.15, y: height * 0.25, size: 60, rotX: 0, rotY: 0, speedX: 0.005, speedY: 0.008, color: 'rgba(99, 102, 241, 0.15)' },
      { x: width * 0.82, y: height * 0.35, size: 80, rotX: 0, rotY: 0, speedX: 0.006, speedY: 0.004, color: 'rgba(168, 85, 247, 0.12)' },
      { x: width * 0.70, y: height * 0.80, size: 50, rotX: 0, rotY: 0, speedX: 0.004, speedY: 0.007, color: 'rgba(6, 182, 212, 0.15)' }
    ];

    const drawCube = (shape) => {
      shape.rotX += shape.speedX;
      shape.rotY += shape.speedY;

      const s = shape.size / 2;
      const vertices = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s],  [s, -s, s],  [s, s, s],  [-s, s, s]
      ];

      const projected = vertices.map(([vx, vy, vz]) => {
        let x1 = vx * Math.cos(shape.rotY) + vz * Math.sin(shape.rotY);
        let z1 = -vx * Math.sin(shape.rotY) + vz * Math.cos(shape.rotY);
        let y2 = vy * Math.cos(shape.rotX) - z1 * Math.sin(shape.rotX);
        let z2 = vy * Math.sin(shape.rotX) + z1 * Math.cos(shape.rotX);

        const fov = 300;
        const scale = fov / (fov + z2 + 150);
        return [shape.x + x1 * scale, shape.y + y2 * scale];
      });

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      edges.forEach(([start, end]) => {
        ctx.moveTo(projected[start][0], projected[start][1]);
        ctx.lineTo(projected[end][0], projected[end][1]);
      });
      ctx.stroke();
    };

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const cursorGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      cursorGlow.addColorStop(0, 'rgba(99, 102, 241, 0.18)');
      cursorGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.06)');
      cursorGlow.addColorStop(1, 'rgba(7, 9, 14, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      shapes.forEach(drawCube);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = p.baseAlpha;
        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius;
          p.x -= (dx / dist) * factor * 1.5;
          p.y -= (dy / dist) * factor * 1.5;
          alpha = Math.min(1, p.baseAlpha + factor * 0.6);
        }

        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 110) {
            const lineAlpha = (1 - pdist / 110) * 0.2;
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default InteractiveBackground;
