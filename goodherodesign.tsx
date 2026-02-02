"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper to update size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    // ── Types ────────────────────────────────────────────────
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      update: () => void;
      draw: () => void;
    }

    const particles: Particle[] = [];
    const numberOfParticles = 80;

    // Particle factory (no direct canvas access in constructor)
    function createParticle(): Particle {
      return {
        x: 0,  // Initial placeholder
        y: 0,  // Initial placeholder
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: "#3ac9d9",

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas!.width || this.x < 0) this.speedX *= -1;
          if (this.y > canvas!.height || this.y < 0) this.speedY *= -1;
        },

        draw() {
          if (!ctx) return;  // Safe guard
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        },
      };
    }

    // Initialize particles with valid canvas dimensions
    function init() {
      particles.length = 0; // clear if re-init
      for (let i = 0; i < numberOfParticles; i++) {
        const p = createParticle();
        p.x = Math.random() * canvas!.width;
        p.y = Math.random() * canvas!.height;
        particles.push(p);
      }
    }

    function connect() {
      if (!ctx) return;  // Safe guard
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(58, 201, 217, ${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();
      requestAnimationFrame(animate);
    }

    // Start everything
    init();
    animate();

    // Resize handler
    const onResize = () => {
      resize();
      // Optional: re-init particles if you want them redistributed
      init();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}