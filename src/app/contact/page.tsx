// app/contact/page.tsx
import React from 'react';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#3ac9d9] text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-white/90">We'd love to hear from you</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Contact Info + Form + Map Grid – SWAPPED ORDER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Left Column: Google Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full min-h-[500px] lg:min-h-0 order-2 lg:order-1">
            <div className="bg-gray-800 text-white px-5 py-3 font-medium">
              Our Location
            </div>
            <div className="w-full h-[450px] lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.693149531149!2d114.182641!3d22.279346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040011f21a9f1d%3A0x9e8e8e8e8e8e8e8e!2sCapital+Centre!5e0!3m2!1sen!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Connexions HK - Capital Centre, Wan Chai"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Info + Form */}
          <div className="space-y-8 order-1 lg:order-2">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions or need assistance? Reach out to us using the contact information below or send us a message.
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-5 text-gray-800">Contact Information</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:sales@connexionshk.com" className="hover:text-[#3ac9d9]">
                        sales@connexionshk.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+85221112425" className="hover:text-[#3ac9d9]">
                        +852 2111 2425
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Printer className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Fax:</strong>{' '}
                      <span>+852 3585 5887</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Address:</strong>
                      <div className="mt-0.5 leading-relaxed">
                        Room 902A, 9/F, Capital Centre<br />
                        151 Gloucester Road, Wan Chai<br />
                        Hong Kong
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Form */}
            <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">Send a Message</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ac9d9] focus:border-[#3ac9d9] transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ac9d9] focus:border-[#3ac9d9] transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ac9d9] focus:border-[#3ac9d9] transition resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#3ac9d9] text-white font-semibold py-3.5 rounded-lg hover:bg-[#32b0c0] transition shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}