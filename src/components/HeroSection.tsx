"use client";

// import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  // Fade-in-up animation for hero content
  const heroRef = useRef(null);
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#181818] via-[#232323] to-background text-gold px-4 sm:px-6 md:px-12 w-full relative overflow-hidden">
      {/* Clean, modern blurred background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-[#181818] via-[#232323] to-background opacity-90"></div>
      </div>
      <div ref={heroRef} className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto animate-fade-in-up">
        <div className="mb-8 group transition-transform duration-300">
          <Image
            src="/profile.jpg"
            alt="Profile photo of Sunayana Yakkala"
            width={160}
            height={160}
            className="rounded-full border-4 border-gold shadow-lg mx-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-gold/60 group-hover:ring-4 group-hover:ring-gold"
            tabIndex={0}
          />
        </div>
        <h1 className="font-serif text-gold text-5xl sm:text-6xl md:text-7xl font-semibold mb-4 leading-tight drop-shadow-lg">
          Sunayana Yakkala
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-gray mb-2 font-medium">
          Full-Stack Developer &amp; AI/ML Enthusiast
        </p>
        <p className="text-base sm:text-lg text-gold italic mb-8 max-w-xl mx-auto">
          Driven to build scalable tech that solves real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="#projects"
            className="flex items-center justify-center gap-2 bg-gold hover:bg-transparent border-2 border-gold text-background hover:text-gold font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <FaFolderOpen className="text-xl" /> View Projects
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-gold hover:bg-gold text-gold hover:text-background font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <FaEnvelope className="text-xl" /> Contact Me
          </Link>
        </div>
      </div>
      {/* Scroll down indicator with animation */}
      <div className="absolute bottom-10 text-sm text-muted-gray w-full z-10">
        <div className="mx-auto flex flex-col items-center animate-bounce-slow">
          Scroll Down
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 1.8s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

