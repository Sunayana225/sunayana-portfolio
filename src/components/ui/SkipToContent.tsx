/**
 * Skip to content link for keyboard navigation accessibility
 * Appears on focus for screen readers and keyboard users
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-sm focus:font-light focus:tracking-wide focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
