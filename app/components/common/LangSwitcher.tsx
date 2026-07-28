import { useGSAP } from "@gsap/react";
import { usePortalStore, useLangStore } from "@stores";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

const LangSwitcher = () => {
  const switcherRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLang } = useLangStore();
  const isActive = usePortalStore((state) => state.activePortalId);
  const positionClass = isMobile ? 'top-2 right-12' : 'top-6 right-20';

  useGSAP(() => {
    gsap.to(switcherRef.current, {
      opacity: isActive ? 0 : 1,
      duration: 1,
      delay: isActive ? 0 : 1,
    });
  }, [isActive]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className={`fixed ${positionClass}`} ref={switcherRef} style={{ opacity: 0, zIndex: 2 }}>
      <div className="flex items-center justify-center gap-2">
        <a
          className="hover:cursor-pointer text-white font-sans text-sm tracking-wider select-none"
          onClick={toggleLang}
        >
          {lang === 'en' ? 'عربي' : 'EN'}
        </a>
      </div>
    </div>
  );
};

export default LangSwitcher;
