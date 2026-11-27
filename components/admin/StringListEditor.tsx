"use client";

import { Plus, Trash2 } from "lucide-react";

type Props = {
  label: string;
  items: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  addLabel?: string;
};

export default function StringListEditor({
  label,
  items,
  onChange,
  placeholder = "Enter item...",
  addLabel = "Add item",
}: Props) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="block text-xs font-medium text-slate-700">
          {label}
        </label>
        <button
          type="button"
          onClick={() => onChange([...items, ""])}
          className="inline-flex items-center gap-1 text-xs font-medium text-[#1556a0] hover:underline"
        >
          <Plus className="h-3.5 w-3.5" />
          {addLabel}
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-xs text-slate-400">No items added yet.</p>
      ) : (
        <div className="space-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const copy = [...items];
                  copy[idx] = e.target.value;
                  onChange(copy);
                }}
                placeholder={placeholder}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              <button
                type="button"
                onClick={() => onChange(items.filter((_, i) => i !== idx))}
                aria-label="Remove item"
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}