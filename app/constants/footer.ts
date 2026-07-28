import { Lang } from "@stores";
import { FooterLink } from "../types";

const FOOTER_LINKS_EN: FooterLink[] = [
  {
    name: 'LinkedIn',
    hoverText: 'Connect with me',
    icon: 'icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/abu-bkaer-ab-a52866369',
  },
  {
    name: 'GitHub',
    hoverText: 'Open Sourcing',
    icon: 'icons/github.svg',
    url: 'https://github.com/abuba200611-cmd',
  },
  {
    name: 'Email',
    hoverText: 'abuba200611@gmail.com',
    icon: 'icons/file.svg',
    url: 'mailto:abuba200611@gmail.com',
  },
];

const FOOTER_LINKS_AR: FooterLink[] = [
  {
    name: 'لينكدإن',
    hoverText: 'تواصل معي',
    icon: 'icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/abu-bkaer-ab-a52866369',
  },
  {
    name: 'جيتهب',
    hoverText: 'مصدر مفتوح',
    icon: 'icons/github.svg',
    url: 'https://github.com/abuba200611-cmd',
  },
  {
    name: 'إيميل',
    hoverText: 'abuba200611@gmail.com',
    icon: 'icons/file.svg',
    url: 'mailto:abuba200611@gmail.com',
  },
];

export const FOOTER_LINKS_BY_LANG: Record<Lang, FooterLink[]> = {
  en: FOOTER_LINKS_EN,
  ar: FOOTER_LINKS_AR,
};
