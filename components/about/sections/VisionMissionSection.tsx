"use client";

import { useEffect, useRef, useState } from "react";
import { aboutPageData } from "@/data/about";
import WhatWeStandForSection from "./WhatWeStandForSection";

type StoryItem = {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  background: string;
};

type ScrollDirection = "down" | "up";

const REVEAL_DURATION = 0.72;
const MOVE_DURATION = 650;
const MOVE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

// Scroll behavior (measured in viewport heights)
const TIMELINE_SPEED = 0.6;
const FINAL_HOLD = 0.15;
const OVERLAY_DURATION = 1;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const smoothstep = (value: number) => {
  const x = clamp(value);
  return x * x * (3 - 2 * x);
};

function getHighlightIndexes(text: string, highlight = "") {
  const words = text.split(/\s+/);
  const normalize = (word: string) =>
    word.toLowerCase().replace(/[^\w]/g, "");

  const target = highlight
    .split(/\s+/)
    .map(normalize)
    .filter(Boolean);

  const normalized = words.map(normalize);

  if (!target.length) return new Set<number>();

  for (let i = 0; i <= normalized.length - target.length; i++) {
    if (
      target.every(
        (word, index) => normalized[i + index] === word
      )
    ) {
      return new Set(target.map((_, index) => i + index));
    }
  }

  return new Set<number>();
}

/* Heading: progressive letter reveal */
function AnimatedHeading({
  title,
  progress,
  className = "",
}: {
  title: string;
  progress: number;
  className?: string;
}) {
  const letters = title.split("");

  return (
    <h2 className={className}>
      {letters.map((letter, index) => {
        const amount = clamp(progress * letters.length - index);

        return (
          <span
            key={`${letter}-${index}`}
            style={{
              color: `rgba(255,255,255,${0.18 + amount * 0.82})`,
            }}
          >
            {letter}
          </span>
        );
      })}
    </h2>
  );
}

/* Description: progressive word reveal */
function AnimatedDescription({
  item,
  progress,
}: {
  item: StoryItem;
  progress: number;
}) {
  const words = item.description.split(/\s+/);
  const highlighted = getHighlightIndexes(
    item.description,
    item.highlight
  );

  return (
    <p className="max-w-[620px] text-base font-light leading-[1.75] tracking-[-0.015em] sm:text-lg sm:leading-[1.8] lg:text-[23px] lg:leading-[1.75]">
      {words.map((word, index) => {
        const amount = clamp(progress * words.length - index);

        const baseColor = highlighted.has(index)
          ? "96,165,250"
          : "255,255,255";

        return (
          <span
            key={`${word}-${index}`}
            style={{
              color: `rgba(${baseColor},${0.15 + amount * 0.85})`,
            }}
          >
            {word}
            {index !== words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

const headingClass =
  "text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.9] tracking-[-0.075em]";

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const previousProgressRef = useRef<number | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("down");

  const items = aboutPageData.visionMission.items as StoryItem[];
  const itemCount = items.length;

  useEffect(() => {
    let raf = 0;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
        const scrollDistance =
        rect.height -
        (FINAL_HOLD + OVERLAY_DURATION + 1) * window.innerHeight;

        if (scrollDistance <= 0) return;

        const nextProgress = clamp(-rect.top / scrollDistance);


      const previousProgress = previousProgressRef.current;

      if (previousProgress !== null) {
        if (nextProgress > previousProgress + 0.0001) {
          setScrollDirection("down");
        } else if (nextProgress < previousProgress - 0.0001) {
          setScrollDirection("up");
        }
      }

      previousProgressRef.current = nextProgress;
      setScrollProgress(nextProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!itemCount) return null;


  const totalTimeline =
    itemCount - 1 + REVEAL_DURATION;

  const timeline = clamp(
    scrollProgress * totalTimeline,
    0,
    totalTimeline
  );

  const activeIndex = Math.min(
    Math.floor(timeline),
    itemCount - 1
  );

  const phase = timeline - activeIndex;

  const isTransitioning =
    activeIndex < itemCount - 1 &&
    phase >= REVEAL_DURATION;

  /*
   * During a transition:
   * - Previous item enters the queue.
   * - Next item occupies the active position.
   */
  const completedCount = isTransitioning
    ? activeIndex + 1
    : activeIndex;

  const displayIndex = isTransitioning
    ? activeIndex + 1
    : activeIndex;

  const activeItem = items[displayIndex];

  /*
   * Text reveal:
   * - During transition, incoming text starts subdued.
   * - Once the transition completes, its reveal follows scroll.
   */
  const activeReveal = isTransitioning
    ? 0
    : smoothstep(phase / REVEAL_DURATION);

  /*
   * Background crossfade is scroll-driven and reversible.
   */
  const backgroundProgress = isTransitioning
    ? smoothstep(
        (phase - REVEAL_DURATION) / (1 - REVEAL_DURATION)
      )
    : 0;

  const backgroundItem = isTransitioning
    ? items[activeIndex]
    : activeItem;

  const incomingBackground = isTransitioning
    ? items[activeIndex + 1]
    : null;

  /*
   * Queue layout:
   * All completed headings occupy a compact vertical stack
   * above the divider.
   */
  const queueGap =
    completedCount > 1
      ? Math.min(9, 34 / (completedCount - 1))
      : 9;

  const queueStart = 17;

  /*
   * Incoming content waits for the outgoing heading movement
   * when scrolling down. On reverse scroll, no delay is applied.
   */
  const incomingDelay =
    isTransitioning && scrollDirection === "down"
      ? MOVE_DURATION
      : 0;

  const lineProgress = smoothstep(
    timeline / totalTimeline
  );

  const lineScale = 0.14 + lineProgress * 0.86;

  return (
    <>
    <section
        ref={sectionRef}
        className="
            relative z-10
            left-1/2 w-screen -translate-x-1/2
            bg-[#061426]
        "
        style={{
            height: `${
                (
                totalTimeline * TIMELINE_SPEED +
                FINAL_HOLD +
                OVERLAY_DURATION +
                1
                ) * 100
            }svh`,
            }}
        >
      
      <div className="sticky top-0 h-[100svh] min-h-[620px] w-full overflow-hidden text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${backgroundItem.background}")`,
              opacity: 1 - backgroundProgress,
            }}
          />

          {incomingBackground && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${incomingBackground.background}")`,
                opacity: backgroundProgress,
              }}
            />
          )}

          <div className="absolute inset-0 bg-[#041426]/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#041426]/45 via-transparent to-[#041426]/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#041426]/35 via-transparent to-[#041426]/20" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* SHARED DIVIDER */}
          <div className="absolute left-0 right-0 top-[46%] h-px bg-white/20">
            <div
              className="h-full origin-left bg-white/80"
              style={{
                transform: `scaleX(${lineScale})`,
                transformOrigin: "left center",
                transition:
                  "transform 180ms linear",
                willChange: "transform",
              }}
            />

            <span className="absolute -top-[2px] left-0 h-[5px] w-[5px] rounded-full bg-red-500" />
          </div>

          {/* ALL HEADINGS — ONE ELEMENT PER ITEM */}
          {items.map((item, index) => {
            const isCompleted = index < completedCount;
            const isActive = index === displayIndex;

            const queueTop =
              queueStart + index * queueGap;

            const topPosition = isCompleted
              ? queueTop
              : 52;

            const scale = isCompleted ? 0.58 : 1;

            const opacity = isCompleted
              ? 0.43
              : isActive
                ? 1
                : 0;

            const opacityDelay =
              isActive && isTransitioning
                ? incomingDelay
                : 0;

            return (
              <div
                key={item.id}
                className="absolute left-6 right-6 sm:left-10 sm:right-10 lg:left-16 lg:right-16"
                style={{
                  top: `${topPosition}%`,
                  opacity,
                  transform: `scale(${scale})`,
                  transformOrigin: "left top",
                  transition: [
                    `top ${MOVE_DURATION}ms ${MOVE_EASING}`,
                    `transform ${MOVE_DURATION}ms ${MOVE_EASING}`,
                    "opacity 300ms ease",
                  ].join(", "),
                  transitionDelay: [
                    "0ms",
                    "0ms",
                    `${opacityDelay}ms`,
                  ].join(", "),
                  pointerEvents: isActive ? "auto" : "none",
                  willChange: "top, transform, opacity",
                }}
              >
                <AnimatedHeading
                  title={item.title}
                  progress={
                    isCompleted
                      ? 1
                      : isActive
                        ? activeReveal
                        : 0
                  }
                  className={headingClass}
                />
              </div>
            );
          })}

          {/* DESCRIPTIONS — ONLY THE ACTIVE ITEM IS VISIBLE */}
          {items.map((item, index) => {
            const isActive = index === displayIndex;

            const descriptionDelay =
              isActive && isTransitioning
                ? incomingDelay
                : 0;

            return (
              <div
                key={`description-${item.id}`}
                className="absolute left-6 right-6 top-[52%] sm:left-10 sm:right-10 lg:left-16 lg:right-16"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 250ms ease",
                  transitionDelay: `${descriptionDelay}ms`,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                  <div />

                  <div className="lg:pt-1">
                    <AnimatedDescription
                      item={item}
                      progress={isActive ? activeReveal : 0}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <div className="relative z-20 -mt-[100svh]">
        <WhatWeStandForSection />
    </div>
    </>
  );
}