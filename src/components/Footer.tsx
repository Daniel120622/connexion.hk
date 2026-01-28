// src/components/Footer.tsx
import React from 'react';
import { MessageCircle, Send, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Top Wave Divider */}
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-full h-16 md:h-24 text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
          fill="currentColor"
        >
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Description */}
          <div>
            <img
              src="/images/connexions-hk.png" // ← Replace with your actual Connexions logo path/URL
              alt="Connexions HK Logo"
              className="h-32 w-auto mb-6 object-contain-center"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Connexions HK is a professional business and immigration services company, specializing in providing clients with one-stop solutions. 
            </p>
            <p className="text-sm text-gray-500">
              Connexions HK trust or corporate service provider license number: <span className="font-medium"> ###### </span>
            </p>
          </div>

          {/* Column 2: Quick Links - Left */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/local-immigration" className="hover:text-[#3ac9d9] transition">
                  Local Immigration
                </a>
              </li>
              <li>
                <a href="/oversea-immigration" className="hover:text-[#3ac9d9] transition">
                  Oversea Immigration
                </a>
              </li>

              <li>
                <a href="services/company-secretary" className="hover:text-[#3ac9d9] transition">
                  Company Secretary
                </a>
              </li>

              <li>
                <a href="/overseas-bvi-immigration" className="hover:text-[#3ac9d9] transition">
                  HK Limited Company
                </a>
              </li>

              <li>
                <a href="/overseas-bvi-immigration" className="hover:text-[#3ac9d9] transition">
                  BVI & Oversea Immigration
                </a>
              </li>

              <li>
                <a href="/wealth-inheritance" className="hover:text-[#3ac9d9] transition">
                  Wealth Inheritance Planning
                </a>
              </li>


            </ul>
          </div>

          {/* Column 3: Quick Links - Right */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Extra Service</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://incorp-hk.com/hk-shelf-comp/" className="hover:text-[#3ac9d9] transition">
                  Buying Hong Kong Company
                </a>
              </li>
              <li>
                <a href="https://incorp-hk.com/accounting-auditing/" className="hover:text-[#3ac9d9] transition">
                  Accounding and Auditing
                </a>
              </li>
              <li>
                <a href="https://incorp-hk.com/terms-and-conditions/" className="hover:text-[#3ac9d9] transition">
                  Conditional Terms
                </a>
              </li>
              <li>
                <a href="https://incorp-hk.com/about-us/" className="hover:text-[#3ac9d9] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://incorp-hk.com/contact-us/" className="hover:text-[#3ac9d9] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact US</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Send className="w-5 h-5 text-[#3ac9d9] mt-1 flex-shrink-0" />
                <div>
                  <p>Room 902A, 9/F, Capital Centre, 151 Gloucester Road, Wan Chai, Hong Kong</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3ac9d9]" />
                <span>+852 5540 3916</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#3ac9d9]" />
                <span>sales@connecxions.hk</span>
              </li>
              <li>  </li>

            </ul>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <a
                href="https://wa.me/85255403916"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3ac9d9] hover:text-white transition"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/connexionshk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3ac9d9] hover:text-white transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/connecxions.hk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3ac9d9] hover:text-white transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Connecxions.HK Copyright. All rights reserved.
        </div>
      </div>
    </footer>
  );
}