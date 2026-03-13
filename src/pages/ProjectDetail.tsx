import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Cpu, User, Github, ExternalLink, Users } from 'lucide-react';
import { getProjectCategoryLabel } from '@/lib/projectCategories';
import { SEOHead } from '@/components/seo/SEOHead';
import { getAdjacentProjects, getProjectBySlug } from '@/data/projects';
import { ProjectNavigation } from '@/components/portfolio/ProjectNavigation';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const adjacentProjects = getAdjacentProjects(project.slug);
  const techStackItems = project.techStack
    ? project.techStack.split(',').map((item) => item.trim()).filter(Boolean)
    : [];

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen">
        <section className="border-b border-border px-6 lg:px-8 py-20 md:py-24">
          <motion.div
            className="mx-auto max-w-5xl space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm font-light tracking-wide text-muted-foreground">
              <span>{getProjectCategoryLabel(project.category)}</span>
              <span>|</span>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{project.year}</span>
              </div>
              {project.location && (
                <>
                  <span>|</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{project.location}</span>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">{project.title}</h1>
              <p className="max-w-3xl text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-accent transition-colors"
                  >
                    <Github className="size-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="size-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </section>

        <section className="px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-8">
              {techStackItems.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <Cpu className="size-4" />
                    <span>Built With</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {techStackItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-border px-3 py-1.5 text-sm font-light text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">Project Summary</h2>
                <p className="max-w-3xl text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-sm border border-border p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Calendar className="size-4" />
                  <span>Year</span>
                </div>
                <p className="font-light text-foreground">{project.year}</p>
              </div>

              <div className="rounded-sm border border-border p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Cpu className="size-4" />
                  <span>Category</span>
                </div>
                <p className="font-light text-foreground">{getProjectCategoryLabel(project.category)}</p>
              </div>

              {project.projectType && (
                <div className="rounded-sm border border-border p-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <User className="size-4" />
                    <span>Project Type</span>
                  </div>
                  <p className="font-light text-foreground">{project.projectType}</p>
                </div>
              )}

              {project.location && (
                <div className="rounded-sm border border-border p-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <MapPin className="size-4" />
                    <span>Location</span>
                  </div>
                  <p className="font-light text-foreground">{project.location}</p>
                </div>
              )}

              {project.teamMembers && project.teamMembers.length > 0 && (
                <div className="rounded-sm border border-border p-5 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <Users className="size-4" />
                    <span>{project.teamName || 'Team'}</span>
                  </div>

                  <div className="space-y-3">
                    {project.teamMembers.map((member) => (
                      <div key={`${project.slug}-${member.name}`} className="space-y-1">
                        {member.githubUrl ? (
                          <a
                            href={member.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-light text-foreground hover:text-muted-foreground transition-colors"
                          >
                            {member.name}
                          </a>
                        ) : (
                          <p className="font-light text-foreground">{member.name}</p>
                        )}
                        {member.role && (
                          <p className="text-sm font-light text-muted-foreground">{member.role}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </motion.div>
        </section>

        <ProjectNavigation
          prev={adjacentProjects.prev}
          next={adjacentProjects.next}
        />
      </div>
    </>
  );
}
