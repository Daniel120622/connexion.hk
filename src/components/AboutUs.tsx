// src/components/AboutUs.tsx 
"use client";

import React, { useState, useEffect } from "react";

export default function AboutUs() {
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

  const content = {
    en: {
      title: "About Connexions HK",
      description:
        "Connexions is an experienced professional services group. We have served hundreds of domestic and foreign customers over the decades. Connexions treasures the entrusted relationship with clients and is dedicated to service quality. Coupled with mutual trust and understanding as well as reputation and recommendation from customers, Connexions is your stable life partner.",
    },
    zh: {
      title: "關於 Connexions HK",
      description:
        "Connexions 是一家擁有豐富經驗的專業服務集團，數十年來已服務數百位本地及海外客戶。我們珍視與客戶的信賴關係，並致力於提供高品質服務。憑藉相互信任、理解以及客戶的口碑推薦，Connexions 是您穩定的長期生活夥伴。",
    },
    cn: {
      title: "关于 Connexions HK",
      description:
        "Connexions 是一家拥有丰富经验的专业服务集团，数十年来已服务数百位本地及海外客户。我们珍视与客户的信赖关系，并致力于提供高质量服务。凭借相互信任、理解以及客户的口碑推荐，Connexions 是您稳定的长期生活伙伴。",
    },
  };

  const current = content[lang] || content.en;

  return (
    <section className="about-us bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{current.title}</h2>
        <p className="text-lg mb-4 leading-relaxed">
          {current.description}
        </p>
      </div>
    </section>
  );
}