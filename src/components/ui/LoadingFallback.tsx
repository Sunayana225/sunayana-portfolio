import { Loader2 } from 'lucide-react';

/**
 * Loading fallback for code-split routes
 * Shows spinner while loading page components
 */
export function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
        <p className="text-sm font-light tracking-wide text-muted-foreground">
          Loading...
        </p>
      </div>
    </div>
  );
}
