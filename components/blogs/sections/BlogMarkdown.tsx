import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  // The page title is the only <h1>, so a markdown "# " renders as an h2
  h1: ({ children }) => (
    <h2 className="mb-4 mt-14 font-heading text-[1.9rem] font-bold leading-tight text-brand-deep">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-14 font-heading text-[1.75rem] font-bold leading-tight text-brand-deep">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-10 font-heading text-[1.35rem] font-bold leading-snug text-brand-deep">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-2 mt-8 font-heading text-[1.1rem] font-bold text-brand-deep">
      {children}
    </h4>
  ),

  p: ({ children }) => (
    <p className="my-6 text-[1.1875rem] leading-[1.85] text-ink/90">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-brand-deep">{children}</strong>
  ),

  a: ({ href = "", children }) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:decoration-brand-blue"
      >
        {children}
      </a>
    );
  },

  ul: ({ children }) => (
    <ul className="my-6 list-disc space-y-3 pl-6 text-[1.1875rem] leading-[1.8] text-ink/90 marker:text-brand-blue">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 list-decimal space-y-3 pl-6 text-[1.1875rem] leading-[1.8] text-ink/90 marker:font-semibold marker:text-brand-blue">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,

  blockquote: ({ children }) => (
    <blockquote className="my-10 border-l-[3px] border-brand-blue pl-6 font-heading text-[1.4rem] font-semibold italic leading-snug text-brand-deep [&_p]:my-0 [&_p]:text-[length:inherit] [&_p]:leading-snug [&_p]:text-brand-deep">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-12 border-0 text-center text-muted before:content-['•••'] before:tracking-[0.6em]" />,

  // Inline code vs. fenced block
  code: ({ className, children }) => {
    const isBlock =
      /language-/.test(className ?? "") || String(children).includes("\n");

    return isBlock ? (
      <code className="font-mono text-[0.95rem] leading-relaxed">
        {children}
      </code>
    ) : (
      <code className="rounded bg-pale px-1.5 py-0.5 font-mono text-[0.9em] text-brand-deep">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-8 overflow-x-auto rounded-lg bg-brand-deep p-5 text-white">
      {children}
    </pre>
  ),

  // spans (not <figure>) so it stays valid inside the <p> markdown wraps images in
  img: ({ src, alt }) => (
    <span className="my-10 block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={typeof src === "string" ? src : ""}
        alt={alt ?? ""}
        loading="lazy"
        className="w-full rounded-lg"
      />
      {alt && (
        <span className="mt-3 block text-center text-caption text-muted">
          {alt}
        </span>
      )}
    </span>
  ),

  // GFM tables
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-small">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b-2 border-line px-4 py-3 font-semibold text-brand-deep">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-line px-4 py-3 text-ink/90">{children}</td>
  ),
};

export default function BlogMarkdown({ content }: { content: string }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}