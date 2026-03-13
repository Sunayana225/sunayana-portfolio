import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';
import { portfolioCategories, type PortfolioCategoryId } from '@/lib/projectCategories';
import { ProjectCard } from './ProjectCard';
import { CategoryFilter } from './CategoryFilter';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Professional portfolio grid with category filtering
 * Responsive: 3 columns desktop, 2 tablet, 1 mobile
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="space-y-10">
      <CategoryFilter
        categories={portfolioCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <motion.div
        layout
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05,
                layout: { duration: 0.4 }
              }}
            >
              <ProjectCard
                project={project}
                showCategory={true}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-muted-foreground font-light">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
