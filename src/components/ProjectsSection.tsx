"use client";

// import { motion } from 'framer-motion';
// import { Layers, ExternalLink, Github } from 'lucide-react'; // Already removed lucide-react project-wide

// Placeholder icons
const Layers = ({ size }) => <span style={{ fontSize: size }}>[L]</span>;
const ExternalLink = ({ size }) => <span style={{ fontSize: size }}>[EL]</span>;
const Github = ({ size }) => <span style={{ fontSize: size }}>[GH]</span>;

const GITHUB_URL = "https://github.com/Sunayana225";

const projects = [
  {
    title: 'AI-Powered Travel Itinerary Generator',
    bullets: [
      'Built dynamic travel planner using Gemini API + OpenWeather API',
      'Full-stack implementation (Python/Flask + React) with optimized API calls',
    ],
  },
  {
    title: 'Smart Attendance System',
    bullets: [
      'Biometric solution using Raspberry Pi + facial recognition',
      'Integrated with SQL database for real-time tracking',
    ],
  },
  {
    title: 'Biometric Voting System',
    bullets: [
      'Secure electoral system with fingerprint authentication',
      'Implemented SHA-256 encryption for data integrity',
    ],
  },
  {
    title: 'News Headline Optimizer',
    bullets: [
      'Developed a browser extension that transforms negative news headlines into more positive versions, integrating API-based rewriting and customization features.',
      'Chrome extension for positive headline transformation.',
    ],
  },
  {
    title: 'Sentiment Analysis System',
    bullets: [
      'Created an NLP-based sentiment analysis tool to classify telecom service reviews and integrated it into a Flask-based website.',
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <a
              key={project.title}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-gold/40 hover:border-gold border border-transparent focus:outline-none focus:ring-2 focus:ring-gold no-underline"
              tabIndex={0}
              aria-label={`View ${project.title} on GitHub`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gold leading-tight">
                {project.title}
              </h3>
              <ul className="list-disc list-inside text-muted-gray text-lg sm:text-xl space-y-2 pl-4">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

