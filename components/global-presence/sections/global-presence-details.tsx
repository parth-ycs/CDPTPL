"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import type {
  GlobalCategory,
  GlobalEntry,
  GlobalLocation,
} from "@/data/global-presence";
import { categoryStyles, flagUrl } from "./global-presence-map";

type Props = {
  category: GlobalCategory;
  /** One country in country view, every country with entries in View All. */
  groups: GlobalLocation[];
  isGlobal: boolean;
  selectedId: string | null;
  onSelect: (entryId: string) => void;
};

function EntryCard({
  entry,
  category,
  selected,
  onSelect,
}: {
  entry: GlobalEntry;
  category: GlobalCategory;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      data-entry-id={entry.id}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`w-full cursor-pointer rounded-xl border p-3.5 text-left transition-all duration-200 ${
        selected
          ? "border-brand-blue bg-brand-light/30 shadow-sm ring-1 ring-brand-blue"
          : "border-line bg-white hover:border-brand-blue/40 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${categoryStyles[category].bg}`}
        />
        <div className="min-w-0 flex-1">
          <p className="text-small font-semibold leading-snug text-ink">
            {entry.name}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-caption text-muted">
            <MapPin className="h-3 w-3" />
            {entry.city}
          </p>
          <p className="mt-2 text-small text-muted">{entry.summary}</p>

          {entry.type === "project" ? (
            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-pale px-2.5 py-0.5 text-caption font-medium text-ink">
                  {entry.industry}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-caption font-semibold capitalize ${
                    entry.status === "ongoing"
                      ? "bg-brand-light text-brand-blue"
                      : "border border-line bg-white text-muted"
                  }`}
                >
                  {entry.status}
                </span>
              </div>

              <Link
                href={entry.href}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-caption font-semibold text-brand-blue underline-offset-4 hover:underline"
              >
                View project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            entry.capabilities.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {entry.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full bg-pale px-2.5 py-0.5 text-caption font-medium text-ink"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function GlobalPresenceDetails({
  category,
  groups,
  isGlobal,
  selectedId,
  onSelect,
}: Props) {
  const style = categoryStyles[category];
  const listRef = useRef<HTMLDivElement>(null);

  const total = groups.reduce((n, g) => n + g[category].length, 0);
  const noun = total === 1 ? style.singular : style.label.toLowerCase();
  const only = groups.length === 1 ? groups[0] : null;

  // When a map marker is clicked, scroll its entry into view inside the list only.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !selectedId) return;
    const el = list.querySelector<HTMLElement>(
      `[data-entry-id="${selectedId}"]`,
    );
    if (!el) return;
    const top = el.offsetTop;
    if (
      top < list.scrollTop ||
      top + el.offsetHeight > list.scrollTop + list.clientHeight
    ) {
      list.scrollTo({ top: Math.max(top - 12, 0), behavior: "smooth" });
    }
  }, [selectedId]);

  // Smooth-scroll libraries (Lenis etc.) listen for wheel events on the window
  // and swallow them, so the list only scrolled by dragging its scrollbar.
  // Stop wheel events here while the list can still scroll in that direction.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const onWheel = (e: WheelEvent) => {
      const canScroll = list.scrollHeight > list.clientHeight + 1;
      const atTop = list.scrollTop <= 0 && e.deltaY < 0;
      const atBottom =
        list.scrollTop + list.clientHeight >= list.scrollHeight - 1 &&
        e.deltaY > 0;
      if (canScroll && !atTop && !atBottom) e.stopPropagation();
    };
    list.addEventListener("wheel", onWheel);
    return () => list.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-line bg-white">
      {/* Fixed heading */}
      <header className="shrink-0 border-b border-line px-5 py-4">
        {isGlobal || !only ? (
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand-blue">
              <Globe2 className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-heading text-h3 font-bold leading-tight text-brand-deep">
                Worldwide
              </h3>
              <p className="text-caption text-muted">
                {total} {noun} across {groups.length}{" "}
                {groups.length === 1 ? "country" : "countries"}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <img
              src={flagUrl(only.countryCode)}
              alt=""
              className="h-6 w-9 rounded-sm border border-line object-cover"
            />
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-h3 font-bold leading-tight text-brand-deep">
                {only.country}
              </h3>
              <p className="text-caption text-muted">{only.region}</p>
            </div>
            <span className="shrink-0 rounded-full bg-brand-light px-3 py-1 text-caption font-semibold text-brand-blue">
              {total} {noun}
            </span>
          </div>
        )}
      </header>

      {/* Independently scrolling list */}
      <div
        ref={listRef}
        data-lenis-prevent
        className="relative min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4"
      >
        {total === 0 ? (
          <p className="py-10 text-center text-small text-muted">
            No {style.label.toLowerCase()} listed yet.
          </p>
        ) : (
          groups.map((group) => (
            <section key={group.id} className="space-y-2.5">
              {isGlobal && (
                <div className="sticky top-0 z-10 -mx-1 flex items-center gap-2 bg-white/95 px-1 py-1.5 backdrop-blur">
                  <img
                    src={flagUrl(group.countryCode)}
                    alt=""
                    className="h-3.5 w-5 rounded-[2px] border border-line object-cover"
                  />
                  <span className="text-small font-semibold text-brand-deep">
                    {group.country}
                  </span>
                  <span className="text-caption text-muted">
                    {group[category].length}
                  </span>
                </div>
              )}
              {group[category].map((entry) => (
                <EntryCard
                  key={entry.id}
                  entry={entry}
                  category={category}
                  selected={entry.id === selectedId}
                  onSelect={() => onSelect(entry.id)}
                />
              ))}
            </section>
          ))
        )}
      </div>
    </aside>
  );
}