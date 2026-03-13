import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { ProjectImage } from '@/types';
import { cn } from '@/lib/utils';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-screen lightbox component with keyboard and touch navigation
 * Features: arrow navigation, image counter, ESC to close, swipe gestures
 */
export function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNavigate 
}: LightboxProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentImage = images[currentIndex];
  const totalImages = images.length;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalImages - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-screen max-h-screen w-screen h-screen p-0 bg-black/95 border-none [&>button]:hidden"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 size-10 text-white hover:bg-white/10 rounded-full"
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
            <span className="text-white text-sm font-light tracking-wide">
              {currentIndex + 1} / {totalImages}
            </span>
          </div>

          {/* Previous Button */}
          {currentIndex > 0 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="absolute left-4 z-50 size-12 text-white hover:bg-white/10 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-8" />
            </Button>
          )}

          {/* Next Button */}
          {currentIndex < totalImages - 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="absolute right-4 z-50 size-12 text-white hover:bg-white/10 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="size-8" />
            </Button>
          )}

          {/* Image with swipe support */}
          <div
            className="relative w-full h-full flex items-center justify-center px-4 md:px-16"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage.id}
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                loading="eager"
              />
            </AnimatePresence>
          </div>

          {/* Caption */}
          {currentImage.caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl px-6">
              <motion.p
                key={currentImage.id}
                className="text-white/80 text-sm md:text-base font-light text-center tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {currentImage.caption}
              </motion.p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
