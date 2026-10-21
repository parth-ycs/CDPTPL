"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { C, PIPES, PILL_H, PILL_W, RIVER, TECHS, type Tech, type TechId } from "./data";
import { Pipeline, Tree, Vessel, WindTurbine } from "./parts";

const wave = (y: number) => `M-40 ${y} q10 -5 20 0` + " t20 0".repeat(66);

const CSS = `
.ce-root{--ce-navy:${C.navy};--ce-blue:${C.blue}}
.ce-spin{animation:ce-spin 12s linear infinite}
@keyframes ce-spin{to{transform:rotate(360deg)}}
.ce-sway{animation:ce-sway 6s ease-in-out infinite alternate}
@keyframes ce-sway{from{transform:rotate(-1.6deg)}to{transform:rotate(1.6deg)}}
.ce-wave{animation:ce-wave 7s linear infinite}
@keyframes ce-wave{to{transform:translateX(-40px)}}
.ce-bubble{animation:ce-rise 4.5s ease-in infinite;opacity:0}
@keyframes ce-rise{0%{transform:translateY(0);opacity:0}15%{opacity:.8}100%{transform:translateY(-62px);opacity:0}}
.ce-steam{animation:ce-steam 5s ease-out infinite;opacity:0}
@keyframes ce-steam{0%{transform:translate(0,0) scale(.6);opacity:0}20%{opacity:.5}100%{transform:translate(6px,-34px) scale(1.5);opacity:0}}
.ce-pulse{animation:ce-pulse 3.6s ease-in-out infinite}
@keyframes ce-pulse{0%,100%{opacity:.1}50%{opacity:.4}}
.ce-needle{animation:ce-needle 5s ease-in-out infinite alternate}
@keyframes ce-needle{from{transform:rotate(-28deg)}to{transform:rotate(22deg)}}
.ce-level{animation:ce-level 6s ease-in-out infinite alternate}
@keyframes ce-level{from{transform:translateY(0)}to{transform:translateY(-4px)}}
.ce-shimmer{animation:ce-shimmer 9s ease-in-out infinite alternate}
@keyframes ce-shimmer{from{opacity:.55}to{opacity:.95}}
.ce-pipe{transition:opacity .25s}
.ce-pipe.dim{opacity:.6}
.ce-pipe .ce-particles{opacity:.8;transition:opacity .25s,filter .25s}
.ce-pipe.on .ce-particles{opacity:1;filter:drop-shadow(0 0 3px currentColor)}
.ce-pipe.dim .ce-particles{opacity:.45}
.ce-eq{transition:filter .3s}
.ce-eq.on{filter:brightness(1.1) drop-shadow(0 0 7px rgba(22,133,216,.5))}
.ce-pill{cursor:pointer;outline:none;filter:drop-shadow(0 4px 8px rgba(16,43,70,.12))}
.ce-pill:focus-visible rect{stroke:${C.blue};stroke-width:2}
.ce-off *{animation-play-state:paused!important}
.ce-rm *{animation:none!important}
@media (max-width:767px){.ce-desk{display:none}}
`;

function Connector({ t, active, dim }: { t: Tech; active: boolean; dim: boolean }) {
  const [ax, ay] = t.anchor;
  const [tx, ty] = t.target;
  const k = (ty - ay) * 0.55;
  return (
    <g style={{ transition: "opacity .25s", opacity: dim ? 0.5 : 1 }}>
      <path
        d={`M${ax} ${ay} C${ax} ${ay + k} ${tx} ${ty - k} ${tx} ${ty}`}
        fill="none" stroke={active ? t.color : C.grey} strokeWidth={active ? 1.8 : 1} strokeDasharray={active ? undefined : "3 4"}
      />
      <circle cx={tx} cy={ty} r={active ? 4.5 : 3} fill="#fff" stroke={active ? t.color : C.grey} strokeWidth={1.5} />
    </g>
  );
}

function Pill({ t, active, onHover, onToggle }: { t: Tech; active: boolean; onHover: (id: TechId | null) => void; onToggle: (id: TechId) => void }) {
  const [x, y] = t.pill;
  const key = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(t.id); }
  };
  return (
    <motion.g
      className="ce-pill" role="button" tabIndex={0} aria-pressed={active} aria-label={`${t.title}: ${t.blurb}`}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      animate={{ y: active ? -3 : 0, scale: active ? 1.04 : 1 }} transition={{ duration: 0.18 }}
      onMouseEnter={() => onHover(t.id)} onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(t.id)} onBlur={() => onHover(null)}
      onClick={() => onToggle(t.id)} onKeyDown={key}
    >
      <rect x={x} y={y} width={PILL_W} height={PILL_H} rx={22} fill="#fff" stroke={active ? t.color : "#D5E1EA"} strokeWidth={1} />
      <g transform={`translate(${x + 14} ${y + 10}) scale(1)`} fill="none" stroke={t.color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d={t.icon} />
      </g>
      <text x={x + 44} y={y + PILL_H / 2} dominantBaseline="central" fontSize={t.title.length > 20 ? 11.5 : 14} fontWeight={600} fill={C.navy} style={{ fontFamily: "inherit" }}>
        {t.title}
      </text>
    </motion.g>
  );
}

export default function IndustrialEcosystemHero({ className = "" }: { className?: string }) {
  const reduced = !!useReducedMotion();
  const [hover, setHover] = useState<TechId | null>(null);
  const [sel, setSel] = useState<TechId | null>(null);
  const focus = hover ?? sel;
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const toggle = (id: TechId) => setSel((s) => (s === id ? null : id));
  const on = (id: TechId) => focus === id;
  const eq = (id: TechId) => `ce-eq${on(id) ? " on" : ""}`;
  const active = TECHS.find((t) => t.id === focus);

  // Pause SMIL + CSS animation while off-screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(([e]) => {
      const svg = svgRef.current;
      if (e.isIntersecting) { svg?.unpauseAnimations?.(); root.classList.remove("ce-off"); }
      else { svg?.pauseAnimations?.(); root.classList.add("ce-off"); }
    });
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef} className={`ce-root w-full ${reduced ? "ce-rm" : ""} ${className}`}
      onKeyDown={(e) => { if (e.key === "Escape") { setSel(null); setHover(null); } }}
    >
      <style>{CSS}</style>
      <svg
        ref={svgRef} viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid meet" role="group"
        aria-label="Animated illustration of an industrial process plant connected to hydrogen, carbon capture, fuels, water treatment, chemicals and bioplastics"
        className="block h-auto w-full max-w-full" style={{ background: C.mist }}
      >
        <defs>
          <linearGradient id="ce-vessel" x1="0" x2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#C9D6E1" /></linearGradient>
          <linearGradient id="ce-hill-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#DDEFE2" /><stop offset="1" stopColor="#BFE0C9" /></linearGradient>
          <linearGradient id="ce-hill-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#B4DABF" /><stop offset="1" stopColor="#9CCDAA" /></linearGradient>
          <mask id="ce-river-mask"><path d={RIVER} fill="none" stroke="#fff" strokeWidth={34} /></mask>
          <clipPath id="ce-reactor-clip"><rect x={674} y={326} width={62} height={98} rx={7} /></clipPath>
        </defs>

        {/* ENVIRONMENT */}
        <g aria-hidden="true">
          <path d="M0 330 C150 250 300 290 420 360 C600 300 800 300 960 340 C1060 280 1140 290 1200 320 L1200 640 L0 640Z" fill="url(#ce-hill-b)" />
          <polygon points="200,440 600,300 1170,440 600,560" fill="#fff" stroke="#D5E1EA" />
          <path d="M0 470 C120 420 240 440 330 500 L330 640 L0 640Z" fill="url(#ce-hill-f)" />
          <path d="M1200 470 C1100 440 1000 480 930 540 L930 640 L1200 640Z" fill="url(#ce-hill-f)" />
          <WindTurbine x={120} y={128} dur={11} />
          <WindTurbine x={250} y={185} s={0.6} dur={14} />
          <WindTurbine x={1090} y={120} dur={17} />
          {[[200, 322, 0.9], [330, 340, 0.7], [1010, 322, 0.9], [1160, 330, 1], [40, 505, 1.1], [95, 525, 0.9], [300, 545, 0.8], [1110, 520, 0.9], [1170, 560, 1], [990, 570, 0.7]].map(([x, y, s], i) => (
            <Tree key={i} x={x} y={y} s={s} delay={-i * 0.9} />
          ))}
          {/* River */}
          <g className={eq("water")}>
            <path d={RIVER} fill="none" stroke="#BFE0F5" strokeWidth={40} />
            <path d={RIVER} fill="none" stroke={C.blue} strokeOpacity={on("water") ? 0.45 : 0.2} strokeWidth={30} style={{ transition: "stroke-opacity .3s" }} />
            <g mask="url(#ce-river-mask)" className="ce-shimmer">
              {[572, 580, 588].map((y, i) => (
                <g key={y} className="ce-wave" style={{ animationDuration: `${6 + i * 1.5}s`, animationDelay: `${-i * 2}s` }}>
                  <path d={wave(y)} fill="none" stroke="#fff" strokeWidth={1.4} strokeOpacity={0.75} />
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* PLANT */}
        <g aria-hidden="true">
          {/* structural pipes */}
          <g stroke={C.grey} strokeWidth={4} strokeLinecap="round" opacity={0.6}>
            <path d="M590 300 L610 300" /><path d="M670 370 L644 370" /><path d="M773 395 L810 395" /><path d="M740 410 L760 410" />
          </g>

          {/* heat exchanger */}
          <ellipse className="ce-pulse" cx={475} cy={430} rx={70} ry={26} fill={C.red} />
          <Vessel x={420} y={415} w={110} h={30} r={15} cap={C.red} />
          {[445, 465, 485, 505].map((x) => <path key={x} d={`M${x} 421 V441`} stroke={C.grey} strokeWidth={0.8} />)}

          {/* distillation columns */}
          <g className={eq("fuels")}>
            <Vessel x={550} y={215} w={40} h={215} r={14} cap={C.green} />
            <Vessel x={610} y={245} w={34} h={185} r={13} cap={C.green} />
            {[245, 267, 289, 311, 333, 355, 377, 399].map((y) => <path key={y} d={`M553 ${y} H587`} stroke={C.grey} strokeWidth={0.7} opacity={0.6} />)}
            {[275, 297, 319, 341, 363, 385].map((y) => <path key={y} d={`M613 ${y} H641`} stroke={C.grey} strokeWidth={0.7} opacity={0.6} />)}
            {/* pressure gauge */}
            <circle cx={570} cy={262} r={9} fill="#fff" stroke={C.grey} />
            <g transform="translate(570 262)"><line className="ce-needle" x1={0} y1={0} x2={0} y2={-6} stroke={C.red} strokeWidth={1.4} strokeLinecap="round" /></g>
          </g>

          {/* reactor with liquid + bubbles */}
          <rect x={670} y={320} width={70} height={110} rx={10} fill="#fff" fillOpacity={0.55} stroke={C.grey} strokeWidth={0.8} />
          <g clipPath="url(#ce-reactor-clip)">
            <g className="ce-level">
              <rect x={674} y={368} width={62} height={60} fill={C.blue} fillOpacity={0.35} />
              <g className="ce-wave" style={{ animationDuration: "4s" }}><path d={wave(368)} fill="none" stroke={C.blue} strokeWidth={1.5} /></g>
            </g>
            {[[690, 418, 0], [706, 424, 1.4], [722, 420, 2.8], [698, 426, 3.6]].map(([x, y, d], i) => (
              <circle key={i} className="ce-bubble" cx={x} cy={y} r={2.4} fill="#fff" stroke={C.blue} strokeWidth={0.8} style={{ animationDelay: `${d}s` }} />
            ))}
          </g>
          <rect x={670} y={320} width={70} height={6} rx={3} fill={C.navy} opacity={0.85} />

          {/* furnace stack + exhaust (source of CO2) */}
          <g className={eq("co2")}>
            <Vessel x={760} y={290} w={26} h={140} r={6} cap={C.co2} />
            {[0, 1.7, 3.4].map((d, i) => (
              <circle key={i} className="ce-steam" cx={773} cy={284} r={5} fill={C.co2} fillOpacity={0.35} style={{ animationDelay: `${d}s` }} />
            ))}
            <text x={795} y={286} fontSize={11} fontWeight={600} fill={C.co2} style={{ fontFamily: "inherit" }}>CO₂</text>
            {/* capture unit */}
            <Vessel x={810} y={340} w={70} h={90} r={8} cap={C.co2} />
            <rect x={822} y={356} width={46} height={58} rx={4} fill="none" stroke={C.grey} strokeDasharray="2 3" />
            <text x={845} y={390} textAnchor="middle" fontSize={11} fontWeight={600} fill={C.navy} style={{ fontFamily: "inherit" }}>CO₂</text>
          </g>

          {/* electrolyzer */}
          <g className={eq("hydrogen")}>
            <rect x={290} y={385} width={80} height={55} rx={6} fill="#fff" stroke={C.grey} strokeWidth={0.8} />
            {[0, 1, 2].map((i) => <rect key={i} x={298 + i * 24} y={393} width={18} height={39} rx={3} fill={C.blue} fillOpacity={0.18} stroke={C.blue} strokeWidth={0.8} />)}
            <text x={330} y={378} textAnchor="middle" fontSize={12} fontWeight={700} fill={C.blue} style={{ fontFamily: "inherit" }}>H₂</text>
          </g>

          {/* chemical vessel, silo, fuel tank */}
          <g className={eq("chemicals")}><Vessel x={920} y={370} w={60} h={60} r={10} cap={C.green} /></g>
          <g className={eq("plastics")}>
            <Vessel x={1000} y={372} w={44} h={58} r={10} cap={C.green} />
            {[0, 1, 2].map((i) => <circle key={i} cx={1011 + i * 10} cy={418} r={2.5} fill={C.green} opacity={0.5} />)}
          </g>
          <g className={eq("fuels")}><Vessel x={1070} y={390} w={70} h={45} r={12} cap={C.green} /></g>

          {/* valve indicators */}
          {[[540, 457], [740, 411], [904, 470]].map(([x, y], i) => (
            <circle key={i} className="ce-pulse" cx={x} cy={y} r={3.5} fill={C.green} style={{ animationDelay: `${-i * 1.2}s`, animationDuration: `${3 + i}s` }} />
          ))}

          {/* water treatment unit */}
          <g className={eq("water")}>
            <rect x={170} y={506} width={100} height={48} rx={6} fill="#fff" stroke={C.grey} strokeWidth={0.8} />
            {[203, 237].map((x) => <path key={x} d={`M${x} 512 V548`} stroke={C.blue} strokeOpacity={0.5} strokeWidth={1.2} strokeDasharray="3 3" />)}
            <path d="M170 530 H270" stroke={C.blue} strokeOpacity={0.25} strokeWidth={5} />
            {!reduced && [0, 1, 2].map((i) => (
              <circle key={i} cy={530} r={2.6}>
                <animate attributeName="cx" values="176;264" dur="3.4s" begin={`${-i * 1.13}s`} repeatCount="indefinite" />
                <animate attributeName="fill" values={`${C.silt};${C.silt};${C.blue}`} keyTimes="0;.35;.7" dur="3.4s" begin={`${-i * 1.13}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* PIPELINES + particles */}
          {PIPES.map((p) => <Pipeline key={p.id} p={p} focus={focus} reduced={reduced} />)}
        </g>

        {/* LABELS + CONNECTORS (hidden on small screens; chips below take over) */}
        <g className="ce-desk">
          {TECHS.map((t) => <Connector key={t.id} t={t} active={on(t.id)} dim={!!focus && !on(t.id)} />)}
          {TECHS.map((t) => <Pill key={t.id} t={t} active={on(t.id)} onHover={setHover} onToggle={toggle} />)}
        </g>
      </svg>

      {/* Compact mobile selector */}
      <div className="flex gap-2 overflow-x-auto px-3 py-3 md:hidden" role="group" aria-label="Technology areas">
        {TECHS.map((t) => (
          <button
            key={t.id} type="button" aria-pressed={sel === t.id} onClick={() => toggle(t.id)}
            className="shrink-0 rounded-full border bg-white px-4 py-2 text-sm font-semibold shadow-sm"
            style={{ color: C.navy, borderColor: sel === t.id ? t.color : "#D5E1EA" }}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* Supporting text (fixed height: no layout shift) */}
      <div className="min-h-[4.5rem] px-4 py-3" aria-live="polite" style={{ color: C.navy }}>
        {active ? (
          <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <p className="font-semibold">{active.title}</p>
            <p className="text-sm opacity-80">{active.blurb}</p>
          </motion.div>
        ) : (
          <p className="text-sm opacity-70">Select a technology to follow its stream through the plant. Press Escape to reset.</p>
        )}
      </div>
    </div>
  );
}
