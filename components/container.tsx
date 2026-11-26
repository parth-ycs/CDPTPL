import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-[1440px]",
        // fluid padding (20px on mobile -> 64px on large screens), no breakpoints
        "px-[clamp(1.25rem,5vw,4rem)] py-[clamp(2.5rem,5vw,4rem)]",
        className,
      )}
      {...props}
    />
  );
}