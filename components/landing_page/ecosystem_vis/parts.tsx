import { C, type PipeDef, type TechId } from "./data";

/** Pipe + particles that follow the real path geometry via SVG motion paths (no React re-renders per frame). */
export function Pipeline({ p, focus, reduced }: { p: PipeDef; focus: TechId | null; reduced: boolean }) {
  const on = !!focus && p.tech === focus;
  const dim = !!focus && !!p.tech && p.tech !== focus;
  const cls = `ce-pipe${on ? " on" : ""}${dim ? " dim" : ""}`;
  return (
    <g className={cls}>
      <path d={p.d} fill="none" stroke={C.grey} strokeOpacity={0.35} strokeWidth={7} strokeLinecap="round" />
      <path
        d={p.d} fill="none" stroke={p.color} strokeLinecap="round"
        strokeWidth={on ? 3 : 2} strokeOpacity={on ? 1 : 0.6}
        strokeDasharray={reduced ? "6 6" : undefined} style={{ transition: "all .25s" }}
      />
      {!reduced && (
        <g className="ce-particles">
          {Array.from({ length: p.count }, (_, i) => {
            const begin = `${(-(p.dur * i) / p.count).toFixed(2)}s`;
            return (
              <circle key={i} r={p.r ?? 3.2} fill={p.color}>
                <animateMotion path={p.d} dur={`${p.dur}s`} begin={begin} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.88;1" dur={`${p.dur}s`} begin={begin} repeatCount="indefinite" />
                <animate attributeName="r" values="1.8;3.4;3.4;1.8" keyTimes="0;.12;.88;1" dur={`${p.dur}s`} begin={begin} repeatCount="indefinite" />
              </circle>
            );
          })}
          {/* direction arrow */}
          <path d="M-4.5 -3.2 L4.5 0 L-4.5 3.2z" fill={p.color} opacity={0.9}>
            <animateMotion path={p.d} dur={`${p.dur * 1.7}s`} begin={`${-p.dur * 0.6}s`} rotate="auto" repeatCount="indefinite" />
          </path>
        </g>
      )}
    </g>
  );
}

/** Tower stays still; blades spin around the hub (local origin) via CSS. */
export function WindTurbine({ x, y, s = 1, dur = 12 }: { x: number; y: number; s?: number; dur?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-2.5 6 L2.5 6 L5 170 L-5 170z" fill="#fff" stroke={C.grey} strokeWidth={0.8} />
      <g className="ce-spin" style={{ animationDuration: `${dur}s` }}>
        {[0, 120, 240].map((a) => (
          <path key={a} transform={`rotate(${a})`} d="M0 0 C-4 -20 -3 -50 0 -78 C3 -50 4 -20 0 0z" fill="#fff" stroke={C.grey} strokeWidth={0.8} />
        ))}
      </g>
      <circle r={5} fill={C.navy} />
    </g>
  );
}

export function Tree({ x, y, s = 1, delay = 0 }: { x: number; y: number; s?: number; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-2} y={-16} width={4} height={16} fill="#6B7F73" />
      <g className="ce-sway" style={{ animationDelay: `${delay}s` }}>
        <circle cx={0} cy={-30} r={15} fill="#5FAE74" />
        <circle cx={-8} cy={-22} r={10} fill="#4C9E65" />
        <circle cx={8} cy={-24} r={11} fill="#6DBB82" />
      </g>
    </g>
  );
}

/** Generic vessel body: front face + side shade + coloured cap. */
export function Vessel({ x, y, w, h, r = 8, cap = C.navy }: { x: number; y: number; w: number; h: number; r?: number; cap?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill="url(#ce-vessel)" stroke={C.grey} strokeWidth={0.8} />
      <rect x={x + w * 0.74} y={y + 2} width={w * 0.24} height={h - 4} rx={r / 2} fill={C.navy} opacity={0.07} />
      <rect x={x + 3} y={y} width={w - 6} height={5} rx={2.5} fill={cap} opacity={0.85} />
    </g>
  );
}
