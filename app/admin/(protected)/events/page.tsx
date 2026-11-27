import Link from "next/link";
import { Plus } from "lucide-react";

import { getEvents } from "@/lib/db/queries/events";
import DeleteEventButton from "@/components/admin/DeleteEventButton";

export const dynamic = "force-dynamic";

export default function AdminEventsPage() {
  const events = getEvents();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Events</h1>
          <p className="mt-1 text-sm text-stone-500">
            Manage exhibitions, conferences, and industry engagements.
          </p>
        </div>

        <Link
          href="/admin/events/new"
          className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
        >
          <Plus className="h-4 w-4" />
          New event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <h2 className="text-base font-medium text-stone-900">
            No events yet
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Add your first exhibition or industry event to display it on the
            site.
          </p>
          <Link
            href="/admin/events/new"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            New event
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
                <tr>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Location / Stand</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {events.map((event) => (
                  <tr key={event.id} className="hover:bg-stone-50/75">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={event.image}
                          alt={event.imageAlt}
                          className="h-10 w-24 shrink-0 rounded border border-stone-200 object-cover bg-stone-100"
                        />
                        <div>
                          <div className="font-medium text-stone-900">
                            {event.title}
                          </div>
                          <div className="mt-0.5 text-xs text-stone-500">
                            {event.venue}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-stone-700">
                      {event.category}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-stone-700">
                      {event.date}
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      <div>{event.location}</div>
                      {event.stand && (
                        <div className="text-xs text-stone-500">
                          Stand: {event.stand}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {event.url && (
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-600 hover:text-stone-900"
                          >
                            Link
                          </a>
                        )}
                        <Link
                          href={`/admin/events/${encodeURIComponent(event.id)}`}
                          className="font-medium text-stone-900 hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteEventButton id={event.id} title={event.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}