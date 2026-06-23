"use client";
import React, { useState } from "react";
import { Send, Mail, MessageCircle, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contactMethods } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: formData.name, email: formData.email, message: formData.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitMessage("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitMessage("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconMap: Record<string, React.ElementType> = {
    Mail: Mail,
    MessageCircle: MessageCircle,
    Twitter: Twitter,
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(185,0,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Section Header */}
      <div className="mb-20">
        <p className="section-label">06. Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#b900ff] to-[#ff006e]" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — Contact Methods */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-cyber text-xl font-bold text-white">Let&apos;s collaborate</h3>
            <p className="text-[#7a9bbf] leading-relaxed">
              Whether you have a project in mind, want to discuss Web3 architecture, 
              or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex items-center gap-4 no-underline"
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,240,255,0.08)",
                      border: "1px solid rgba(0,240,255,0.2)",
                    }}
                  >
                    <Icon size={18} className="text-[#00f0ff]" />
                  </div>
                  <div>
                    <p className="font-cyber text-xs font-bold text-[#00f0ff] tracking-widest uppercase">
                      {method.title}
                    </p>
                    <p className="font-mono-cyber text-sm text-[#7a9bbf] mt-0.5">{method.value}</p>
                  </div>
                  <span className="ml-auto text-[#3d5a7a] text-sm font-mono-cyber">{method.action} →</span>
                </a>
              );
            })}
          </div>

          {/* Availability */}
          <div className="cyber-glass p-5 border-[rgba(0,255,136,0.15)] mt-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="font-mono-cyber text-xs text-[#00ff88] tracking-widest">
                CURRENTLY AVAILABLE
              </span>
            </div>
            <p className="text-[#7a9bbf] text-sm">
              Open to full-time roles, contract work, and interesting open-source collaborations.
              Based in Lagos, Nigeria — working globally.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="font-mono-cyber text-xs text-[#7a9bbf] tracking-widest uppercase">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="cyber-input"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="font-mono-cyber text-xs text-[#7a9bbf] tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johndoe@example.com"
                className="cyber-input"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="font-mono-cyber text-xs text-[#7a9bbf] tracking-widest uppercase">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                className="cyber-input resize-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-cyber btn-cyber-solid w-full justify-center"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>

            {/* Feedback */}
            {submitMessage === "success" && (
              <div className="flex items-center gap-3 p-4 rounded bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)]">
                <span className="text-[#00ff88] text-xl">✓</span>
                <p className="font-mono-cyber text-sm text-[#00ff88]">
                  Message transmitted successfully!
                </p>
              </div>
            )}
            {submitMessage === "error" && (
              <div className="flex items-center gap-3 p-4 rounded bg-[rgba(255,0,110,0.08)] border border-[rgba(255,0,110,0.2)]">
                <span className="text-[#ff006e] text-xl">✗</span>
                <p className="font-mono-cyber text-sm text-[#ff006e]">
                  Transmission failed. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
