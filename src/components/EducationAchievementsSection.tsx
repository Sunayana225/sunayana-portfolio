"use client";

// import { motion } from "framer-motion";

// Placeholder icons
const GraduationCap = ({ size }) => <span style={{ fontSize: size }}>[GC]</span>;
const Award = ({ size }) => <span style={{ fontSize: size }}>[A]</span>;

const educationDetails = {
  institution: "Vellore Institute of Technology",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "Expected Graduation: 2026",
};

const achievementsDetails = [
  { name: "3rd Place - Hackathon (Aakashavani 24)" },
  { name: "Smart India Hackathon - Advanced to next level" },
  { name: "Top 5 - Hackathon X conducted by NCSRC" },
  { name: "Runner-up - Polyversity competition with Dynamic Space in Polyverse" },
];

const EducationAchievementsSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Vellore Institute of Technology',
      period: 'Expected Graduation: 2026',
      icon: '🎓',
    },
  ];

  const achievements = [
    { title: '3rd Place - Hackathon (Aakashavani 24)' },
    { title: 'Top 5 - Hackathon X conducted by NCSRC' },
    { title: 'Runner-up - Polyversity competition with Dynamic Space in Polyverse' },
  ];

  const languages = [
    'Fluent: English, Hindi, Telugu',
    'Basic: French',
  ];

  const links = [
    { label: 'GitHub', value: 'Sunayana225', url: 'https://github.com/Sunayana225' },
    { label: 'LinkedIn', value: 'Sunayana Yakkala', url: 'https://www.linkedin.com/in/sunayanayakkala/' },
  ];

  return (
    <section id="education-achievements" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-8">
          Education & Achievements
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className="bg-card p-4 sm:p-6 rounded-lg shadow-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{edu.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gold">{edu.degree}</h3>
                  <p className="text-muted-gray">{edu.institution}</p>
                  <p className="text-muted-gray">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Achievements & Languages side by side on md+, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center">
              <h3 className="text-2xl font-bold text-center mb-6 text-gold">Achievements</h3>
              <ul className="list-disc list-inside text-muted-gray text-base space-y-2 max-w-xs">
                {achievements.map((a, i) => (
                  <li key={i} className="py-1 pl-2">{a.title}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center">
              <h3 className="text-2xl font-bold text-center mb-6 text-gold">Languages</h3>
              <ul className="list-disc list-inside text-muted-gray text-base space-y-2 max-w-xs">
                {languages.map((lang, i) => (
                  <li key={i} className="py-1 pl-2">{lang}</li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-gold">Links</h3>
          <ul className="flex flex-col sm:flex-row justify-center gap-4 text-gold">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                  {link.label}: <span className="font-semibold">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationAchievementsSection;

