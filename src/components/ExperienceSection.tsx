"use client";

// import { motion } from 'framer-motion';
// import { Briefcase } from 'lucide-react'; // Already removed lucide-react project-wide

// Placeholder icon
const Briefcase = ({ size }) => <span style={{ fontSize: size }}>[B]</span>;

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Founder & Content Creator',
      company: 'SayBonjour – French Learning Platform',
      period: 'May 2025 – Present',
      icon: '🌍',
      bullets: [
        'Created and manage SayBonjour, an online platform dedicated to helping students learn French through curated articles, practical resources, and interactive support.',
        'Write engaging and educational blog posts that simplify complex grammar rules, expand vocabulary, and enhance cultural understanding.',
        'Use SEO strategies to optimize articles and increase discoverability among learners seeking French language support.',
        'Continuously update the platform based on learner feedback to ensure relevance, clarity, and effectiveness in French education.',
      ],
    },
    {
      title: 'French Language Tutor',
      company: 'EDVI',
      period: '2024 – Present | Part-time Remote',
      icon: '🇫🇷',
      bullets: [
        'Delivered personalized one-on-one French tutoring sessions to students across varying proficiency levels',
        'Designed engaging lesson plans focusing on vocabulary building, grammar, pronunciation, and conversational fluency',
        'Adapted teaching strategies based on individual learning styles, incorporating real-life examples and interactive exercises',
        'Assisted students in improving their writing skills through structured guidance and feedback',
        'Conducted regular assessments and provided constructive feedback to track progress',
        'Fostered a supportive learning environment to boost student confidence and motivation',
      ],
    },
    {
      title: 'Full-Stack Developer & UI/UX Designer',
      company: 'ZUMMIT INFOLABS',
      period: 'Jan 2025 – May 18, 2025 | Remote',
      icon: '💻',
      bullets: [
        'Designed and implemented user interfaces using Figma and Tailwind CSS ensuring responsive designs',
        'Collaborated with teams to translate business requirements into intuitive user flows',
        'Developed full-stack features (React + Node.js) with focus on performance optimization',
        'Followed data privacy protocols, contributing to secure and scalable solutions',
      ],
    },
    {
      title: 'UI/UX & Web Dev Intern',
      company: 'LABDOX',
      period: 'Jan 2025 – April 14, 2025 | Remote',
      icon: '🎨',
      bullets: [
        'Designed and developed company website: wireframes, prototypes using Figma',
        'Executed final build using Wix Studio, ensuring responsive design and optimal UX',
        'Built custom chatbot to streamline user engagement, reducing support queries by 25%',
        'Conducted usability testing to optimize user experience',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-card p-4 sm:p-6 rounded-lg shadow-xl backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{exp.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gold">{exp.title}</h3>
                  <p className="text-muted-gray">{exp.company} | {exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-muted-gray mb-2 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

