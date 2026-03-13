import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

/**
 * 404 Not Found page with branded design and smooth animations
 * Provides clear navigation back to home
 */
const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to the homepage to continue browsing."
      />
      
      <main className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6">
        <motion.div
          className="max-w-2xl w-full text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-[120px] md:text-[180px] font-extralight tracking-wider leading-none text-foreground/10">
              404
            </h1>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 -mt-8">
            <motion.h2
              className="text-3xl md:text-5xl font-light tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p
              className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </motion.p>
          </div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base font-light tracking-wide group"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 size-5 transition-transform group-hover:-translate-x-1" />
                Return to Home
              </Link>
            </Button>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="h-px w-24 mx-auto bg-border" />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;
