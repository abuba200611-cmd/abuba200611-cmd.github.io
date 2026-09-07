import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  /** section-specific band drawn behind the header */
  accent?: ReactNode;
  children: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  intro,
  accent,
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-16 pt-7 sm:px-8 sm:pt-10">
      <Link
        href="/"
        className="abk-focus inline-flex items-center gap-2 rounded-md py-1 text-[12px] tracking-[0.12em] text-[#8a8a94] uppercase transition-colors hover:text-[#e4cd8a]"
      >
        <svg
          viewBox="0 0 16 16"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10 3 5 8l5 5" />
        </svg>
        Desktop
      </Link>

      <header className="relative mt-6 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-7 sm:px-8 sm:py-9">
        {accent}
        <div className="relative">
          <p className="text-[11px] tracking-[0.3em] text-[#c9a84c] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-2.5 font-display text-[clamp(2.1rem,6vw,3.6rem)] leading-[0.95] tracking-[0.03em] text-[#ededf0]">
            {title.toUpperCase()}
          </h1>
          <p className="mt-3.5 max-w-[62ch] text-[15px] leading-relaxed text-[#a6a6b0]">
            {intro}
          </p>
        </div>
      </header>

      <div className="mt-8 sm:mt-10">{children}</div>
    </div>
  );
}
