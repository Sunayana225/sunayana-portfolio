import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import { getProjectCategoryLabel } from '@/lib/projectCategories';
import { cn } from '@/lib/utils';

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
}

/**
 * Previous/Next project navigation component
 * Shows project title and thumbnail on hover
 */
export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
      {/* Previous Project */}
      <div className={cn('border-b md:border-b-0 md:border-r border-border', !prev && 'opacity-50')}>
        {prev ? (
          <Link
            to={`/project/${prev.slug}`}
            className="group block p-8 md:p-12 hover:bg-accent transition-colors duration-300"
          >
            <motion.div
              className="space-y-4"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                <ArrowLeft className="size-5" />
                <span className="text-sm font-light tracking-wide uppercase">Previous Project</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
                  {prev.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light mt-2">
                  {getProjectCategoryLabel(prev.category)} • {prev.year}
                </p>
              </div>
            </motion.div>
          </Link>
        ) : (
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <ArrowLeft className="size-5" />
              <span className="text-sm font-light tracking-wide uppercase">No Previous Project</span>
            </div>
          </div>
        )}
      </div>

      {/* Next Project */}
      <div className={cn(!next && 'opacity-50')}>
        {next ? (
          <Link
            to={`/project/${next.slug}`}
            className="group block p-8 md:p-12 hover:bg-accent transition-colors duration-300"
          >
            <motion.div
              className="space-y-4 text-right"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-end gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="text-sm font-light tracking-wide uppercase">Next Project</span>
                <ArrowRight className="size-5" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
                  {next.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light mt-2">
                  {getProjectCategoryLabel(next.category)} • {next.year}
                </p>
              </div>
            </motion.div>
          </Link>
        ) : (
          <div className="p-8 md:p-12 text-right">
            <div className="flex items-center justify-end gap-3 text-muted-foreground">
              <span className="text-sm font-light tracking-wide uppercase">No Next Project</span>
              <ArrowRight className="size-5" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
