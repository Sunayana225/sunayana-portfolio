/**
 * Spinner Component (Shugar Design System)
 *
 * A lightweight, customizable loading spinner with 12 rotating bars.
 * Perfect for loading states, async operations, and progress indicators.
 *
 * @component Spinner
 *
 * @example
 * // Basic usage with default size and color
 * import { Spinner } from "@/components/ui/spinner-1";
 * <Spinner />
 *
 * @example
 * // Custom size
 * <Spinner size={32} />
 *
 * @example
 * // Custom color
 * <Spinner color="#FF6B6B" />
 *
 * @example
 * // Large spinner with custom color
 * <Spinner size={48} color="#3B82F6" />
 *
 * @example
 * // Used in a button (see Button component)
 * <Button loading>
 *   Loading...
 * </Button>
 *
 * @props
 * - size?: number - Diameter in pixels (default: 20)
 * - color?: string - Color in any CSS format (default: "#8f8f8f")
 *
 * @features
 * - 12-bar rotation animation
 * - Smooth fade-in/out effect per bar
 * - Customizable size and color
 * - Lightweight and performant
 * - No external animation libraries needed
 * - Responsive and scalable
 *
 * @animation
 * - Uses CSS animation (animate-fade-spin)
 * - 12 bars with staggered animation delays (-1.2s to -0.1s)
 * - Each bar rotated at 30-degree intervals (360° / 12 = 30°)
 * - Smooth fade effect with opacity transitions
 *
 * @styling
 * - Uses Tailwind CSS for positioning and animations
 * - Inline styles for size and color customization
 * - Rounded bars (5px border-radius)
 * - Centered positioning with transform
 *
 * @usage-notes
 * - Typically used within Button component loading state
 * - Can be used standalone for page/section loading
 * - Size should match the context (16-24px for buttons, 32-48px for page loaders)
 * - Color can match your brand or design system
 *
 * @performance
 * - Pure CSS animations (hardware accelerated)
 * - No JavaScript animation loops
 * - Minimal DOM nodes (12 divs)
 * - Efficient re-renders
 */

import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const bars = [
  {
    animationDelay: "-1.2s",
    transform: "rotate(.0001deg) translate(146%)"
  },
  {
    animationDelay: "-1.1s",
    transform: "rotate(30deg) translate(146%)"
  },
  {
    animationDelay: "-1.0s",
    transform: "rotate(60deg) translate(146%)"
  },
  {
    animationDelay: "-0.9s",
    transform: "rotate(90deg) translate(146%)"
  },
  {
    animationDelay: "-0.8s",
    transform: "rotate(120deg) translate(146%)"
  },
  {
    animationDelay: "-0.7s",
    transform: "rotate(150deg) translate(146%)"
  },
  {
    animationDelay: "-0.6s",
    transform: "rotate(180deg) translate(146%)"
  },
  {
    animationDelay: "-0.5s",
    transform: "rotate(210deg) translate(146%)"
  },
  {
    animationDelay: "-0.4s",
    transform: "rotate(240deg) translate(146%)"
  },
  {
    animationDelay: "-0.3s",
    transform: "rotate(270deg) translate(146%)"
  },
  {
    animationDelay: "-0.2s",
    transform: "rotate(300deg) translate(146%)"
  },
  {
    animationDelay: "-0.1s",
    transform: "rotate(330deg) translate(146%)"
  }
];

export const Spinner = ({ size = 20, color = "#8f8f8f" }: SpinnerProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <div className="relative top-1/2 left-1/2" style={{ width: size, height: size }}>
        {bars.map((item) => (
          <div
            key={item.transform}
            className="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px] animate-fade-spin"
            style={{ backgroundColor: color, ...item }}
          />
        ))}
      </div>
    </div>
  );
};
