"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
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

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <p className="section-label">
          Contact <span className="jp">連絡</span>
        </p>
        <h2 className="section-title">Get in Touch</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — Contact Methods */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="font-mincho text-xl font-semibold text-ink">
              Let&apos;s work together
            </h3>
            <p className="text-ink-soft leading-relaxed font-light max-w-sm">
              Whether you have a backend to build, a system to scale, or just want
              to say hi — my inbox is always open.
            </p>
          </div>

          <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 py-5 group no-underline"
                >
                  <Icon size={18} className="text-ink-muted group-hover:text-accent transition-colors flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-sans-jp text-[0.65rem] font-medium text-ink-muted tracking-[0.2em] uppercase">
                      {method.title}
                    </p>
                    <p className="font-sans-jp text-sm text-ink mt-0.5">{method.value}</p>
                  </div>
                  <span className="text-ink-faint group-hover:text-accent transition-colors text-sm">
                    →
                  </span>
                </a>
              );
            })}
          </div>

          {/* Availability */}
          <div className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-ink-soft text-sm leading-relaxed font-light">
              <span className="font-sans-jp text-[0.65rem] font-medium text-ink tracking-[0.2em] uppercase">
                Currently Available
              </span>
              <br />
              Open to full-time roles, contract work, and open-source collaboration.
              Based in Lagos, Nigeria — working globally.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="field-label" htmlFor="contact-name">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="field"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="field-label" htmlFor="contact-email">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johndoe@example.com"
                className="field"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="field-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                className="field resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-solid w-full justify-center"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border border-paper/40 border-t-paper rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>

            {submitMessage === "success" && (
              <p className="font-sans-jp text-sm text-accent">
                ✓ Message sent successfully.
              </p>
            )}
            {submitMessage === "error" && (
              <p className="font-sans-jp text-sm text-accent">
                ✗ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
