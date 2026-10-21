"use client"
import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="CHEMDIST GROUP"
      width={160}
      height={50}
      priority
      className={`h-auto w-[110px] object-contain sm:w-[120px] lg:w-[130px] `}
    />
  );
}