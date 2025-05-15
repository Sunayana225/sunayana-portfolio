"use client";

import { useEffect, useRef, useState } from "react";

const aboutIntro = "Hi, I'm Sunayana Yakkala — a passionate Full-Stack Developer and AI/ML Enthusiast with a keen eye for building sleek user interfaces and smart, scalable backend systems. I love blending creativity with logic to bring digital ideas to life — whether it's designing intuitive web apps, experimenting with machine learning models, or crafting seamless user experiences.";
const aboutParagraphs = [
  "I'm currently pursuing my B.Tech in Computer Science and Engineering from Vellore Institute of Technology (expected graduation 2026).",
  "I thrive on building intuitive and performant web applications, leveraging my skills in technologies like React, Node.js, and Figma for UI/UX design. My experience at ZUMMIT INFOLABS and LABDOX has allowed me to contribute to real-world projects, from designing user interfaces to developing full-stack features with a focus on data privacy and scalability.",
  "Beyond web development, I am deeply fascinated by the potential of Artificial Intelligence and Machine Learning. I enjoy exploring model development, NLP, and creating AI-powered applications. I'm always eager to learn new technologies and take on challenging projects that allow me to blend my development skills with my interest in AI/ML to create innovative solutions."
];

function useTypewriter(text, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    setDisplayed("");
    i.current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i.current]);
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

const AboutSection = () => {
  const typedIntro = useTypewriter(aboutIntro, 35);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    if (typedIntro.length === aboutIntro.length) {
      const timeout = setTimeout(() => setShowRest(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [typedIntro]);

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
          {showRest && (
            <div className="space-y-4 animate-fade-in">
              {aboutParagraphs.map((p, idx) => (
                <p key={idx} className="text-muted-gray">{p}</p>
              ))}
            </div>
          )}
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

