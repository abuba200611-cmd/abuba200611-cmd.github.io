import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

import { SCROLL_HINTS } from "@constants";
import { usePortalStore, useScrollStore, useLangStore } from "@stores";

export const ScrollHint = () => {
  const portal = usePortalStore((state) => state.activePortalId);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const lang = useLangStore((state) => state.lang);
  const hints = SCROLL_HINTS[lang];

  // Show 'Scroll' for Hero and work portals, 'Pan' for Projects portal.
  let hintText = '';
  let isPan = false;
  let showScrollHint = false;
  if (!portal) {
    hintText = hints.scroll;
    showScrollHint = scrollProgress === 0;
  } else if (portal === 'work') {
    hintText = hints.scroll;
    showScrollHint = scrollProgress === 0;
  } else {
    hintText = hints.pan;
    isPan = true;
    showScrollHint = true;
  }

  useEffect(() => {
    if (showScrollHint) {
      gsap.to('.scroll-hint', {
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
      });
    } else {
      gsap.killTweensOf('.scroll-hint');
      gsap.to('.scroll-hint', {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [showScrollHint]);

  const svgSrc = isPan ? 'icons/chevrons-left-right.svg' : 'icons/chevrons-up-down.svg';

  return (
    <div className="fixed w-full bottom-5 scroll-hint" style={{ opacity: 0 }}>
      <div className="flex items-center justify-center animate-pulse">
        { showScrollHint }
        <Image src={svgSrc} width={18} height={18} alt="night mode" loading="lazy" />
        <span className="text-white">{hintText}</span>
      </div>
    </div>
  );
}