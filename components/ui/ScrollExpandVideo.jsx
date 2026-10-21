import { useEffect, useRef } from "react";

export default function ScrollExpandVideo({
  src,
  poster,
  startWidth = 80,
  startHeight = 60,
  startRadius = 24,
  scrollLength = 350, // needs to be > ~280 so there's room for expand + hold + collapse
}) {
  const trackRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const frame = frameRef.current;
    if (!track || !frame) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const rect = track.getBoundingClientRect();

      const begin = vh * 0.4;   // lead-in distance (same as before)
      const D = vh * 1.3;       // scroll distance used by expand AND collapse

      // ---- EXPAND: starts when track top is at `begin`, runs for D px ----
      const expandRaw = clamp((begin - rect.top) / D);

      // ---- COLLAPSE: mirror image, ends when the track bottom has
      // travelled `begin` px up past the viewport bottom (the video is
      // already moving up and out by then) ----
      const collapseRaw = clamp((vh - begin + D - rect.bottom) / D);

      const tExpand = ease(expandRaw);
      const tCollapse = ease(1 - collapseRaw); // exact reverse of the expand curve
      const t = reduceMotion ? 1 : Math.min(tExpand, tCollapse);

      frame.style.width = `${lerp(startWidth, 100, t)}vw`;
      frame.style.height = `${lerp(startHeight, 100, t)}vh`;
      frame.style.borderRadius = `${lerp(startRadius, 0, t)}px`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [startWidth, startHeight, startRadius]);

  return (
    <section
      ref={trackRef}
      style={{ position: "relative", height: `${scrollLength}vh` }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={frameRef}
          style={{
            width: `${startWidth}vw`,
            height: `${startHeight}vh`,
            borderRadius: startRadius,
            overflow: "hidden",
            willChange: "width, height, border-radius",
            background: "#cfe3f6",
          }}
        >
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}