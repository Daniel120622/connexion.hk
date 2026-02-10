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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Particle logic (unchanged from your original) ──
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
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));

    function createParticle(): Particle {
      return {
        x: 0,
        y: 0,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;

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

    function init() {
      particles.length = 0;
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

      {/* Particle Canvas – keeping your signature effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Hero Content – StartupBusiness-inspired: big headline, subtext, CTAs */}
      <div className="relative z-20 container mx-auto px-6 py-20 text-center max-w-6xl">
        {/* Optional accent bar or icon – can remove if not needed */}
        <div className="w-20 h-1 bg-[#3ac9d9] mx-auto mb-10 rounded-full"></div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Grow Your Business with Smart Connections
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-medium mb-12 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          Recruitment, Talent Solutions, Company Setup, and Hong Kong Immigration Services
        </motion.p>

        {/* CTAs – prominent like in startup templates */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="#services"
            className="inline-block bg-[#3ac9d9] text-blue-950 font-bold text-lg py-5 px-12 rounded-full hover:bg-[#2ab8c8] transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Services
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-block border-2 border-[#3ac9d9] text-[#3ac9d9] font-bold text-lg py-5 px-12 rounded-full hover:bg-[#3ac9d9]/10 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </div>


      </div>
    </header>
  );
}