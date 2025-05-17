"use client";

import { useRef, useState } from "react";

// Placeholder icons
const Mail = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[M]</span>;
const Phone = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[P]</span>;
const MapPin = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[MP]</span>;
const Linkedin = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[LI]</span>;
const Github = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[GH]</span>;

const contactDetails = [
  {
    icon: <Mail size={24} />,
    text: "yakkalasunayana1605@gmail.com",
    href: "mailto:yakkalasunayana1605@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    text: "+91 8331944488",
    href: "tel:+918331944488",
  },
  {
    icon: <MapPin size={24} />,
    text: "Hyderabad, 500013",
    href: "#",
  },
  {
    icon: <Linkedin size={24} />,
    text: "linkedin.com/in/sunayana-yakkala",
    href: "https://www.linkedin.com/in/sunayana-yakkala-99145a280/",
    target: "_blank",
  },
  {
    icon: <Github size={24} />,
    text: "github.com/Sunayana225",
    href: "https://github.com/Sunayana225",
    target: "_blank",
  },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-2xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-8">
          Contact Me
        </h2>
        <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm">
          {submitted ? (
            <div className="text-center text-gold font-semibold py-8 text-lg">Thank you! Your message has been sent.</div>
          ) : (
            <form
              action="https://formspree.io/f/xldbawlq"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gold">Name</label>
                <input name="name" type="text" id="name" required className="mt-1 block w-full bg-background border border-gold rounded-md shadow-sm py-2 px-3 text-gold focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gold">Email</label>
                <input name="email" type="email" id="email" required className="mt-1 block w-full bg-background border border-gold rounded-md shadow-sm py-2 px-3 text-gold focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gold">Message</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full bg-background border border-gold rounded-md shadow-sm py-2 px-3 text-gold focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
              </div>
              <button type="submit" className="w-full bg-gold hover:bg-transparent border-2 border-gold text-background hover:text-gold font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

