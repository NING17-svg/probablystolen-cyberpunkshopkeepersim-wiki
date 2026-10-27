"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Responsive chapter/guide navigation; appearance and breakpoint belong to the caller. */
export function GuideDisclosure({ title, className = "", desktopMinWidth = 800, children }: {
  title: string; className?: string; desktopMinWidth?: number; children: ReactNode;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${desktopMinWidth}px)`);
    const update = () => { if (detailsRef.current) detailsRef.current.open = media.matches; };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [desktopMinWidth]);
  return <details ref={detailsRef} className={className}>
    <summary>{title}</summary>{children}
  </details>;
}
