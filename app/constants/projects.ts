import { Lang } from "@stores";
import { Project } from "../types";

// TODO: Move this to API
const PROJECTS_EN: Project[] = [
  {
    title: 'Qatarat Nahl — Salla Store Automation',
    date: 'Jul 2026',
    subtext: 'End-to-end automation for a live Salla e-commerce store, built on n8n: an AI WhatsApp sales agent, hourly product sync, abandoned-cart recovery, and daily sales reports.',
  },
  {
    title: 'Perfect Fitness',
    date: 'Jul 2026',
    subtext: "Bilingual (AR/EN) marketing website for a women's fitness club in Jeddah, with dark mode and full SEO setup.",
    url: 'https://perfect-fitness-jeddah.netlify.app',
  },
  {
    title: 'Halawiyat Alhafla',
    date: 'Jul 2026',
    subtext: 'Marketing website for a bakery in Jeddah, featuring a live interactive 3D cake designer built with Three.js.',
    url: 'https://halawiyat-alhafla-jeddah.netlify.app',
  },
  {
    title: 'Abu Saiba Plants & Flowers',
    date: 'Jul 2026',
    subtext: 'Bilingual RTL marketing website for a plant nursery in Bahrain, with full SEO setup.',
    url: 'https://abuba200611-cmd.github.io/abu-saiba-plants/',
  },
  {
    title: 'Pharmacy Online',
    date: 'Jul 2026',
    subtext: 'Full-stack pharmacy demo store: browsing, cart, checkout, prescription upload, and an admin dashboard for products/orders/prescriptions. Express + Drizzle ORM + local SQLite, React + Tailwind frontend.',
    url: 'https://github.com/abuba200611-cmd/abk-Pharmacy-Online',
  },
];

const PROJECTS_AR: Project[] = [
  {
    title: 'أتمتة متجر قطرات نحل (سلة)',
    date: 'يوليو 2026',
    subtext: 'أتمتة كاملة لمتجر سلة حقيقي مبنية على n8n: وكيل واتساب ذكي للمبيعات، مزامنة منتجات كل ساعة، استرجاع السلات المتروكة، وتقرير مبيعات يومي.',
  },
  {
    title: 'بيرفكت فتنس',
    date: 'يوليو 2026',
    subtext: 'موقع تسويقي ثنائي اللغة لنادٍ رياضي نسائي بجدة، مع وضع داكن وتهيئة SEO كاملة.',
    url: 'https://perfect-fitness-jeddah.netlify.app',
  },
  {
    title: 'حلويات الحفلة',
    date: 'يوليو 2026',
    subtext: 'موقع تسويقي لمحل حلويات بجدة، مع مصمم كيكة ثلاثي الأبعاد تفاعلي مبني بـ Three.js.',
    url: 'https://halawiyat-alhafla-jeddah.netlify.app',
  },
  {
    title: 'أبو صيبع للنباتات والزهور',
    date: 'يوليو 2026',
    subtext: 'موقع تسويقي ثنائي اللغة (RTL) لمشتل نباتات وزهور بالبحرين، مع تهيئة SEO كاملة.',
    url: 'https://abuba200611-cmd.github.io/abu-saiba-plants/',
  },
  {
    title: 'صيدلية أونلاين',
    date: 'يوليو 2026',
    subtext: 'متجر صيدلية تجريبي متكامل: تصفح وطلب، سلة، رفع وصفة طبية، ولوحة تحكم إدارية للمنتجات والطلبات والوصفات. Express وDrizzle ORM وSQLite محلية، وواجهة React وTailwind.',
    url: 'https://github.com/abuba200611-cmd/abk-Pharmacy-Online',
  },
];

export const PROJECTS_BY_LANG: Record<Lang, Project[]> = {
  en: PROJECTS_EN,
  ar: PROJECTS_AR,
};
