"use client"
import type { ComponentProps } from "react";

export default function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-[calc(100%-36px)] sm:w-[min(700px,calc(100%-40px))] lg:w-[min(1240px,calc(100%-80px))] ${className}`}
      {...props}
    />
  );
}
