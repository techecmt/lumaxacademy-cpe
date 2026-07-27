"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  placeholder?: ReactNode;
}

/**
 * Defers mounting expensive children (e.g. WebGL canvases) until the
 * container scrolls near the viewport, avoiding unnecessary work on
 * initial page load — especially important on mobile devices.
 */
export default function LazyMount({
  children,
  className,
  rootMargin = "200px",
  placeholder = null,
}: LazyMountProps) {
  // Always start hidden on both server and client — the server has no
  // IntersectionObserver, so seeding this from browser feature-detection
  // would render differently than the client's first paint and trigger a
  // hydration mismatch. The effect below (client-only) reveals the content
  // once it's actually in view.
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const timeoutId = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, isVisible]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
}
