"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";

interface PageOverviewProps {
  heading: {
    before: string;
    highlight?: string;
    after: string;
  };
  description: string;
}

export default function PageOverview({ heading, description }: PageOverviewProps) {
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
            {heading.before}{" "}
            {heading.highlight && (
              <span className="text-brand-blue">{heading.highlight}</span>
            )}{" "}
            {heading.after}
          </motion.h2>

          {/* Description (slightly delayed for a staggered feel) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-lead text-ink">{description}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}