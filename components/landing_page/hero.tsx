"use client"
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Container from "../container";
import ButtonLink from "../ui/button-link";
import { useEffect, useRef } from "react";
import IndustrialEcosystemHero from "../landing_page/ecosystem_vis/IndustrialEcosystemHero";

import ScrollExpandVideo from "../ui/ScrollExpandVideo";


export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    let ticking = false;

    const updateBackground = () => {
      const rect = background.parentElement?.getBoundingClientRect();
      if (!rect) {
        ticking = false;
        return;
      }

      // Move the image subtly as the hero scrolls out of view.
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / rect.height)
      );

      const offset = scrollProgress * 250;

      background.style.transform = `scale(1.18) translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    updateBackground();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };

  }, []);
  return (
    <div>
      <section
  id="home"
  className="relative flex min-h-[820px] flex-col justify-center overflow-hidden bg-[#0a223e] pb-16 text-white sm:min-h-[92vh] xl:pb-0"
>
  <div
    ref={backgroundRef}
    className="absolute inset-0 bg-cover bg-center will-change-transform"
    style={{
      backgroundImage: "url('/images/Hero_BG.png')",
      transform: "scale(1.18) translate3d(0, 0, 0)",
    }}
  />
  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,37,.96)_0%,rgba(4,29,57,.78)_44%,rgba(5,26,50,.2)_100%),linear-gradient(0deg,rgba(3,16,31,.5),transparent_55%)]" />

  <Navbar />

  <Container className="relative z-10 pt-[70px] lg:pt-[88px]">
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
      <span className="h-0.5 w-[34px] bg-brand-red" />
      Science · Engineering · Technology
    </p>

    <h1 className="section-heading mt-[25px] mb-6 max-w-[800px]">
      Transforming Molecules,
      <br />
      Transforming
      <em className="not-italic text-brand-red-light"> Industries</em>
    </h1>

    <p className="max-w-[470px] text-base leading-[1.65] text-white/80">
     Integrated process engineering, advanced technologies, and sustainable industrial solutions-engineered in India for global industries.
    </p>

    <div className="mt-[34px] flex flex-col items-start gap-3.5 sm:flex-row">
      <ButtonLink href="#solutions" variant="red">
        Explore our solutions
      </ButtonLink>
      <ButtonLink href="#enquiry" variant="ghost" arrow={false}>
        Discuss a project
      </ButtonLink>
    </div>
  </Container>

  {/* Ecosystem visual: stacked below the text under xl, sits in the free right space from xl up */}
  {/* <div className="relative z-10 mt-10 w-full px-4 sm:px-6 xl:absolute xl:right-16 xl:top-1/2 xl:mt-0 xl:w-[50vw] xl:max-w-[860px] xl:-translate-y-1/2 xl:px-0">
    <div className="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(3,16,31,.45)] ring-1 ring-white/10">
      <IndustrialEcosystemHero />
    </div>
  </div> */}

  <a
    href="#solutions"
    className="absolute right-[18px] bottom-[34px] z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.17em] text-white/70 [writing-mode:vertical-rl] lg:right-10"
  >
    <span>Scroll to explore</span>
    <ArrowDown size={16} />
  </a>
</section>
      <ScrollExpandVideo
        src="/videos/Chemdist-Group-Video.mp4"
        poster="/images/Chemdist-poster.jpg"
      />
    </div>
  );
}
