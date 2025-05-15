"use client";

import { useEffect, useRef, useState } from "react";

const aboutIntro = "Hi, I'm Sunayana Yakkala — a Full-Stack Developer and AI/ML enthusiast who loves combining creativity and logic to build sleek interfaces and smart, scalable systems. I'm also multilingual, fluent in French, Hindi, Telugu, and English.";

function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    setDisplayed("");
    i.current = 0;

    const interval = setInterval(() => {
      if (i.current < text.length) {
        setDisplayed(text.slice(0, i.current + 1));
        i.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

const AboutSection = () => {
  const typedIntro = useTypewriter(aboutIntro, 35);

  return (
    <section id="about" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-3xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-8">
          About Me
        </h2>
        <div className="text-lg md:text-xl leading-relaxed">
          <span className="font-mono text-gold text-xl md:text-2xl block mb-4 min-h-[2.5em]">
            {typedIntro}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

