import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}.`}
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">About</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {photographerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-sm border border-border bg-muted/10 p-8 space-y-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Profile</p>

                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide">{photographerInfo.name}</h2>
                    <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                      {photographerInfo.heroIntroduction}
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3 text-sm font-light tracking-wide">
                    <div>
                      <span className="text-muted-foreground">Availability: </span>
                      <span className="text-foreground">{photographerInfo.availability}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email: </span>
                      <a
                        href={`mailto:${photographerInfo.email}`}
                        className="text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {photographerInfo.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Location: </span>
                      <span className="text-foreground">{photographerInfo.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {photographerInfo.socialLinks.github && (
                    <a
                      href={photographerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.devpost && (
                    <a
                      href={photographerInfo.socialLinks.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Devpost"
                    >
                      <ExternalLink className="size-5" />
                      <span className="text-sm font-light tracking-wide">Devpost</span>
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">{photographerInfo.name}</h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">{photographerInfo.tagline}</p>
                </div>

                <Separator />

                <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                  {photographerInfo.biography}
                </p>
              </motion.div>
            </div>

            <section className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {photographerInfo.skills.map((group) => (
                  <div key={group.category} className="border border-border rounded-sm p-5 space-y-3">
                    <h4 className="text-xl font-light tracking-wide">{group.category}</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">{group.items.join(' | ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">Experience</h3>
              <div className="space-y-8">
                {photographerInfo.experiences.map((experience) => (
                  <div key={`${experience.title}-${experience.organization}`} className="space-y-3">
                    <h4 className="text-2xl font-light tracking-wide">{experience.title}</h4>
                    <p className="text-muted-foreground font-light">
                      {experience.organization} | {experience.period}
                      {experience.location ? ` | ${experience.location}` : ''}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light leading-relaxed">
                      {experience.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Separator />
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">Education & Achievements</h3>
              <p className="text-lg text-muted-foreground font-light">{photographerInfo.education}</p>
              <div>
                <h4 className="text-xl font-light tracking-wide mb-3">Achievements</h4>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light leading-relaxed">
                  {photographerInfo.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {photographerInfo.certifications && photographerInfo.certifications.length > 0 && (
                <div>
                  <h4 className="text-xl font-light tracking-wide mb-3">Certifications</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light leading-relaxed">
                    {photographerInfo.certifications.map((item) => (
                      <li key={item.name}>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                          >
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4 className="text-xl font-light tracking-wide mb-3">Languages</h4>
                <p className="text-muted-foreground font-light">Fluent: {photographerInfo.languages.fluent.join(', ')}</p>
                {photographerInfo.languages.basic.length > 0 && (
                  <p className="text-muted-foreground font-light">Basic: {photographerInfo.languages.basic.join(', ')}</p>
                )}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">Extracurricular Activities</h3>
              {photographerInfo.extracurricular.map((item) => (
                <div key={item.role} className="space-y-2">
                  <h4 className="text-xl font-light tracking-wide">{item.role}</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light leading-relaxed">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">Volunteering</h3>
              {photographerInfo.volunteering.map((item) => (
                <div key={item.role} className="space-y-2">
                  <h4 className="text-xl font-light tracking-wide">{item.role}</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light leading-relaxed">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
