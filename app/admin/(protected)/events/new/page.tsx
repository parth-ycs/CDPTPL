import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import EventForm from "@/components/admin/EventForm";

export const dynamic = "force-dynamic";

export default function NewEventPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/events"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to events
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          New event
        </h1>
      </div>

      <EventForm mode="create" />
    </div>
  );
}