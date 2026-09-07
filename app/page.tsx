import Link from "next/link";
import SectionIcon from "./components/SectionIcon";
import { OWNER } from "./data/links";
import { SECTIONS } from "./data/sections";

export default function Desktop() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-[1200px] flex-col justify-center px-5 py-10 sm:px-8">
      <header className="mb-9 sm:mb-12">
        <p className="text-[11px] tracking-[0.34em] text-[#c9a84c] uppercase">
          {OWNER.brand} — {OWNER.location}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,8vw,5.2rem)] leading-[0.92] tracking-[0.02em] text-[#ededf0]">
          {OWNER.name}
        </h1>
        <div className="abk-rule mt-4 max-w-[420px]" />
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[#a6a6b0]">
          I build automation that runs a business while its owner sleeps — and
          the interfaces people actually want to open. Pick a folder.
        </p>
      </header>

      <nav aria-label="Sections">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {SECTIONS.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="abk-glass abk-focus group relative flex h-full flex-col gap-3 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#c9a84c]/45 hover:bg-[#c9a84c]/[0.06] sm:p-5"
              >
                <span className="text-[#c9a84c] transition-colors group-hover:text-[#e4cd8a]">
                  <SectionIcon slug={s.slug} className="h-11 w-11" />
                </span>

                <span className="mt-auto">
                  <span className="block font-display text-[19px] leading-tight tracking-[0.05em] text-[#ededf0] sm:text-[21px]">
                    {s.label.toUpperCase()}
                  </span>
                  <span className="mt-1 block text-[12px] leading-snug text-[#8a8a94]">
                    {s.tagline}
                  </span>
                </span>

                {!s.ready && (
                  <span className="absolute right-3 top-3 rounded-full border border-white/12 bg-black/40 px-2 py-[3px] text-[9px] tracking-[0.13em] text-[#8a8a94] uppercase">
                    Soon
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
