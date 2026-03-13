import type { ProjectCategory } from '@/types';

export type PortfolioCategoryId = 'all' | ProjectCategory;

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  'full-stack': 'Full-Stack',
  'ai-ml': 'AI / ML',
  iot: 'IoT',
  'browser-extension': 'Browser Extension',
  nlp: 'NLP',
  'web-app': 'Web App',
  security: 'Security',
  mobile: 'Mobile',
  platform: 'Platform'
};

export const portfolioCategories: Array<{ id: PortfolioCategoryId; label: string }> = [
  { id: 'all', label: 'All Projects' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'web-app', label: 'Web Apps' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'security', label: 'Security' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'platform', label: 'Platform' },
  { id: 'iot', label: 'IoT' },
  { id: 'nlp', label: 'NLP' },
  { id: 'browser-extension', label: 'Extensions' }
];

export const getProjectCategoryLabel = (category: ProjectCategory): string => {
  return projectCategoryLabels[category];
};