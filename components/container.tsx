
import type { ComponentProps } from "react";

export default function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={[
        "mx-auto w-full",
        "max-w-[1440px]",
        "px-5 sm:px-8 lg:px-12 xl:px-16",
        "py-10 sm:py-12 lg:py-14 xl:py-16",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
