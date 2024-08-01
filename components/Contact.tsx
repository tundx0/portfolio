"use client";
import React, { useState } from "react";
import { Send, Mail, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contactMethods } from "@/lib/utils";

export interface ContactMethodProps {
  icon: React.ElementType;
  title: string;
  value: string;
  action: string;
  url: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  icon: Icon,
  title,
  value,
  action,
  url,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-lg border-t-2 border-slate-100 flex flex-col items-center">
    <Icon className="mb-2" />
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm mb-2">{value}</p>
    <a
      href={url}
      className="text-blue-500 text-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      {action} →
    </a>
  </div>
);

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result.text);
      setSubmitMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-24 md:pt-44 lg:mx-6 mx-4 gap-8 items-center flex flex-col"
    >
      <h1 className="text-5xl text-center font-extrabold">Get in touch</h1>
      <p className="text-gray-600 text-center">Contact Me</p>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl text-center font-bold mb-4">Talk to me</h2>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <ContactMethod
                key={index}
                icon={method.icon}
                title={method.title}
                value={method.value}
                action={method.action}
                url={method.url}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative h-16 mb-2">
              <label
                htmlFor="name"
                className="absolute top-[-0.75rem] left-[1.25rem] z-10 p-1 bg-white text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="absolute top-0 left-0 w-full h-full rounded-xl z-[1] p-6 border-2 border-solid border-black"
                required
              />
            </div>
            <div className="relative h-16 mb-2">
              <label
                htmlFor="email"
                className="absolute top-[-0.75rem] left-[1.25rem] z-10 p-1 bg-white text-sm font-medium text-gray-700"
              >
                Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johndoe@gmail.com"
                className="absolute top-0 left-0 w-full h-full rounded-xl z-[1] p-6 border-2 border-solid border-black"
                required
              />
            </div>
            <div className="relative h-44 mb-2">
              <label
                htmlFor="project"
                className="absolute top-[-0.75rem] left-[1.25rem] z-10 p-1 bg-white text-sm font-medium text-gray-700"
              >
                Project
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write message in here..."
                className="absolute top-0 left-0 w-full h-full rounded-xl z-[1] p-6 border-2 border-solid border-black resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              <Send className="ml-2 h-4 w-4" />
            </button>
            {submitMessage && (
              <p
                className={`mt-2 text-sm ${
                  submitMessage.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
