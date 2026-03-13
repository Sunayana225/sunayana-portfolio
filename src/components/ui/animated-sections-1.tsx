'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Observer, SplitText);

interface SectionData {
  text: string;
  img: string;
}

interface AnimatedSectionsProps {
  sections?: SectionData[];
  className?: string;
  headerTitle?: string;
}

const defaultSections: SectionData[] = [
  {
    text: "Whispers of Radiance",
    img: "https://raw.githubusercontent.com/66HEX/free-photos/main/img1.jpeg"
  },
  {
    text: "Ethereal Moments",
    img: "https://raw.githubusercontent.com/66HEX/free-photos/main/img3.jpeg"
  },
  {
    text: "Silent Beauty",
    img: "https://raw.githubusercontent.com/66HEX/free-photos/main/img5.jpeg"
  }
];

const AnimatedSections: React.FC<AnimatedSectionsProps> = ({
  sections = defaultSections,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<any>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const splitHeadingsRef = useRef<SplitText[]>([]);
  const currentIndexRef = useRef<number>(-1);
  const animatingRef = useRef<boolean>(false);
  const sectionsRefs = useRef<HTMLElement[]>([]);
  const imagesRefs = useRef<HTMLDivElement[]>([]);
  const outerRefs = useRef<HTMLDivElement[]>([]);
  const innerRefs = useRef<HTMLDivElement[]>([]);
  const headingRefs = useRef<HTMLHeadingElement[]>([]);
  const counterCurrentRef = useRef<HTMLSpanElement | null>(null);
  const counterNextRef = useRef<HTMLSpanElement | null>(null);
  const counterCurrentSplitRef = useRef<SplitText | null>(null);
  const counterNextSplitRef = useRef<SplitText | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  let loaded = 0;
  sections.forEach((section) => {
    const img = new Image();
    img.src = section.img;
    img.onload = () => {
      loaded++;
      if (loaded === sections.length) {
        setImagesLoaded(true);
      }
    };
    img.onerror = () => {
      loaded++;
      if (loaded === sections.length) {
        setImagesLoaded(true);
      }
    };
  });
}, [sections]);

  const gotoSection = useCallback((index: number, direction: number) => {
    if (!containerRef.current || animatingRef.current) return;

    const sectionsElements = sectionsRefs.current as Element[];
    const images = imagesRefs.current as Element[];
    const outerWrappers = outerRefs.current as Element[];
    const innerWrappers = innerRefs.current as Element[];

    const wrap = gsap.utils.wrap(0, sectionsElements.length);
    index = wrap(index);
    animatingRef.current = true;

    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: 'power1.inOut' },
      onComplete: () => {
        animatingRef.current = false;
      }
    });

    timelineRef.current = tl;

    if (currentIndexRef.current >= 0) {
      gsap.set(sectionsElements[currentIndexRef.current], { zIndex: 0 });
      tl.to(images[currentIndexRef.current], { xPercent: -15 * dFactor })
        .set(sectionsElements[currentIndexRef.current], { autoAlpha: 0 });
    }

    gsap.set(sectionsElements[index], { autoAlpha: 1, zIndex: 1 });

    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        xPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor)
      },
      { xPercent: 0 },
      0
    )
      .fromTo(
        images[index],
        { xPercent: 15 * dFactor },
        { xPercent: 0 },
        0
      );

    if (splitHeadingsRef.current[index] && splitHeadingsRef.current[index].lines) {
      const lines = splitHeadingsRef.current[index].lines;

      gsap.set(lines, {
        opacity: 0,
        yPercent: 100
      });

      tl.to(
        lines,
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: {
            each: 0.1,
            from: 'start'
          }
        },
        0.4
      );
    }

    if (counterCurrentRef.current && counterNextRef.current) {
      if (!counterCurrentSplitRef.current) {
        counterCurrentSplitRef.current = new SplitText(counterCurrentRef.current, {
          type: 'lines',
          linesClass: 'line',
          mask: 'lines'
        });
      }

      counterNextRef.current.textContent = String(index + 1);
      gsap.set(counterNextRef.current, { opacity: 1 });

      if (counterNextSplitRef.current) {
        counterNextSplitRef.current.revert();
        counterNextSplitRef.current = null;
      }
      counterNextSplitRef.current = new SplitText(counterNextRef.current, {
        type: 'lines',
        linesClass: 'line',
        mask: 'lines'
      });

      const currentLines = counterCurrentSplitRef.current?.lines || [];
      const nextLines = counterNextSplitRef.current?.lines || [];

      gsap.set(currentLines, { opacity: 1, yPercent: 0 });
      gsap.set(nextLines, { opacity: 1, yPercent: 100 * dFactor });

      tl.to(
        currentLines,
        {
          yPercent: -100 * dFactor,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: { each: 0.1, from: 'start' }
        },
        0.4
      );
      tl.to(
        nextLines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: { each: 0.1, from: 'start' }
        },
        0.4
      ).add(() => {
        if (counterCurrentSplitRef.current) {
          counterCurrentSplitRef.current.revert();
          counterCurrentSplitRef.current = null;
        }
        if (counterNextSplitRef.current) {
          counterNextSplitRef.current.revert();
          counterNextSplitRef.current = null;
        }
        if (counterCurrentRef.current && counterNextRef.current) {
          counterCurrentRef.current.textContent = counterNextRef.current.textContent;
        }
        gsap.set(counterNextRef.current, { opacity: 0, clearProps: 'all' });
      });
    }

    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  useGSAP(() => {
  if (!containerRef.current || !imagesLoaded) return;

    gsap.registerPlugin(Observer, SplitText);

    const headings = headingRefs.current as HTMLElement[];
    const outerWrappers = outerRefs.current as Element[];
    const innerWrappers = innerRefs.current as Element[];

    splitHeadingsRef.current = headings.map(
      (heading) =>
        new SplitText(heading, {
          type: 'lines',
          linesClass: 'line',
          mask: 'lines'
        })
    );

    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });

    observerRef.current = Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => {
        if (!animatingRef.current) {
          gotoSection(currentIndexRef.current - 1, -1);
        }
      },
      onUp: () => {
        if (!animatingRef.current) {
          gotoSection(currentIndexRef.current + 1, 1);
        }
      },
      tolerance: 10,
      preventDefault: true
    });

    gotoSection(0, 1);

    return () => {
      if (observerRef.current) {
        observerRef.current.kill();
        observerRef.current = null;
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      splitHeadingsRef.current.forEach((split) => {
        if (split && typeof split.revert === 'function') {
          split.revert();
        }
      });
      splitHeadingsRef.current = [];
      if (counterCurrentSplitRef.current && typeof counterCurrentSplitRef.current.revert === 'function') {
        counterCurrentSplitRef.current.revert();
        counterCurrentSplitRef.current = null;
      }
      if (counterNextSplitRef.current && typeof counterNextSplitRef.current.revert === 'function') {
        counterNextSplitRef.current.revert();
        counterNextSplitRef.current = null;
      }
    };
  }, { scope: containerRef, dependencies: [sections.length, imagesLoaded] });

  return (
    <div
      ref={containerRef}
      className={`h-screen w-screen overflow-hidden bg-black text-white uppercase font-sans ${className}`}
    >
      {/* Section preview thumbnails */}
      <div className="fixed bottom-4 right-6 z-30 flex items-center gap-4">
        <div className="flex gap-2">
          {sections.map((section, i) => (
            <div
              key={`thumb-${i}`}
              className="w-12 h-8 rounded overflow-hidden relative cursor-pointer transition-transform duration-300"
              onClick={() => {
                if (currentIndex !== i && !animatingRef.current) {
                  const direction = i > currentIndex ? 1 : -1;
                  gotoSection(i, direction);
                }
              }}
            >
              <img
                src={section.img}
                alt={`Section ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div
                 className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${
                   currentIndex !== i ? 'opacity-50' : 'opacity-0'
                 }`}
               />
            </div>
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs md:text-sm tracking-wider flex items-center gap-1">
          <div className="relative overflow-hidden h-[1em] leading-[1em] min-w-[0.8em]">
            <span ref={counterCurrentRef} className="block">1</span>
            <span ref={counterNextRef} className="block absolute left-0 top-0 opacity-0">2</span>
          </div>
          <span className="opacity-70">/ {sections.length}</span>
        </div>
      </div>

      {sections.map((section, i) => (
        <section
          key={`section-${i}`}
          className="fixed top-0 h-full w-full invisible"
          ref={(el) => { if (el) sectionsRefs.current[i] = el; }}
        >
          <div className="outer w-full h-full overflow-hidden" ref={(el) => { if (el) outerRefs.current[i] = el; }}>
            <div className="inner w-full h-full overflow-hidden" ref={(el) => { if (el) innerRefs.current[i] = el; }}>
              <div
                className="bg flex items-center justify-center absolute top-0 h-full w-full bg-cover bg-center"
                ref={(el) => { if (el) imagesRefs.current[i] = el; }}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url("${section.img}")`
                }}
              >
                <h2 className="section-heading text-white text-center font-semibold w-[90vw] max-w-[1200px] text-[clamp(1rem,4vw,9rem)] normal-case leading-none z-10" ref={(el) => { if (el) headingRefs.current[i] = el; }}>
                  {section.text}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;
