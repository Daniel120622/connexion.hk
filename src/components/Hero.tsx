// app/components/Hero.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const services = [
    {
      title: "HK Limited Company",
      description: "We provide comprehensive services for setting up and managing HK limited companies.",
      image: {
        src: "/images/hero/hk.avif",
        alt: "Modern Hong Kong office with skyline view and business professionals",
      },
    },
    {
      title: "BVI & Oversea Company",
      description: "Establish and manage offshore companies in BVI and other jurisdictions.",
      image: {
        src: "/images/hero/bvi.jpg",
        alt: "Tropical islands and documents representing offshore BVI setup",
      },
    },
    {
      title: "Company Secretary",
      description: "Professional company secretary services to ensure compliance and smooth operations.",
      image: {
        src: "/images/hero/secret.avif",
        alt: "Professional businesswoman reviewing compliance and secretary documents",
      },
    },
    {
      title: "Accounting Services",
      description: "Comprehensive accounting services to manage your financial records effectively.",
      image: {
        src: "/images/hero/acc.jpg",
        alt: "Modern financial dashboard with accounting charts and graphs",
      },
    },
    {
      title: "Tax Consulting",
      description: "Expert tax consulting services to optimize your tax strategy and compliance.",
      image: {
        src: "/images/hero/tax.avif",
        alt: "Tax professional with calculator, documents, and strategy planning",
      },
    },
    {
      title: "Business Advisory",
      description: "Strategic business advisory services to help you achieve your goals.",
      image: {
        src: "/images/hero/adv.jpg",
        alt: "Hong Kong night skyline with city lights symbolizing business growth",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <header
      className={`
        relative flex items-center justify-center
        bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900
        text-white overflow-hidden
        min-h-[70vh] md:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)]
        pt-20 sm:pt-24 md:pt-28 lg:pt-32
        pb-12 md:pb-16
      `}
    >
      {/* Full-page subtle background images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center will-change-opacity"
            style={{
              backgroundImage: `url(${services[currentIndex].image.src})`,
              backgroundColor: "#0f172a",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Narrower container → significantly less side space */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 relative z-10 max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Text Content */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:space-y-10 max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-20 h-1 bg-[#3ac9d9] rounded-full mb-2"></div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Your Hong Kong Business Partner –{" "}
              <span className="text-[#3ac9d9]">All Services in One Place</span>
            </h1>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-5 bg-black/55 p-6 md:p-7 lg:p-8 rounded-xl backdrop-blur-md"
              >
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#3ac9d9]">
                  {services[currentIndex].title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
                  {services[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
              <motion.a
                href="/contact"
                className="inline-block bg-[#3ac9d9] text-blue-950 font-bold text-base sm:text-lg py-4 px-8 rounded-full hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Consultation
              </motion.a>

              <motion.a
                href="/services"
                className="inline-block border-2 border-[#3ac9d9] text-[#3ac9d9] font-bold text-base sm:text-lg py-4 px-8 rounded-full hover:bg-[#3ac9d9]/10 transition text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Services
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: Empty placeholder */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20
                   bg-black/50 hover:bg-black/70 text-white p-3 sm:p-4 rounded-full
                   transition-all duration-300 backdrop-blur-sm
                   opacity-70 hover:opacity-100 focus:opacity-100"
        aria-label="Previous service"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20
                   bg-black/50 hover:bg-black/70 text-white p-3 sm:p-4 rounded-full
                   transition-all duration-300 backdrop-blur-sm
                   opacity-70 hover:opacity-100 focus:opacity-100"
        aria-label="Next service"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </header>
  );
}