"use client";

// import { motion } from 'framer-motion';

// Placeholder icons (simple text or empty spans) for testing
const Code = ({ size }) => <span style={{ fontSize: size }}>[C]</span>;
const Zap = ({ size }) => <span style={{ fontSize: size }}>[Z]</span>;
const Palette = ({ size }) => <span style={{ fontSize: size }}>[P]</span>;
const Brain = ({ size }) => <span style={{ fontSize: size }}>[B]</span>;
const Network = ({ size }) => <span style={{ fontSize: size }}>[N]</span>;
const MessageSquare = ({ size }) => <span style={{ fontSize: size }}>[M]</span>;
const Users = ({ size }) => <span style={{ fontSize: size }}>[U]</span>;
const FileText = ({ size }) => <span style={{ fontSize: size }}>[F]</span>;
const BarChart3 = ({ size }) => <span style={{ fontSize: size }}>[BC]</span>;
const ShieldCheck = ({ size }) => <span style={{ fontSize: size }}>[S]</span>;
const Cpu = ({size}) => <span style={{fontSize: size}}>[CPU]</span>

const skillsData = [
  {
    category: 'Programming',
    skills: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    icon: '💻',
  },
  {
    category: 'Web Development',
    skills: ['React', 'Node.js', 'MongoDB', 'Flask', 'REST APIs'],
    icon: '🌐',
  },
  {
    category: 'UI/UX Design',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Wireframing', 'Prototyping'],
    icon: '🎨',
  },
  {
    category: 'AI & ML',
    skills: ['Model Development', 'AI Applications', 'NLP', 'Sentiment Analysis'],
    icon: '🧠',
  },
  {
    category: 'Hardware & Networking',
    skills: ['Computer Networks', 'Cybersecurity', 'Digital Forensics', 'Network Security'],
    icon: '🖧',
  },
];

const SkillCategory = ({ title, skills, icon }) => (
  <div // Was motion.div
    className="bg-gray-700/60 p-6 rounded-lg shadow-lg backdrop-blur-sm"
  >
    <h3 className="text-2xl font-semibold text-teal-400 mb-4 flex items-center">
      {icon} <span className="ml-2">{title}</span>
    </h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li // Was motion.li
          key={index}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          {skill.icon} <span className="ml-3">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((cat) => (
            <div key={cat.category} className="bg-card p-4 sm:p-6 rounded-lg shadow-xl backdrop-blur-sm text-center">
              <span className="text-4xl mb-2 block">{cat.icon}</span>
              <h3 className="text-xl font-semibold text-gold mb-2">{cat.category}</h3>
              <ul className="text-muted-gray text-base space-y-1">
                {cat.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

