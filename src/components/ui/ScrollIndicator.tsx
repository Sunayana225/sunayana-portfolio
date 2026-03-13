import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Animated scroll indicator for hero sections
 * Subtle visual cue to encourage scrolling
 */
export function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={handleScroll}
      className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      aria-label="Scroll to content"
    >
      <span className="text-xs font-light tracking-widest uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-5" />
      </motion.div>
    </motion.button>
  );
}
