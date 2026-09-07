/**
 * The desktop ground, drawn entirely in CSS/SVG from the AM logo kit:
 * a cream (or night) field, a faint blueprint grid, and thin circuit traces
 * resolving into the head profile of the mark — with the script "A.M"
 * signature set as a watermark. No image files.
 */

/** A junction pad on a trace. */
function Node({ cx, cy, r = 4 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="var(--wall-b)" />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--node)"
        strokeWidth={1.6}
      />
    </g>
  );
}

function Circuit() {
  return (
    <svg
      viewBox="0 0 640 660"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* the head profile — what the traces build up to */}
      <path
        d="M252 624c-4-52-6-96-18-124-8-18-24-30-26-44-2-12 14-16 16-26 2-8-10-12-8-20 2-8 14-10 12-18-2-8-16-6-14-16 2-12 22-14 24-28 2-16-14-18-12-32 4-30 26-58 60-72 40-16 88-10 118 16 30 26 42 66 36 106-6 40-22 72-26 104-4 30-2 60 2 82"
        stroke="var(--trace-strong)"
        strokeWidth={1.6}
      />

      {/* traces feeding in from the outside */}
      <path d="M0 432h92l32-32h84" />
      <path d="M0 526h146l30-30h58" />
      <path d="M34 660v-72l34-34h108" />
      <path d="M640 300H542l-34 34h-46" />
      <path d="M640 404h-78l-38 38h-70" />
      <path d="M244 660v-46l32-32h82l32 32v46" />
      <path d="M92 432v-80h62" />
      <path d="M562 404v-70h-52" />

      {/* traces inside the profile */}
      <path d="M250 336h52l22-22h50l24 26v46" />
      <path d="M270 404h62l24 24h56" />
      <path d="M302 476h56l24-24h44" />
      <path d="M240 282l30 30h68" />
      <path d="M398 408v44h-26" />

      {/* chip pad */}
      <rect x={352} y={330} width={44} height={30} rx={4} stroke="var(--node)" />
      <path d="M362 345h24" stroke="var(--node)" />

      <Node cx={208} cy={400} />
      <Node cx={234} cy={496} />
      <Node cx={176} cy={554} />
      <Node cx={462} cy={334} />
      <Node cx={452} cy={442} />
      <Node cx={398} cy={386} r={3.4} />
      <Node cx={412} cy={428} r={3.4} />
      <Node cx={426} cy={452} r={3.4} />
      <Node cx={338} cy={312} r={3.4} />
      <Node cx={372} cy={452} r={3.4} />
      <Node cx={92} cy={432} r={3.4} />
      <Node cx={154} cy={352} r={3.4} />
      <Node cx={510} cy={334} r={3.4} />
      <Node cx={358} cy={582} r={3.4} />
    </svg>
  );
}

export default function Wallpaper() {
  return (
    <div className="abk-wallpaper" aria-hidden="true">
      <div className="abk-grid" />
      <div className="abk-circuit">
        <Circuit />
      </div>
      <span className="abk-signature">A.M</span>
      <div className="abk-vignette" />
    </div>
  );
}
