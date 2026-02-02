// app/components/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Types ────────────────────────────────────────────────
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      update: () => void;
      draw: () => void;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20)); // scale with screen size

    // Particle factory (no direct canvas access)
    function createParticle(): Particle {
      return {
        x: 0,  // Initial placeholder
        y: 0,  // Initial placeholder
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce off edges
          if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;

          // Mouse repulsion
          const mouse = mouseRef.current;
          if (mouse?.x && mouse?.y) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
              const force = (120 - distance) / 120;
              this.x += dx * force * 0.1;
              this.y += dy * force * 0.1;
            }
          }
        },

        draw() {
          if (!ctx) return;
          ctx.fillStyle = "#3ac9d9";
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        },
      };
    }

    // Initialize particles with valid canvas dimensions
    function init() {
      particles.length = 0; // clear if re-init
      for (let i = 0; i < particleCount; i++) {
        const p = createParticle();
        p.x = Math.random() * canvas!.width;
        p.y = Math.random() * canvas!.height;
        particles.push(p);
      }
    }

    function connectParticles() {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.strokeStyle = `rgba(58, 201, 217, ${1 - distance / 140})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start everything
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 py-16 text-center max-w-5xl">
        <div className="w-24 h-1 bg-[#3ac9d9] mx-auto mb-8 rounded-full"></div>

        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-[#3ac9d9]/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 17h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2zM7 21l-4-4h4v-14h14v14h-4l-4 4z" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Slogan goes here
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mb-10">
          <span className="text-[#3ac9d9] font-bold">Sub-title </span>
          <motion.span
            className="inline-block text-white font-bold"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            with animated emphasis
          </motion.span>
        </h2>

      </div>

    </header>
  );
}