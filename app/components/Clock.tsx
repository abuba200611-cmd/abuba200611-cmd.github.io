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
      className="hidden w-[46px] text-right text-[13px] tracking-[0.06em] text-muted tabular-nums sm:block"
    >
      {now ?? ""}
    </span>
  );
}
