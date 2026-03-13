import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Travel Itinerary Generator',
    category: 'ai-ml',
    year: '2025',
    slug: 'ai-travel-itinerary-generator',
    coverImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Built a dynamic travel planner that combines Gemini API outputs with OpenWeather API signals to generate practical day-by-day itineraries. Full-stack implementation with Python/Flask backend and React frontend, featuring optimized API calls and intelligent caching.',
    projectType: 'Full-stack AI application',
    techStack: 'Python, Flask, React, Gemini API, OpenWeather API',
    location: 'Personal Project',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Travel planning interface',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'API-driven itinerary results',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'Smart Attendance System',
    category: 'iot',
    year: '2025',
    slug: 'smart-attendance-system',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Developed a biometric attendance solution using Raspberry Pi and facial recognition, connected to SQL for reliable real-time attendance tracking.',
    projectType: 'Hardware + software system',
    techStack: 'Raspberry Pi, Python, SQL, Facial Recognition',
    location: 'Academic Project',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Raspberry Pi hardware setup',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Attendance dashboard view',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Biometric Voting System',
    category: 'security',
    year: '2025',
    slug: 'biometric-voting-system',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Engineered a secure voting platform using fingerprint authentication and SHA-256 based integrity checks to protect vote records.',
    projectType: 'Security-focused application',
    techStack: 'Fingerprint Sensors, SHA-256, SQL, Web Stack',
    location: 'Academic Project',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Secure voting system interface',
        aspectRatio: 'landscape'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Security architecture concept',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'News Headline Optimizer',
    category: 'browser-extension',
    year: '2025',
    slug: 'news-headline-optimizer',
    githubUrl: 'https://github.com/Sunayana225/headline-rewriter-advanced',
    coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Created a browser extension that rewrites negative headlines into more positive alternatives using API-based transformations and user controls.',
    projectType: 'Chrome extension',
    techStack: 'JavaScript, Browser APIs, NLP APIs',
    location: 'Personal Project',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Browser extension workflow',
        aspectRatio: 'landscape'
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Positive headline output examples',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'Sentiment Analysis System',
    category: 'nlp',
    year: '2024',
    slug: 'sentiment-analysis-system',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Built an NLP-based sentiment analyzer for telecom service reviews and integrated it into a Flask web interface for end users.',
    projectType: 'NLP web application',
    techStack: 'Python, NLP, Flask, SQL',
    location: 'Academic Project',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Sentiment analytics dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '5-2',
        src: 'https://images.unsplash.com/photo-1555949963-f8040c54d0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'NLP classification results',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Portfolio Maker',
    category: 'web-app',
    year: '2025',
    slug: 'portfolio-maker',
    githubUrl: 'https://github.com/Sunayana225/welcometoportfolioladder',
    liveUrl: 'https://welcometoportfolioladder.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Create stunning, professional portfolio websites in minutes without any coding knowledge. Features multiple themes, image cropping, Formspree contact form integration, and ZIP export for deployment anywhere.',
    projectType: 'Web application',
    techStack: 'Next.js, React, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, JSZip',
    location: 'Personal Project',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Portfolio builder interface',
        aspectRatio: 'landscape'
      },
      {
        id: '6-2',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Theme selection preview',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '7',
    title: 'WeatherGuard',
    category: 'full-stack',
    year: '2025',
    slug: 'weatherguard',
    githubUrl: 'https://github.com/Sunayana225/WeatherGuard',
    coverImage: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A comprehensive emergency preparedness and family safety app with real-time weather monitoring, interactive maps, location tracking, safety check-ins, and emergency communication tools. Powered by OpenWeatherMap, Leaflet maps, and real-time alerts.',
    projectType: 'Full-stack safety application',
    techStack: 'Next.js 15, React 19, TypeScript, Tailwind CSS, React Leaflet, Express.js, SQLite',
    location: 'Team Project (Team NPC)',
    teamName: 'Team NPC',
    teamMembers: [
      {
        name: 'Sunayana Yakkala',
        role: 'Lead Developer & Project Architect',
        githubUrl: 'https://github.com/Sunayana225'
      },
      {
        name: 'Aditya',
        role: 'Frontend Developer & User Experience',
        githubUrl: 'https://github.com/AdityaAneNenu'
      },
      {
        name: 'Rohiith',
        role: 'UI/UX Developer & Design Systems',
        githubUrl: 'https://github.com/MediatedFlame70'
      }
    ],
    images: [
      {
        id: '7-1',
        src: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Weather monitoring dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '7-2',
        src: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Interactive weather map',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '8',
    title: 'AI-Firewall for Kids',
    category: 'security',
    year: '2025',
    slug: 'ai-firewall',
    githubUrl: 'https://github.com/Sunayana225/AI-firewall',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'An intelligent real-time content filtering system that keeps children safe online using Hugging Face transformers, Google Gemini AI, a Chrome extension for seamless browsing, and a React parental dashboard with activity monitoring.',
    projectType: 'AI-powered security system',
    techStack: 'Python, Flask, React, Chrome Extension, Hugging Face, Google Gemini, SQLite',
    location: 'Personal Project',
    images: [
      {
        id: '8-1',
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'AI content filtering dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '8-2',
        src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Parental control interface',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '9',
    title: 'PetPal',
    category: 'mobile',
    year: '2025',
    slug: 'petpal',
    githubUrl: 'https://github.com/Sunayana225/Petpal',
    coverImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'An open-source veterinary food safety checker for 9 pet types (dogs, cats, rabbits, hamsters, birds, turtles, fish, lizards, snakes). Uses a 570+ entry veterinary database with Google Gemini AI fallback for unknown foods. Includes web app, API, and React Native mobile app.',
    projectType: 'Mobile-first product platform',
    techStack: 'React, Express.js, TypeScript, React Native, Expo, Google Gemini AI, Tailwind CSS',
    location: 'Personal Project',
    images: [
      {
        id: '9-1',
        src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'PetPal food safety checker',
        aspectRatio: 'landscape'
      },
      {
        id: '9-2',
        src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Pet food safety results',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '10',
    title: 'PetPal API',
    category: 'platform',
    year: '2025',
    slug: 'petpal-api',
    githubUrl: 'https://github.com/Sunayana225/petpalapi',
    liveUrl: 'https://petpalapi.onrender.com',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A simple, clean REST API to check if food is safe for your pets. JSON-based data storage, CORS enabled, easy to deploy. Supports dogs, cats, rabbits, and more with detailed safety reasons.',
    projectType: 'Backend platform / REST API',
    techStack: 'Node.js, Express.js, JSON data store',
    location: 'Personal Project',
    images: [
      {
        id: '10-1',
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'API endpoint documentation',
        aspectRatio: 'landscape'
      },
      {
        id: '10-2',
        src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'PetPal API response example',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '11',
    title: 'EstateHub',
    category: 'web-app',
    year: '2025',
    slug: 'estatehub',
    githubUrl: 'https://github.com/Sunayana225/EstateHub',
    liveUrl: 'https://estate-hub-nine.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A sophisticated real estate platform featuring Firebase authentication, FRED API market analytics (Case-Shiller index, mortgage rates, housing starts), Google Maps integration, property comparison tools, and advanced search filters.',
    projectType: 'Full-stack real estate platform',
    techStack: 'Next.js 15, React 19, TypeScript, Firebase, Supabase, FRED API, Google Maps, Tailwind CSS, Chart.js',
    location: 'Personal Project',
    images: [
      {
        id: '11-1',
        src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Real estate dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '11-2',
        src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Property listings view',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '12',
    title: 'FoodPrint',
    category: 'web-app',
    year: '2025',
    slug: 'foodprint',
    githubUrl: 'https://github.com/Sunayana225/Foodprint',
    liveUrl: 'https://foodprint-nine.vercel.app',
    coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Track your food\'s environmental impact — carbon footprint, water usage, and land use. Features meal tracking, AI recipe generation with CO₂ calculations, sustainability challenges, health risk analysis, and an interactive environmental dashboard.',
    projectType: 'Environmental sustainability web app',
    techStack: 'React, TypeScript, Firebase, Tailwind CSS, Vite, Framer Motion, Chart.js, USDA Food API',
    location: 'Personal Project',
    images: [
      {
        id: '12-1',
        src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'FoodPrint environmental dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '12-2',
        src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Meal sustainability tracker',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '13',
    title: 'Money Mentor AI',
    category: 'ai-ml',
    year: '2025',
    slug: 'money-mentor-ai',
    githubUrl: 'https://github.com/Sunayana225/money-mentor-ai',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'An AI-powered financial advisor with interactive chat, real-time responses, dark/light mode, WCAG 2.1 AA accessibility, and smooth Framer Motion animations. Built with Next.js 15, React 19, and Turbopack.',
    projectType: 'AI chat application',
    techStack: 'Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Radix UI',
    location: 'Team Project (Team NPC)',
    teamName: 'Team NPC',
    teamMembers: [
      {
        name: 'Aditya',
        role: 'Lead Developer',
        githubUrl: 'https://github.com/AdityaAneNenu'
      },
      {
        name: 'Sunayana Yakkala',
        role: 'Frontend Developer',
        githubUrl: 'https://github.com/Sunayana225'
      },
      {
        name: 'Rohiith',
        role: 'UI/UX Developer',
        githubUrl: 'https://github.com/MediatedFlame70'
      }
    ],
    images: [
      {
        id: '13-1',
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Money Mentor AI chat interface',
        aspectRatio: 'landscape'
      },
      {
        id: '13-2',
        src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Financial analytics view',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '15',
    title: 'MyNotes GenAI',
    category: 'ai-ml',
    year: '2025',
    slug: 'mynotes-genai',
    githubUrl: 'https://github.com/Sunayana225/mynotes-genai',
    coverImage: '/placeholder.svg',
    description: 'GenAI-focused notes project exploring assisted note generation and knowledge organization workflows.',
    projectType: 'AI productivity prototype',
    techStack: 'GenAI, Prompt Engineering',
    location: 'Personal Project',
    images: []
  },
  {
    id: '16',
    title: 'Hehe (Python Experiments)',
    category: 'ai-ml',
    year: '2025',
    slug: 'hehe-python-experiments',
    githubUrl: 'https://github.com/Sunayana225/hehe',
    coverImage: '/placeholder.svg',
    description: 'Python experimentation repository used for quick prototyping and testing new implementation ideas.',
    projectType: 'Experimental Python repository',
    techStack: 'Python',
    location: 'Personal Project',
    images: []
  },
  {
    id: '17',
    title: 'Optimization of TSP with a Visualization Platform',
    category: 'ai-ml',
    year: '2025',
    slug: 'capstone-tabu-modified',
    githubUrl: 'https://github.com/Sunayana225/capstone-tabu_modified',
    coverImage: '/placeholder.svg',
    description: 'Built an optimization platform implementing vanilla and advanced Tabu Search for TSP, with comparative visualization across Genetic Algorithm, Ant Colony, and Simulated Annealing approaches.',
    projectType: 'Optimization and visualization research platform',
    techStack: 'FastAPI, Streamlit, Python, Tabu Search, Genetic Algorithm, Ant Colony, Simulated Annealing',
    location: 'Academic Project',
    images: []
  },
  {
    id: '19',
    title: 'Knowledge Base Search Engine',
    category: 'nlp',
    year: '2025',
    slug: 'knowledge-base-search-engine',
    githubUrl: 'https://github.com/Sunayana225/Knowledge-base-Search-Engine',
    coverImage: '/placeholder.svg',
    description: 'Search and retrieval project for querying a curated knowledge base with relevance-focused responses.',
    projectType: 'Information retrieval system',
    techStack: 'Python, Search Algorithms, NLP',
    location: 'Personal Project',
    images: []
  },
  {
    id: '25',
    title: 'Basic E-Commerce Website',
    category: 'web-app',
    year: '2025',
    slug: 'basic-e-commerce-website',
    githubUrl: 'https://github.com/Sunayana225/Basic-E-Commerce-Website',
    coverImage: '/placeholder.svg',
    description: 'Foundational e-commerce website project with product browsing and core storefront structure.',
    projectType: 'E-commerce web application',
    techStack: 'HTML, CSS, JavaScript',
    location: 'Personal Project',
    images: []
  },
  {
    id: '26',
    title: 'ITENARO',
    category: 'web-app',
    year: '2025',
    slug: 'itenaro',
    githubUrl: 'https://github.com/Sunayana225/ITENARO',
    coverImage: '/placeholder.svg',
    description: 'Web project centered on itinerary planning and user-friendly travel flow design.',
    projectType: 'Travel web application',
    techStack: 'HTML, CSS, JavaScript',
    location: 'Personal Project',
    images: []
  },
  {
    id: '27',
    title: 'TaskFlow - Real-Time Task Collaboration Platform',
    category: 'full-stack',
    year: '2025',
    slug: 'taskflow-realtime-collaboration-platform',
    coverImage: '/placeholder.svg',
    description: 'Real-time team task collaboration platform with drag-and-drop boards, secure authentication, and live update notifications.',
    projectType: 'Real-time collaboration web application',
    techStack: 'MongoDB, Express.js, React, Node.js, Socket.io, JWT',
    location: 'Personal Project',
    images: []
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (
  currentSlug: string
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
