"use client";

import { motion } from "framer-motion";
import Highlight from "@/components/ui/highlight";
import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";

export default function OverviewSection() {
  const locations = globalPresenceLocations;
  const { overview } = globalPresencePage;

  const officeCount = locations.reduce((sum, l) => sum + l.offices.length, 0);
  const projectCount = locations.reduce((sum, l) => sum + l.projects.length, 0);
  const industryCount = new Set(
    locations.flatMap((l) => l.projects.map((p) => p.industry)),
  ).size;

  const stats = [
    { label: "Countries", value: locations.length },
    { label: "Offices", value: officeCount },
    { label: "Projects", value: projectCount },
    { label: "Industries", value: industryCount },
  ];

  const { heading } = overview;
  // No extra space before punctuation like "," or "."
  const afterText = heading.after
    ? /^[,.;:!?]/.test(heading.after)
      ? heading.after
      : ` ${heading.after}`
    : "";
  const [lead, ...rest] = overview.paragraphs;

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
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
              <Highlight>{heading.highlight}</Highlight>
            </>
          )}
          {afterText}
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="space-y-4"
        >
          {lead && <p className="text-lead text-ink">{lead}</p>}
          {rest.map((text) => (
            <p key={text} className="max-w-[620px] text-body text-muted">
              {text}
            </p>
          ))}
        </motion.div>
      </div>

      {/* KPIs */}
      <dl className="mt-12 grid grid-cols-2 gap-y-8 lg:mt-16 lg:grid-cols-4">
        {stats.map(({ label, value }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="border-l border-line pl-5"
          >
            <dd className="font-heading text-h1 font-semibold tabular-nums tracking-tight text-brand-deep">
              {value}
            </dd>
            <dt className="mt-1 text-small text-muted">{label}</dt>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}