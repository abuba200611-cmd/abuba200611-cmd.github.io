import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = 'en' | 'ar';

interface LangStore {
  lang: Lang;
  toggleLang: () => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: 'en',
      toggleLang: () => set({ lang: get().lang === 'en' ? 'ar' : 'en' }),
    }),
    {
      name: "lang-storage",
    }
  )
);
