// app/components/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

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
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse repulsion
        if (mouse.current?.x && mouse.current?.y) {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            const force = (120 - distance) / 120;
            this.x += dx * force * 0.1;
            this.y += dy * force * 0.1;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "#3ac9d9";
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20)); // scale with screen size

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx!.strokeStyle = `rgba(58, 201, 217, ${1 - distance / 140})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/connecxions.hk"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.42.89 4.64 2.36 6.32L2 22l3.68-2.36C7.36 21.11 9.58 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.24.68-.74 1.22-1.4 1.4-.66.18-1.4.12-2.06-.18-1.66-.78-2.78-2.62-3.06-4.34-.28-1.72.12-3.44 1.02-4.68.9-1.24 2.26-1.84 3.7-1.84 1.44 0 2.8.6 3.7 1.84.9 1.24 1.3 2.96 1.02 4.68-.28 1.72-1.4 3.56-3.06 4.34z" />
        </svg>
      </a>

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