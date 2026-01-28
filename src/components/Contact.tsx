"use client";

import { useState, FormEvent } from "react";
//import { sendEmailAction } from "@/app/actions/sendEmail"; // ← your Server Action path

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors(null);

    const formData = new FormData(e.currentTarget);

    const response = await sendEmailAction(formData);

    if (response.success) {
      setStatus("success");
      setMessage("Thank you! Your message has been sent.");
      e.currentTarget.reset();
    } else {
      setStatus("error");
      if (typeof response.error === "object") {
        setErrors(response.error as any);
        setMessage("Please fix the errors below.");
      } else {
        setMessage(response.error as string || "Something went wrong.");
      }
    }
  };

  return (
    <section className="contact bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch min-h-[500px] lg:min-h-[600px] rounded-xl overflow-hidden shadow-2xl">
          
          {/* LEFT: Background Image + Overlay Text */}
          <div 
            className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-center lg:text-left p-10 lg:p-16"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000')`,
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content on top */}
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                We're here to help with your company formation, banking, and corporate needs in Hong Kong. Reach out today — our team is ready to assist!
              </p>
              <p className="mt-8 text-gray-300 font-medium">
                sales@connexions.hk
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left text-gray-800">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              Have questions? Fill out the form below and we'll get back to you promptly.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
                {errors?.name && <p className="text-red-600 text-sm mt-1">{errors.name[0]}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
                {errors?.email && <p className="text-red-600 text-sm mt-1">{errors.email[0]}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us how we can help..."
                />
                {errors?.message && <p className="text-red-600 text-sm mt-1">{errors.message[0]}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full text-white py-3 px-6 rounded-md font-medium transition duration-300 ${
                  status === "loading"
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center mt-4 font-medium">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center mt-4 font-medium">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}