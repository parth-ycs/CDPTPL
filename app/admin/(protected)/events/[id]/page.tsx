import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getEventById } from "@/lib/db/queries/events";
import EventForm from "@/components/admin/EventForm";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function EditEventPage({ params }: Props) {
  const { id } = await params;
  const event = getEventById(decodeURIComponent(id));
  if (!event) notFound();

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
          Edit event
        </h1>
        <p className="mt-0.5 text-sm text-stone-500">{event.title}</p>
      </div>

      <EventForm mode="edit" initialData={event} />
    </div>
  );
}