import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Projects"
        description="Projects shaped by the problems I wanted to solve as a CSE student, blending creativity with practical engineering."
      />

      <div className="min-h-screen">
        <section className="py-16 md:py-20 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Projects</h1>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Projects shaped by the problems I wanted to solve as a CSE student, where creativity meets practical engineering.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-12 px-4 md:px-6">
          <PortfolioGrid projects={projects} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
