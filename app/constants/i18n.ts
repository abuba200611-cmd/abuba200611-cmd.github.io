import { Lang } from "@stores";

export const FONTS = {
  en: {
    title: './soria-font.ttf',
    body: './Vercetti-Regular.woff',
    lineHeight: 1.15,
    letterSpacing: 0,
  },
  ar: {
    title: './Tajawal-Bold.ttf',
    body: './Tajawal-Regular.ttf',
    // Tajawal's reported line metrics are tighter than the Latin fonts this
    // template ships, so wrapped Arabic lines touch/overlap at the 'normal'
    // line height — force extra breathing room instead.
    lineHeight: 1.7,
    // Any positive letter-spacing breaks Arabic letters' joined forms, so
    // this must stay 0 (never animate it, unlike the Latin hover effect).
    letterSpacing: 0,
  },
};

export const HERO_LINE: Record<Lang, string> = {
  en: 'Hi, I am Abubakr Mala.',
  ar: 'أنا أبوبكر مالا',
};

// The six identity tags shown on the hero window pane.
export const TAGLINES: Record<Lang, string[]> = {
  en: [
    'AI AUTOMATION ENGINEER',
    'UI/UX DESIGNER',
    'GRAPHIC DESIGNER',
    'PROBLEM SOLVER',
    'FAST LEARNER',
    'TEAM PLAYER',
  ],
  ar: [
    'مهندس أتمتة',
    'مصمم واجهات',
    'مصمم جرافيك',
    'حلّال المشكلات',
    'سريع التعلم',
    'روح الفريق',
  ],
};

export const SECTION_TITLES = {
  experience: { en: 'EXPERIENCE', ar: 'المسيرة' } as Record<Lang, string>,
  workEducation: { en: 'WORK AND EDUCATION', ar: 'العمل والتعليم' } as Record<Lang, string>,
  sideProjects: { en: 'SIDE PROJECTS', ar: 'المشاريع' } as Record<Lang, string>,
  view: { en: 'VIEW ↗', ar: 'عرض ↗' } as Record<Lang, string>,
};

export const SCROLL_HINTS: Record<Lang, { scroll: string; pan: string }> = {
  en: { scroll: 'SCROLL', pan: 'PAN' },
  ar: { scroll: 'مرّر', pan: 'حرّك' },
};
