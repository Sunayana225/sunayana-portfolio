"use client";

// import { motion } from "framer-motion";

// Placeholder icons
const GraduationCap = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[GC]</span>;
const Award = ({ size }: { size: number }) => <span style={{ fontSize: size }}>[A]</span>;

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
    { label: 'LinkedIn', value: 'Sunayana Yakkala', url: 'https://www.linkedin.com/in/sunayana-yakkala-99145a280/' },
  ];

  const volunteering = [
    {
      title: 'Canva Workshop Facilitator',
      company: 'VIT-AP Newspaper Club',
      period: 'Apr 2025 (1 month)',
      icon: '🎨',
      bullets: [
        'Successfully conducted a workshop teaching the fundamentals and advanced features of Canva.',
        'Guided participants through design techniques and real-time creation exercises.',
      ],
    },
    {
      title: 'Student Co-ordinator – National Level Hackathon',
      company: 'VIT-AP University (SENSE Department)',
      period: 'Mar 2023 (1 month)',
      icon: '💻',
      bullets: [
        'Coordinated logistics and communications for a large-scale national-level hackathon.',
        'Acted as a liaison between faculty, participants, and organizing committees.',
      ],
    },
    {
      title: 'Student Co-ordinator – Ideathon',
      company: 'VIT-AP University (Sponsored by Olatus)',
      period: '2023',
      icon: '💡',
      bullets: [
        'Led organizing efforts for a university-level ideathon, managing registrations, queries, and event logistics.',
        'Facilitated smooth coordination between sponsors (Olatus) and university teams.',
      ],
    },
  ];

  const extracurriculars = [
    {
      title: 'Secretary',
      company: 'VIT-AP Newspaper Club',
      period: 'Oct 2024 – Present (8 months)',
      icon: '📰',
      bullets: [
        "Leading the club's operations, managing editorial responsibilities, and ensuring timely content delivery.",
        'Coordinating between teams and organizing events such as the Canva Workshop.',
      ],
    },
    {
      title: 'Content Creator',
      company: 'VIT-AP Newspaper Club',
      period: 'Nov 2023 – Oct 2024 (1 year)',
      icon: '✍️',
      bullets: [
        "Created engaging and creative content for the club's publications and initiatives.",
        'Contributed to article writing, editing, and visual content development.',
      ],
    },
    {
      title: 'Community Manager (Admin Department)',
      company: 'Microsoft Student Chapter, VIT-AP',
      period: 'Mar 2024 – Apr 2025 (1 year 2 months)',
      icon: '👥',
      bullets: [
        'Oversaw internal operations and coordinated community engagement efforts.',
        'Managed documentation, event planning, and team collaboration.',
      ],
    },
    {
      title: 'Technical Department Member',
      company: 'Microsoft Student Chapter, VIT-AP',
      period: 'Nov 2023 – Mar 2024 (5 months)',
      icon: '⚙️',
      bullets: [
        'Contributed to the technical team by assisting in the setup and execution of technical events.',
        'Helped organize and support community-driven workshops and hackathons.',
      ],
    },
    {
      title: 'Event Management Team Member',
      company: 'English Literary Association (ELA), VIT-AP',
      period: 'Jun 2023 – Apr 2025 (1 year 11 months)',
      icon: '🎭',
      bullets: [
        'Assisted in planning and executing literary events and competitions on campus.',
        'Contributed to creative programming and logistical arrangements.',
      ],
    },
  ];

  const cardBg = "bg-[#181818]";
  const goldText = "text-[#e6cfa7]";
  const mutedGray = "text-[#b3b3b3]";

  return (
    <section id="education-achievements" className="py-20 bg-background text-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <h2 className="font-serif text-gold text-4xl sm:text-5xl font-bold text-center mb-8">
          Education & Achievements
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className={`${cardBg} p-4 sm:p-6 rounded-lg shadow-xl backdrop-blur-sm`}>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{edu.icon}</span>
                <div>
                  <h3 className={`text-xl font-semibold ${goldText}`}>{edu.degree}</h3>
                  <p className={mutedGray}>{edu.institution}</p>
                  <p className={mutedGray}>{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Achievements & Languages side by side on md+, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className={`${cardBg} p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center`}>
              <h3 className={`text-2xl font-bold text-center mb-6 ${goldText}`}>Achievements</h3>
              <ul className={`list-disc list-inside ${mutedGray} text-base space-y-2 max-w-xs`}>
                {achievements.map((a, i) => (
                  <li key={i} className="py-1 pl-2">{a.title}</li>
                ))}
              </ul>
            </div>
            <div className={`${cardBg} p-6 rounded-lg shadow-xl backdrop-blur-sm flex flex-col items-center`}>
              <h3 className={`text-2xl font-bold text-center mb-6 ${goldText}`}>Languages</h3>
              <ul className={`list-disc list-inside ${mutedGray} text-base space-y-2 max-w-xs`}>
                {languages.map((lang, i) => (
                  <li key={i} className="py-1 pl-2">{lang}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Extracurricular Activities & Volunteering as stacked cards */}
          <div className="space-y-8 mb-8">
            {/* Extracurricular Activities */}
            <div className={`${cardBg} p-6 rounded-lg shadow-xl backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold mb-6 ${goldText}`}>Extracurricular Activities</h3>
              <ul className={`list-disc list-inside ${mutedGray} text-base space-y-4 pl-4`}>
                {extracurriculars.map((exp) => (
                  <li key={exp.title}>
                    <span className={`font-semibold ${goldText}`}>{exp.title}:</span>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            {/* Volunteering */}
            <div className={`${cardBg} p-6 rounded-lg shadow-xl backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold mb-6 ${goldText}`}>Volunteering</h3>
              <ul className={`list-disc list-inside ${mutedGray} text-base space-y-4 pl-4`}>
                {volunteering.map((exp) => (
                  <li key={exp.title}>
                    <span className={`font-semibold ${goldText}`}>{exp.title}:</span>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className={`text-2xl font-bold text-center mb-6 ${goldText}`}>Links</h3>
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

