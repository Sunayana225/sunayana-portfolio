/**
 * Core TypeScript interfaces for Sunayana's Portfolio
 */

export type ProjectCategory = 'full-stack' | 'ai-ml' | 'iot' | 'browser-extension' | 'nlp' | 'web-app' | 'security' | 'mobile' | 'platform';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface ProjectTeamMember {
  name: string;
  role?: string;
  githubUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  projectType?: string;
  techStack?: string;
  location?: string;
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
  teamName?: string;
  teamMembers?: ProjectTeamMember[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface ActivityItem {
  role: string;
  details: string[];
}

export interface CertificationItem {
  name: string;
  url?: string;
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  portraitImage: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    devpost?: string;
  };
  skills: SkillGroup[];
  experiences: ExperienceItem[];
  education: string;
  certifications?: CertificationItem[];
  achievements: string[];
  languages: {
    fluent: string[];
    basic: string[];
  };
  extracurricular: ActivityItem[];
  volunteering: ActivityItem[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'web-app' | 'ai-ml' | 'collaboration';
  message: string;
  timestamp: Date;
}
