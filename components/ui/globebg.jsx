import { useEffect, useRef } from "react";

/**
 * DottedGlobeBg
 * Dotted sphere background that slowly rotates right -> left.
 * No mouse interaction (pointer events are disabled), so it never
 * interferes with the map component on top.
 *
 * Usage:
 *   <div className="relative w-full h-[600px]">
 *     <DottedGlobeBg className="absolute inset-0" />
 *     <YourWorldMap className="relative z-10" />
 *   </div>
 */
export default function DottedGlobeBg({
  className = "",
  color = "#d9dde3", // dot colour
  rows = 28,         // latitude rings (more = denser)
  cols = 62,         // dots around the equator
  speed = 0.0005,    // rotation speed (radians per frame)
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots = [];
    for (let i = 1; i < rows; i++) {
      const lat = -Math.PI / 2 + (i / rows) * Math.PI;
      const n = Math.max(6, Math.round(cols * Math.cos(lat)));
      for (let j = 0; j < n; j++) dots.push({ lat, lon: (j / n) * Math.PI * 2 });
    }

    let w = 0, h = 0, raf, rot = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };

    const draw = () => {
    ctx.clearRect(0, 0, w, h);

    const R = Math.min(w, h) * 0.5;
    const cx = w / 2;
    const cy = h / 2;

    // Tilt the globe to simulate a higher viewing angle
    const tilt = 0.35; // Increase for a stronger tilt
    const cosTilt = Math.cos(tilt);
    const sinTilt = Math.sin(tilt);

    ctx.fillStyle = color;

    for (const d of dots) {
        const lon = d.lon + rot;

        const x = Math.cos(d.lat) * Math.sin(lon);
        const y = Math.sin(d.lat);
        const z = Math.cos(d.lat) * Math.cos(lon);

        // Rotate vertically to change the viewing angle
        const tiltedY = y * cosTilt + z * sinTilt;
        const tiltedZ = -y * sinTilt + z * cosTilt;

        if (tiltedZ < 0.02) continue;

        const rx = 5.2 * tiltedZ + 0.6;
        const ry = rx * (0.55 + 0.45 * tiltedZ);

        ctx.globalAlpha = 0.35 + 0.65 * tiltedZ;
        ctx.beginPath();
        ctx.ellipse(
        cx + x * R,
        cy + tiltedY * R,
        rx,
        ry,
        0,
        0,
        Math.PI * 2
        );
        ctx.fill();
    }

    ctx.globalAlpha = 1;
    };

    const tick = () => {
      rot -= speed; // decreasing = dots travel right -> left
      draw();
      raf = requestAnimationFrame(tick);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [color, rows, cols, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block", pointerEvents: "none" }}
    />
  );
}