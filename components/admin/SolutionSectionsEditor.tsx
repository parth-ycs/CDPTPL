"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";

import type { ServiceSection } from "@/components/solutions/types";

const SECTION_PRESETS: {
  type: ServiceSection["type"];
  label: string;
  create: () => ServiceSection;
}[] = [
  {
    type: "overview",
    label: "Overview (with KPIs)",
    create: () => ({
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "",
      description: "",
      kpis: [],
    }),
  },
  {
    type: "capabilities",
    label: "Capabilities",
    create: () => ({
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "",
      intro: "",
      items: [],
    }),
  },
  {
    type: "products",
    label: "Products",
    create: () => ({
      id: "products",
      label: "Products",
      type: "products",
      heading: "",
      intro: "",
      items: [],
    }),
  },
  {
    type: "services",
    label: "Services",
    create: () => ({
      id: "services",
      label: "Services",
      type: "services",
      heading: "",
      intro: "",
      items: [],
    }),
  },
  {
    type: "technical-specifications",
    label: "Technical Specifications",
    create: () => ({
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "",
      intro: "",
      items: [],
      note: "",
    }),
  },
  {
    type: "process-flow",
    label: "Process Flow / How It Works",
    create: () => ({
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "",
      intro: "",
      steps: [],
      note: "",
    }),
  },
  {
    type: "lifecycle-support",
    label: "Lifecycle Support",
    create: () => ({
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "",
      intro: "",
      items: [],
      note: "",
    }),
  },
  {
    type: "standards-certifications",
    label: "Standards & Certifications",
    create: () => ({
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "",
      intro: "",
      items: [],
      note: "",
    }),
  },
  {
    type: "performance-sustainability",
    label: "Performance & Sustainability",
    create: () => ({
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "",
      intro: "",
      metrics: [],
      note: "",
    }),
  },
  {
    type: "downloads-resources",
    label: "Downloads & Resources",
    create: () => ({
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "",
      intro: "",
      items: [],
      note: "",
    }),
  },
  {
    type: "faqs",
    label: "FAQs",
    create: () => ({
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "",
      intro: "",
      items: [],
    }),
  },
];

function MiniUploadButton({
  accept,
  label = "Upload",
  onUploaded,
}: {
  accept: string;
  label?: string;
  onUploaded: (url: string) => void;
}) {
  const [busy, setBusy] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) onUploaded(data.url);
      else alert(data.error || "Upload failed.");
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  return (
    <label className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg border border-stone-300 bg-stone-50 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-100">
      <Upload className="h-3.5 w-3.5" />
      {busy ? "Uploading…" : label}
      <input
        type="file"
        accept={accept}
        onChange={handleFile}
        disabled={busy}
        className="hidden"
      />
    </label>
  );
}

export default function SolutionSectionsEditor({
  sections,
  onChange,
}: {
  sections: ServiceSection[];
  onChange: (next: ServiceSection[]) => void;
}) {
  const [selectedType, setSelectedType] =
    useState<ServiceSection["type"]>("overview");

  function addSection() {
    const preset = SECTION_PRESETS.find((p) => p.type === selectedType);
    if (!preset) return;
    const created = preset.create();
    // Ensure unique section ID
    const existingIds = new Set(sections.map((s) => s.id));
    if (existingIds.has(created.id)) {
      created.id = `${created.id}-${sections.length + 1}`;
    }
    onChange([...sections, created]);
  }

  function updateAt(index: number, nextSection: ServiceSection) {
    const copy = [...sections];
    copy[index] = nextSection;
    onChange(copy);
  }

  function move(index: number, dir: -1 | 1) {
    const target = index + dir;
    if (target < 0 || target >= sections.length) return;
    const copy = [...sections];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    onChange(copy);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-stone-900">
            Page sections ({sections.length})
          </h2>
          <p className="text-xs text-stone-500">
            Each section appears in the sticky sidebar and main column.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedType}
            onChange={(e) =>
              setSelectedType(e.target.value as ServiceSection["type"])
            }
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900"
          >
            {SECTION_PRESETS.map((p) => (
              <option key={p.type} value={p.type}>
                {p.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={addSection}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-stone-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            Add section
          </button>
        </div>
      </div>

      {sections.map((section, idx) => (
        <div
          key={`${section.id}-${idx}`}
          className="space-y-4 rounded-xl border border-stone-200 bg-white p-5"
        >
          {/* Section Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="rounded bg-stone-100 px-2 py-0.5 font-mono text-xs font-medium text-stone-700">
                {section.type}
              </span>
              <span className="text-sm font-semibold text-stone-900">
                {section.label || section.id}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                title="Move up"
                className="rounded p-1.5 text-stone-500 hover:bg-stone-100 disabled:opacity-30"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => move(idx, 1)}
                disabled={idx === sections.length - 1}
                title="Move down"
                className="rounded p-1.5 text-stone-500 hover:bg-stone-100 disabled:opacity-30"
              >
                <ArrowDown className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onChange(sections.filter((_, i) => i !== idx))
                }
                title="Remove section"
                className="rounded p-1.5 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Common fields: anchor id, sidebar label, heading */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-medium text-stone-600">
                Anchor ID *
              </label>
              <input
                type="text"
                value={section.id}
                onChange={(e) =>
                  updateAt(idx, { ...section, id: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-600">
                Sidebar Label *
              </label>
              <input
                type="text"
                value={section.label}
                onChange={(e) =>
                  updateAt(idx, { ...section, label: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-600">
                Section Heading *
              </label>
              <input
                type="text"
                value={section.heading}
                onChange={(e) =>
                  updateAt(idx, { ...section, heading: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
              />
            </div>
          </div>

          {/* Type-specific editors */}
          {section.type === "overview" && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-stone-600">
                  Description *
                </label>
                <textarea
                  rows={3}
                  value={section.description}
                  onChange={(e) =>
                    updateAt(idx, { ...section, description: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-600">
                    KPIs
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateAt(idx, {
                        ...section,
                        kpis: [
                          ...(section.kpis ?? []),
                          { value: "", label: "" },
                        ],
                      })
                    }
                    className="text-xs font-medium text-stone-700 hover:text-stone-950"
                  >
                    + Add KPI
                  </button>
                </div>
                {(section.kpis ?? []).map((kpi, kIdx) => (
                  <div key={kIdx} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Value (e.g. 01)"
                      value={kpi.value}
                      onChange={(e) => {
                        const kpis = [...(section.kpis ?? [])];
                        kpis[kIdx] = { ...kpi, value: e.target.value };
                        updateAt(idx, { ...section, kpis });
                      }}
                      className="w-32 rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Label"
                      value={kpi.label}
                      onChange={(e) => {
                        const kpis = [...(section.kpis ?? [])];
                        kpis[kIdx] = { ...kpi, label: e.target.value };
                        updateAt(idx, { ...section, kpis });
                      }}
                      className="w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          kpis: (section.kpis ?? []).filter(
                            (_, i) => i !== kIdx,
                          ),
                        })
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {"intro" in section && (
            <div>
              <label className="block text-xs font-medium text-stone-600">
                Intro text
              </label>
              <textarea
                rows={2}
                value={section.intro ?? ""}
                onChange={(e) =>
                  updateAt(idx, { ...section, intro: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
              />
            </div>
          )}

          {/* Capabilities / Services / Lifecycle / Standards */}
          {(section.type === "capabilities" ||
            section.type === "services" ||
            section.type === "lifecycle-support" ||
            section.type === "standards-certifications") && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Items ({section.items.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      items: [
                        ...section.items,
                        { title: "", description: "" },
                      ],
                    } as ServiceSection)
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add item
                </button>
              </div>
              {section.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Title *"
                      value={item.title}
                      onChange={(e) => {
                        const items = section.items.map((entry, i) =>
                          i === iIdx ? { ...entry, title: e.target.value } : entry,
                        );
                        updateAt(idx, { ...section, items } as ServiceSection);
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    {section.type === "standards-certifications" && (
                      <input
                        type="text"
                        placeholder="Reference (optional)"
                        value={
                          "reference" in item ? (item.reference ?? "") : ""
                        }
                        onChange={(e) => {
                          const items = section.items.map((entry, i) =>
                            i === iIdx
                              ? { ...entry, reference: e.target.value }
                              : entry,
                          );
                          updateAt(idx, {
                            ...section,
                            items,
                          });
                        }}
                        className="w-60 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          items: section.items.filter((_, i) => i !== iIdx),
                        } as ServiceSection)
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Description *"
                    value={item.description}
                    onChange={(e) => {
                      const items = section.items.map((entry, i) =>
                        i === iIdx
                          ? { ...entry, description: e.target.value }
                          : entry,
                      );
                      updateAt(idx, { ...section, items } as ServiceSection);
                    }}
                    className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Products */}
          {section.type === "products" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Products ({section.items.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      items: [
                        ...section.items,
                        {
                          id: `product-${section.items.length + 1}`,
                          name: "",
                          category: "",
                          description: "",
                          image: { src: "/images/Hero_BG.png", alt: "" },
                          specs: [],
                        },
                      ],
                    })
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add product
                </button>
              </div>
              {section.items.map((prod, pIdx) => (
                <div
                  key={pIdx}
                  className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Product name *"
                      value={prod.name}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[pIdx] = { ...prod, name: e.target.value };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Category"
                      value={prod.category ?? ""}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[pIdx] = { ...prod, category: e.target.value };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-56 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          items: section.items.filter((_, i) => i !== pIdx),
                        })
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Description *"
                    value={prod.description}
                    onChange={(e) => {
                      const items = [...section.items];
                      items[pIdx] = { ...prod, description: e.target.value };
                      updateAt(idx, { ...section, items });
                    }}
                    className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Image URL *"
                      value={prod.image.src}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[pIdx] = {
                          ...prod,
                          image: { ...prod.image, src: e.target.value },
                        };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <MiniUploadButton
                      accept="image/*"
                      onUploaded={(url) => {
                        const items = [...section.items];
                        items[pIdx] = {
                          ...prod,
                          image: { ...prod.image, src: url },
                        };
                        updateAt(idx, { ...section, items });
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Image alt *"
                      value={prod.image.alt}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[pIdx] = {
                          ...prod,
                          image: { ...prod.image, alt: e.target.value },
                        };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500">
                      Specs (one per line)
                    </label>
                    <textarea
                      rows={2}
                      value={(prod.specs ?? []).join("\n")}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[pIdx] = {
                          ...prod,
                          specs: e.target.value
                            .split("\n")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        };
                        updateAt(idx, { ...section, items });
                      }}
                      className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Specifications */}
          {section.type === "technical-specifications" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Specifications ({section.items.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      items: [...section.items, { name: "", value: "" }],
                    })
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add spec row
                </button>
              </div>
              {section.items.map((spec, sIdx) => (
                <div key={sIdx} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Parameter name *"
                    value={spec.name}
                    onChange={(e) => {
                      const items = [...section.items];
                      items[sIdx] = { ...spec, name: e.target.value };
                      updateAt(idx, { ...section, items });
                    }}
                    className="w-1/3 rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Value *"
                    value={spec.value}
                    onChange={(e) => {
                      const items = [...section.items];
                      items[sIdx] = { ...spec, value: e.target.value };
                      updateAt(idx, { ...section, items });
                    }}
                    className="w-2/3 rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      updateAt(idx, {
                        ...section,
                        items: section.items.filter((_, i) => i !== sIdx),
                      })
                    }
                    className="p-1.5 text-stone-400 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Process Flow */}
          {section.type === "process-flow" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Steps ({section.steps.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      steps: [
                        ...section.steps,
                        { title: "", description: "", output: "" },
                      ],
                    })
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add step
                </button>
              </div>
              {section.steps.map((step, stIdx) => (
                <div
                  key={stIdx}
                  className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Step title *"
                      value={step.title}
                      onChange={(e) => {
                        const steps = [...section.steps];
                        steps[stIdx] = { ...step, title: e.target.value };
                        updateAt(idx, { ...section, steps });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Output (optional)"
                      value={step.output ?? ""}
                      onChange={(e) => {
                        const steps = [...section.steps];
                        steps[stIdx] = { ...step, output: e.target.value };
                        updateAt(idx, { ...section, steps });
                      }}
                      className="w-60 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          steps: section.steps.filter((_, i) => i !== stIdx),
                        })
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Step description *"
                    value={step.description}
                    onChange={(e) => {
                      const steps = [...section.steps];
                      steps[stIdx] = { ...step, description: e.target.value };
                      updateAt(idx, { ...section, steps });
                    }}
                    className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Performance & Sustainability */}
          {section.type === "performance-sustainability" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Metrics ({section.metrics.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      metrics: [
                        ...section.metrics,
                        { title: "", description: "", value: "", category: "" },
                      ],
                    })
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add metric
                </button>
              </div>
              {section.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Metric title *"
                      value={m.title}
                      onChange={(e) => {
                        const metrics = [...section.metrics];
                        metrics[mIdx] = { ...m, title: e.target.value };
                        updateAt(idx, { ...section, metrics });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Value"
                      value={m.value ?? ""}
                      onChange={(e) => {
                        const metrics = [...section.metrics];
                        metrics[mIdx] = { ...m, value: e.target.value };
                        updateAt(idx, { ...section, metrics });
                      }}
                      className="w-36 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          metrics: section.metrics.filter((_, i) => i !== mIdx),
                        })
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Description *"
                    value={m.description}
                    onChange={(e) => {
                      const metrics = [...section.metrics];
                      metrics[mIdx] = { ...m, description: e.target.value };
                      updateAt(idx, { ...section, metrics });
                    }}
                    className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Downloads & Resources */}
          {section.type === "downloads-resources" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Resources ({section.items.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      items: [
                        ...section.items,
                        {
                          title: "",
                          href: "",
                          description: "",
                          fileType: "PDF",
                        },
                      ],
                    })
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add resource
                </button>
              </div>
              {section.items.map((resItem, rIdx) => (
                <div
                  key={rIdx}
                  className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Resource title *"
                      value={resItem.title}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[rIdx] = { ...resItem, title: e.target.value };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="File type (PDF)"
                      value={resItem.fileType ?? ""}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[rIdx] = { ...resItem, fileType: e.target.value };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-28 rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          items: section.items.filter((_, i) => i !== rIdx),
                        })
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="File URL (/api/uploads/...)"
                      value={resItem.href}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[rIdx] = { ...resItem, href: e.target.value };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <MiniUploadButton
                      accept="application/pdf,image/*"
                      label="Upload PDF"
                      onUploaded={(url) => {
                        const items = [...section.items];
                        items[rIdx] = { ...resItem, href: url };
                        updateAt(idx, { ...section, items });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQs */}
          {section.type === "faqs" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">
                  Questions ({section.items.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateAt(idx, {
                      ...section,
                      items: [...section.items, { question: "", answer: "" }],
                    })
                  }
                  className="text-xs font-medium text-stone-700 hover:text-stone-950"
                >
                  + Add FAQ
                </button>
              </div>
              {section.items.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Question *"
                      value={faq.question}
                      onChange={(e) => {
                        const items = [...section.items];
                        items[fIdx] = { ...faq, question: e.target.value };
                        updateAt(idx, { ...section, items });
                      }}
                      className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateAt(idx, {
                          ...section,
                          items: section.items.filter((_, i) => i !== fIdx),
                        })
                      }
                      className="p-1.5 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Answer *"
                    value={faq.answer}
                    onChange={(e) => {
                      const items = [...section.items];
                      items[fIdx] = { ...faq, answer: e.target.value };
                      updateAt(idx, { ...section, items });
                    }}
                    className="w-full rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
                  />
                </div>
              ))}
            </div>
          )}

          {"note" in section && (
            <div>
              <label className="block text-xs font-medium text-stone-600">
                Footnote / disclaimer (optional)
              </label>
              <input
                type="text"
                value={section.note ?? ""}
                onChange={(e) =>
                  updateAt(idx, { ...section, note: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-stone-300 px-2.5 py-1.5 text-sm"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}