import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Users } from 'lucide-react';
import type { Project } from '@/types';
import { getProjectCategoryLabel } from '@/lib/projectCategories';

interface ProjectCardProps {
  project: Project;
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with quiet text-first project metadata and actions
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const previewDescription =
    project.description.length > 150
      ? `${project.description.slice(0, 147).trim()}...`
      : project.description;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full overflow-hidden rounded-sm border border-border bg-card/30"
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block border-b border-white/10 bg-black p-6 text-white transition-colors hover:bg-black/90"
      >
        <div className="flex min-h-52 flex-col justify-between md:min-h-56">
          {showCategory ? (
            <div className="flex flex-wrap items-center gap-2 text-xs font-light uppercase tracking-[0.28em] text-white/60">
              <span>{getProjectCategoryLabel(project.category)}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>
          ) : (
            <span />
          )}

          <h3 className="max-w-[14ch] text-3xl md:text-[2rem] font-light tracking-wide text-white transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
        </div>
      </Link>

      <div className="flex h-full flex-col gap-5 p-5 md:p-6">
        {project.projectType && (
          <p className="text-sm font-light tracking-wide text-muted-foreground">
            {project.projectType}
          </p>
        )}

        <p className="text-base font-light leading-relaxed text-muted-foreground">
          {previewDescription}
        </p>

        {project.teamMembers && project.teamMembers.length > 0 && (
          <div className="space-y-3 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Users className="size-3.5" />
              <span>{project.teamName || 'Team'}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.teamMembers.map((member) => (
                <span
                  key={`${project.id}-${member.name}`}
                  className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-light tracking-wide text-foreground"
                  title={member.role}
                >
                  {member.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground transition-colors hover:bg-accent"
          >
            <span>Details</span>
            <ArrowRight className="size-4" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground transition-colors hover:bg-accent"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground transition-colors hover:bg-accent"
            >
              <ExternalLink className="size-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
