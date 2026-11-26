import { Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// Loaded here so no tailwind.config or layout changes are needed.
const accent = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  display: "swap",
});

type Tone = "blue" | "red" | "inherit";

const toneClasses: Record<Tone, string> = {
  blue: "text-brand-blue",
  red: "text-brand-red-light",
  inherit: "text-inherit", // keeps the parent's colour (good for dark sections)
};

interface HighlightProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export default function Highlight({
  children,
  tone = "blue",
  className = "",
}: HighlightProps) {
  return (
    <em
      className={twMerge(
        "text-[1.1em] italic leading-none tracking-normal",
        toneClasses[tone],
        className, // last, so it wins over the defaults above
      )}
    >
      {children}
    </em>
  );
}