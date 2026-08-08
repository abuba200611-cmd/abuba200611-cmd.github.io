'use client';

import { useEffect, useState } from "react";

// Defaults to false so the static export's server-rendered markup (which can
// never know the visitor's OS setting) matches the client's first render —
// same trick CanvasLoader uses for its own mount-gated branch. The real
// preference applies a moment later, once this runs in the browser.
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Reading the real value can only happen once mounted in the browser;
    // this is the one-time sync from that read, not a reactive loop.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
};
