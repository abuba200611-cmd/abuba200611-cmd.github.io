"use client";

import { useEffect, useState } from "react";

/** Renders nothing until mounted so the static export never mismatches. */
export default function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      suppressHydrationWarning
      className="hidden w-[46px] text-right font-display text-[15px] tracking-[0.08em] text-[#a6a6b0] tabular-nums sm:block"
    >
      {now ?? ""}
    </span>
  );
}
