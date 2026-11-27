import Link from "next/link";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";
import { getBlogs } from "@/lib/db/queries/blogs";

export default function AdminBlogsPage() {
  const blogs = getBlogs();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Link href="/admin/blogs/new" className="rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700">
          New blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p className="rounded-lg border border-dashed border-stone-300 p-8 text-center text-sm text-stone-600">
          No blogs yet. Create your first blog to publish it on the website.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-stone-200 bg-stone-50 text-stone-600">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Author</th>
                <th className="px-4 py-3 font-medium">Published</th>
                <th className="px-4 py-3 font-medium">Likes</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {blogs.map((b) => (
                <tr key={b.id}>
                  <td className="max-w-xs px-4 py-3">
                    <div className="truncate font-medium">{b.title}</div>
                    <div className="truncate text-xs text-stone-500">/blogs/{b.id}</div>
                  </td>
                  <td className="px-4 py-3">{b.category}</td>
                  <td className="px-4 py-3">{b.author.name}</td>
                  <td className="whitespace-nowrap px-4 py-3">{b.publishedAt.slice(0, 10)}</td>
                  <td className="px-4 py-3">{b.likes}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <Link href={`/blogs/${b.id}`} target="_blank" className="mr-4 text-sm text-stone-600 hover:underline">View</Link>
                    <Link href={`/admin/blogs/${b.id}`} className="mr-4 text-sm font-medium hover:underline">Edit</Link>
                    <DeleteBlogButton id={b.id} title={b.title} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
