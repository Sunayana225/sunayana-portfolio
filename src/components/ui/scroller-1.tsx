/**
 * Advanced Scroller Component (Shugar Design System)
 *
 * A sophisticated scrolling container with smooth animations, gradient overlays,
 * and optional navigation buttons. Supports horizontal, vertical, or both directions.
 *
 * @component Scroller
 *
 * @example
 * // Horizontal scroller with buttons
 * import { Scroller } from "@/components/ui/scroller-1";
 *
 * <Scroller overflow="x" width="100%" withButtons>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Scroller>
 *
 * @example
 * // Vertical scroller
 * <Scroller overflow="y" height="400px" withButtons>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Scroller>
 *
 * @example
 * // Custom styling
 * <Scroller
 *   overflow="x"
 *   childrenContainerClassName="gap-4 p-2"
 *   width="80%"
 *   height="300px"
 * >
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </Scroller>
 *
 * @props
 * - children: React.ReactNode - Content to be scrolled
 * - overflow: "x" | "y" | "both" - Scroll direction
 * - height?: number | string - Container height (default: "100%")
 * - width?: number | string - Container width (default: "100%")
 * - withButtons?: boolean - Show navigation buttons
 * - childrenContainerClassName?: string - Custom classes for scroll container
 *
 * @features
 * - Smart gradient overlays that appear/disappear based on scroll position
 * - Smooth scroll-to-item functionality
 * - Optional navigation buttons (arrows)
 * - Hidden scrollbar with custom styling
 * - Wheel scroll detection
 * - Dark mode support with automatic color adaptation
 * - Responsive button positioning
 * - ARIA labels for accessibility
 *
 * @styling
 * - Uses Shugar Design System colors
 * - Gradient overlays (white/black with transparency)
 * - Custom scrollbar hiding (.hide-scrollbar)
 * - Smooth transitions (300ms)
 *
 * @dependencies
 * - Button component from button-1.tsx
 * - clsx for conditional classes
 * - React hooks (useEffect, useRef, useState)
 *
 * @accessibility
 * - ARIA labels on navigation buttons
 * - Keyboard navigation support
 * - Focus management
 */

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button-1";
import clsx from "clsx";

type TOverflowType = "x" | "y" | "both";

interface ScrollerProps {
  children: React.ReactNode;
  overflow: TOverflowType;
  height?: number | string;
  width?: number | string;
  withButtons?: boolean;
  childrenContainerClassName?: string;
}

const ArrowUp = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z"
    />
  </svg>
);

const ArrowDown = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 14.0607L9.96966 13.5303L5.14644 8.7071C4.75592 8.31658 4.75592 7.68341 5.14644 7.29289L9.96966 2.46966L10.5 1.93933L11.5607 2.99999L11.0303 3.53032L6.56065 7.99999L11.0303 12.4697L11.5607 13L10.5 14.0607Z"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
    />
  </svg>
);

export const Scroller = ({
  children,
  overflow,
  height = "100%",
  width = "100%",
  withButtons,
  childrenContainerClassName
}: ScrollerProps) => {
  const items = React.Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTopOverlay, setShowTopOverlay] = useState(false);
  const [showBottomOverlay, setShowBottomOverlay] = useState(false);
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);
  const [showRightOverlay, setShowRightOverlay] = useState(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastScrollByWheel, setLastScrollByWheel] = useState<boolean>(false);

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
      itemsRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    }
  };

  const handleButtonClick = (direction: "next" | "prev") => {
    if (!lastScrollByWheel) {
      scrollToIndex(direction === "next" ? currentIndex + 1 : currentIndex - 1);
    } else {
      let nearestIndex = currentIndex;
      for (let i = 0; i < itemsRef.current.length; i++) {
        const rect = itemsRef.current[i]?.getBoundingClientRect();
        if (overflow === "y") {
          if (direction === "next") {
            if (rect && rect.top - 80 > 0) {
              nearestIndex = i < itemsRef.current.length ? i + 1 : itemsRef.current.length;
              break;
            }
          } else {
            if (rect && rect.top - 80 > 0) {
              nearestIndex = i > 0 ? i - 1 : 0;
              break;
            }
          }
        } else if (overflow === "x") {
          if (direction === "next") {
            if (rect && rect.left > 0) {
              nearestIndex = i < itemsRef.current.length ? i + 1 : itemsRef.current.length;
              break;
            }
          } else {
            if (rect && rect.left > 0) {
              nearestIndex = i > 0 ? i - 1 : 0;
              break;
            }
          }
        }
      }
      setCurrentIndex(nearestIndex);
      scrollToIndex(nearestIndex);
    }
    setLastScrollByWheel(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = containerRef.current;
        setShowTopOverlay((overflow === "y" || overflow === "both") && scrollTop > 0);
        setShowBottomOverlay((overflow === "y" || overflow === "both") && scrollTop + clientHeight < scrollHeight);
        setShowLeftOverlay((overflow === "x" || overflow === "both") && scrollLeft > 0);
        setShowRightOverlay((overflow === "x" || overflow === "both") && scrollLeft + clientWidth < scrollWidth);
      }
    };

    handleScroll();
    const element = containerRef.current;
    element?.addEventListener("scroll", handleScroll);
    return () => element?.removeEventListener("scroll", handleScroll);
  }, [overflow]);

  return (
    <div
      className="relative overflow-hidden flex flex-col gap-2"
      style={{ width, height }}
    >
      {withButtons && overflow === "y" && (
        <div className="flex justify-center gap-2 m-[1px] z-10">
          <Button
            aria-label="scroll top"
            svgOnly
            shape="rounded"
            size="small"
            type="secondary"
            onClick={() => handleButtonClick("prev")}
          >
            <ArrowUp />
          </Button>
          <Button
            aria-label="scroll bottom"
            svgOnly
            shape="rounded"
            size="small"
            type="secondary"
            onClick={() => handleButtonClick("next")}
          >
            <ArrowDown />
          </Button>
        </div>
      )}
      <div
        className={clsx(
          "flex relative hide-scrollbar overflow-auto",
          overflow === "x" ? "flex-row" : "flex-col",
          childrenContainerClassName
        )}
        ref={containerRef}
        onWheel={() => setLastScrollByWheel(true)}
      >
        {items.map((child, index) => (
          <div
            key={index}
            // @ts-ignore
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {child}
          </div>
        ))}
      </div>
      {withButtons && overflow === "x" && (
        <div className="flex gap-2 m-[1px] z-10">
          <Button
            aria-label="scroll left"
            svgOnly
            shape="rounded"
            size="small"
            type="secondary"
            onClick={() => handleButtonClick("prev")}
          >
            <ArrowLeft />
          </Button>
          <Button
            aria-label="scroll right"
            svgOnly
            shape="rounded"
            size="small"
            type="secondary"
            onClick={() => handleButtonClick("next")}
          >
            <ArrowRight />
          </Button>
        </div>
      )}
      <div className={clsx(
        "absolute left-0 right-0 w-full h-10 bg-gradient-to-b from-white dark:from-black/75 to-white/0 duration-300",
        showTopOverlay ? (withButtons ? "top-10" : "top-0") : "-top-10"
      )} />
      <div className={clsx(
        "absolute left-0 right-0 w-full h-10 bg-gradient-to-t from-white dark:from-black/75 to-white/0 duration-300",
        showBottomOverlay ? "bottom-0" : "-bottom-10"
      )} />
      <div className={clsx(
        "absolute top-0 bottom-0 w-10 h-full bg-gradient-to-r from-white dark:from-black/75 to-white/0 duration-300",
        showLeftOverlay ? "left-0" : "-left-10"
      )} />
      <div className={clsx(
        "absolute top-0 bottom-0 w-10 h-full bg-gradient-to-l from-white dark:from-black/75 to-white/0 duration-300",
        showRightOverlay ? "right-0" : "-right-10"
      )} />
    </div>
  );
};
