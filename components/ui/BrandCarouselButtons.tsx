
"use client";

import type { ButtonHTMLAttributes } from "react";

type BrandCarouselButtonsProps = {
  onPrevious?: () => void;
  onNext?: () => void;
  className?: string;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  "aria-label"?: string;
};

function BrandChevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={`h-7 w-7 transition-colors duration-300 ${
        direction === "left" ? "" : "rotate-180"
      }`}
    >
      <path
        d="M28 12 L15 21 Q11 24 15 27 L28 36"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  direction: "left" | "right";
  label: string;
};

function ArrowButton({
  direction,
  label,
  className = "",
  ...props
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`
        group flex h-14 w-14 shrink-0 items-center justify-center
        rounded-full border border-slate-200 bg-white
        text-red-600 shadow-sm
        transition-all duration-300 ease-out
        hover:border-blue-700 hover:bg-blue-700 hover:text-white
        hover:shadow-lg hover:shadow-blue-700/20
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-600 focus-visible:ring-offset-4
        disabled:pointer-events-none disabled:opacity-35
        ${className}
      `}
      {...props}
    >
      <BrandChevron direction={direction} />
    </button>
  );
}

export default function BrandCarouselButtons({
  onPrevious,
  onNext,
  className = "",
  previousDisabled = false,
  nextDisabled = false,
  "aria-label": ariaLabel = "Carousel navigation",
}: BrandCarouselButtonsProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`flex items-center gap-4 ${className}`}
    >
      <ArrowButton
        direction="left"
        label="Previous slide"
        onClick={onPrevious}
        disabled={previousDisabled}
        className="-translate-y-2"
      />

      <ArrowButton
        direction="right"
        label="Next slide"
        onClick={onNext}
        disabled={nextDisabled}
        className="translate-y-2"
      />
    </div>
  );
}
