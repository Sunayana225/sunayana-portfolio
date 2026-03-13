import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { getProjectCategoryLabel } from '@/lib/projectCategories';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/35" />

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-5 py-2.5 text-sm tracking-wide text-white hover:bg-white/10 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-white text-black px-5 py-2.5 text-sm tracking-wide hover:bg-white/90 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-12 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">About Me</h2>
                <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
                  <p>{photographerInfo.biography}</p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">Selected Projects</h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A simple snapshot of recent software, AI, and product work.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="divide-y divide-border border-y border-border">
            {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.08}>
                  <article className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-sm font-light tracking-wide text-muted-foreground">
                        <span>{getProjectCategoryLabel(project.category)}</span>
                        <span>|</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
                        {project.title}
                      </h3>

                      <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 md:justify-end">
                      <Link
                        to={`/project/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-accent transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowRight className="size-4" />
                      </Link>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-accent transition-colors"
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
                          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-accent transition-colors"
                        >
                          <ExternalLink className="size-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
            ))}
            </div>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
