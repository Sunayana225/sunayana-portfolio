import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${photographerInfo.name} for internships, collaborations, and project opportunities.`}
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">Contact Me</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Let\'s build something impactful.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">Send a Message</h2>
                  <p className="text-muted-foreground font-light">
                    Fill out the form below and I will get back to you as soon as possible.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">Contact Information</h2>
                  <p className="text-muted-foreground font-light">
                    Prefer direct contact? You can reach me through the channels below.
                  </p>
                </div>

                <Separator />

                <div className="rounded-sm border border-border bg-accent/30 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Current Availability</p>
                  <p className="mt-3 text-base font-light leading-relaxed text-foreground">
                    {photographerInfo.availability}
                  </p>
                </div>

                <div className="space-y-6">
                  {photographerInfo.email && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-sm bg-accent">
                        <Mail className="size-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                        <a
                          href={`mailto:${photographerInfo.email}`}
                          className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                        >
                          {photographerInfo.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {photographerInfo.phone && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-sm bg-accent">
                        <Phone className="size-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-light tracking-wide text-muted-foreground">Phone</p>
                        <a
                          href={`tel:${photographerInfo.phone}`}
                          className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                        >
                          {photographerInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {photographerInfo.location && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-sm bg-accent">
                        <MapPin className="size-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                        <p className="text-base md:text-lg font-light">{photographerInfo.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
