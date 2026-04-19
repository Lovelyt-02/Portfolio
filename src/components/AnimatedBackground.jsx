import React, { useEffect, useRef } from "react";

// Subtle animated canvas with drifting neon nodes & connecting lines.
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(70, Math.floor(window.innerWidth / 22));
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.55)";
        ctx.fill();
      });
      // lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - d / 140)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none z-0" />
      {/* Radial glow top */}
      <div className="fixed inset-0 radial-glow pointer-events-none z-0" />
      {/* Bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-[40vh] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 50% 100%, rgba(8, 145, 178, 0.12), transparent 60%)" }} />
      {/* Animated canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
};

export default AnimatedBackground;
