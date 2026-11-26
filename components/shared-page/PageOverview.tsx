"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import Highlight from "@/components/ui/highlight";

interface PageOverviewProps {
  heading: {
    before: string;
    highlight?: string;
    after?: string;
  };
  description: string | readonly string[];
  highlightClassName?: string;
  highlightTone?: "blue" | "red" | "inherit";
}

export default function PageOverview({
  heading,
  description,
  highlightClassName,
  highlightTone = "blue",
}: PageOverviewProps) {
  const paragraphs: readonly string[] = typeof description === "string" ? [description] : description;
  
  return (
    <section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-line pt-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-h2 max-w-2xl font-heading font-semibold tracking-tight text-brand-deep"
          >
            {heading.before}
            {heading.highlight && (
              <>
                {" "}
                <Highlight tone={highlightTone} className={highlightClassName}>
                  {heading.highlight}
                </Highlight>
              </>
            )}
            {heading.after && ` ${heading.after}`}
          </motion.h2>

          {/* Description (slightly delayed for a staggered feel) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="space-y-4"
          >
            {paragraphs.map((text, i) => (
              <p key={i} className="text-lead text-ink">
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}