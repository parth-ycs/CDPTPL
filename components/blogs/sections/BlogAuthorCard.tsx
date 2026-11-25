import { blogsPageData, type BlogAuthor } from "@/data/blogs";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogAuthorCard({ author }: { author: BlogAuthor }) {
  return (
    <section className="my-14 flex items-start gap-5 rounded-lg bg-pale p-6 md:p-8">
      <span
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-deep text-body font-semibold text-white"
        aria-hidden="true"
      >
        {initials(author.name)}
      </span>

      <div>
        <p className="text-caption font-semibold uppercase tracking-wider text-muted">
          {blogsPageData.detail.writtenByLabel}
        </p>
        <p className="mt-1 font-heading text-h3 font-bold text-brand-deep">
          {author.name}
        </p>
        <p className="text-small text-brand-blue">{author.role}</p>
        <p className="mt-3 text-small text-muted">{author.bio}</p>
      </div>
    </section>
  );
}