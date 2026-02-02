// src/components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const images = [
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/HSBC.webp", alt: "HSBC" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/BOCHK.webp", alt: "BOCHK" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/DBS.webp", alt: "DBS" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/listing_image_url_2021-04-12_DSB_Logo_Bilingual_Horizontal_Small-Scale_Screen_RGB.webp", alt: "DSB" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/Yuzhou.webp", alt: "Yuzhou" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/wave.webp", alt: "Wave" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/Center.webp", alt: "Center" },
  { src: "https://incorp-hk.com/wp-content/uploads/2025/03/SERA-support-logos-04-removebg-preview.webp", alt: "SERA Support" },
];

export default function Testimonials() {
  const [lang, setLang] = useState<"en" | "cn" | "zh">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      const defaultLang = browserLang.includes("zh") ? "cn" : "en";
      localStorage.setItem("lang", defaultLang);
      setLang(defaultLang);
    }
  }, []);

  // 直接內嵌多語言標題
  const title = {
    en: "Our Esteemed Clients",
    zh: "我們的尊貴客戶",
    cn: "我们的尊贵客户",
  }[lang] || "Our Esteemed Clients";

  return (
    <div className="testimonials-carousel px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-12 bg-white">
      <div className="elementor-widget-container">
        <h2 className="elementor-heading-title text-center text-4xl md:text-5xl lg:text-4xl font-bold">
          {title}
        </h2>
        <p></p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        className="!pb-12 relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <figure className="swiper-slide-inner flex items-center justify-center h-32 md:h-40 lg:h-48 p-3 border border-gray-200 rounded-lg bg-white">
              <img
                className="swiper-slide-image max-h-full w-auto object-contain"
                src={image.src}
                alt={image.alt}
                draggable={false}
                loading="lazy"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}