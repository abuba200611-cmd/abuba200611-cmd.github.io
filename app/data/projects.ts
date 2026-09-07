export type AutomationProject = {
  title: string;
  client: string;
  date: string;
  summary: string;
  stack: string[];
  /** the flow, node by node — this is what the section renders */
  flow: string[];
  outcome: string;
  url?: string;
};

export const AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    title: "Qatarat Nahl",
    client: "Salla honey & livestock store",
    date: "Jul 2026",
    summary:
      "An Arabic WhatsApp sales agent wired into a live Salla store: it answers product questions, syncs the catalogue, chases abandoned carts and reports every morning.",
    stack: ["n8n", "WhatsApp Cloud API", "Salla API", "OpenAI", "Google Sheets"],
    flow: [
      "WhatsApp message in",
      "Intent + language routing",
      "Salla catalogue lookup",
      "AI reply in Saudi dialect",
      "Order / cart write-back",
      "Daily owner report",
    ],
    outcome:
      "Replaces manual replies on the store's busiest channel and recovers carts that used to go cold overnight.",
  },
  {
    title: "Salla Automation Templates",
    client: "Small Salla merchants",
    date: "Aug 2026",
    summary:
      "A reusable pack of n8n templates a merchant can import and run the same day — abandoned cart recovery, review requests, low-stock alerts.",
    stack: ["n8n", "Salla API", "WhatsApp", "Webhooks"],
    flow: [
      "Salla webhook",
      "Filter + dedupe",
      "Delay window",
      "Templated message",
      "Result logged",
    ],
    outcome:
      "Turns a bespoke build into a product a merchant can install without a developer.",
  },
];

export type WebProject = {
  title: string;
  date: string;
  summary: string;
  stack: string[];
  url?: string;
  repo?: string;
  /** shown in the fake browser chrome */
  host: string;
};

export const WEB_PROJECTS: WebProject[] = [
  {
    title: "Perfect Fitness",
    date: "Jul 2026",
    summary:
      "Bilingual site for a women's gym in Jeddah — Arabic/English with full RTL, dark mode, and complete on-page SEO.",
    stack: ["Next.js", "Tailwind", "i18n", "SEO"],
    url: "https://perfect-fitness-jeddah.netlify.app",
    host: "perfect-fitness-jeddah.netlify.app",
  },
  {
    title: "Halawiyat Alhafla",
    date: "Jul 2026",
    summary:
      "Bakery site in Jeddah with a live 3D cake designer — customers build the cake in the browser before ordering.",
    stack: ["Three.js", "React", "Tailwind"],
    url: "https://halawiyat-alhafla-jeddah.netlify.app",
    host: "halawiyat-alhafla-jeddah.netlify.app",
  },
  {
    title: "Abu Saiba Plants",
    date: "Jul 2026",
    summary:
      "Bilingual RTL site for a plant nursery in Bahrain, built for search from the first commit.",
    stack: ["Next.js", "RTL", "SEO"],
    url: "https://abuba200611-cmd.github.io/abu-saiba-plants/",
    host: "abuba200611-cmd.github.io/abu-saiba-plants",
  },
  {
    title: "Pharmacy Online",
    date: "Jul 2026",
    summary:
      "Full-stack demo store: cart, checkout, prescription upload and an admin dashboard behind it.",
    stack: ["Full-stack", "Auth", "Admin"],
    repo: "https://github.com/abuba200611-cmd/abk-Pharmacy-Online",
    host: "github.com/abuba200611-cmd/abk-Pharmacy-Online",
  },
  {
    title: "Halaqat Tahfeez",
    date: "Jul 2026",
    summary:
      "Matches Quran circle students into recitation pairs and builds each pair a review schedule automatically.",
    stack: ["Web app", "Scheduling"],
    repo: "https://github.com/abuba200611-cmd/halaqat-tahfeez",
    host: "github.com/abuba200611-cmd/halaqat-tahfeez",
  },
  {
    title: "Tasjeel Tullab",
    date: "Jul 2026",
    summary:
      "Lets Quran students log their own daily memorization and review — no teacher in the loop.",
    stack: ["Web app", "Self-serve"],
    repo: "https://github.com/abuba200611-cmd/tasjeel-tullab",
    host: "github.com/abuba200611-cmd/tasjeel-tullab",
  },
];
