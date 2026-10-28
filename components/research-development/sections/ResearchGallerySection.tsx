
import Image from "next/image";
import { rdSectionData } from "@/data/r&d";

export default function ResearchGallerySection() {
  const data = rdSectionData.gallery;

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
        {data.eyebrow}
      </p>

      <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
        {data.heading}
      </h2>

      <p className="mt-5 max-w-[760px] leading-8 text-brand-deep/70">
        {data.description}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {rdSectionData.slides.map((slide, index) => (
          <article
            key={slide.title}
            className="group overflow-hidden border border-line bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-pale">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-widest text-white drop-shadow">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-brand-deep">
                {slide.title}
              </h3>

              {slide.description && (
                <p className="mt-2 text-sm leading-7 text-brand-deep/70">
                  {slide.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
