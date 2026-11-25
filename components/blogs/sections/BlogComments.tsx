"use client";

import { useState } from "react";

import type { BlogComment } from "@/data/blogs";

interface BlogCommentsProps {
  blogId: string;
  initialComments: BlogComment[];
  heading: string;
  placeholder: string;
}

/* ------------------------------ helpers ---------------------------------- */

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

function Avatar({ name, small = false }: { name: string; small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand-deep font-semibold text-white ${
        small ? "h-8 w-8 text-caption" : "h-10 w-10 text-small"
      }`}
    >
      {initials(name)}
    </span>
  );
}

/* ------------------------------ form ------------------------------------- */

interface CommentFormProps {
  placeholder: string;
  submitLabel?: string;
  autoFocus?: boolean;
  onSubmit: (author: string, text: string) => void;
  onCancel?: () => void;
}

function CommentForm({
  placeholder,
  submitLabel = "Respond",
  autoFocus = false,
  onSubmit,
  onCancel,
}: CommentFormProps) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const canSubmit = name.trim() !== "" && text.trim() !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit(name.trim(), text.trim());
    setText("");
  };

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm focus-within:border-brand-blue">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
        aria-label="Your name"
        maxLength={60}
        className="mb-3 w-full border-b border-line pb-2 text-small font-semibold text-brand-deep outline-none placeholder:font-normal placeholder:text-muted"
      />

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        aria-label="Your response"
        autoFocus={autoFocus}
        rows={3}
        maxLength={2000}
        className="w-full resize-y text-small text-ink outline-none placeholder:text-muted"
      />

      <div className="mt-3 flex items-center justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full px-4 py-2 text-small text-muted transition-colors hover:text-brand-deep"
          >
            Cancel
          </button>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="rounded-full bg-brand-blue px-5 py-2 text-small font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ single comment --------------------------- */

interface CommentItemProps {
  comment: BlogComment;
  isReply?: boolean;
  onReply?: (parentId: string, author: string, text: string) => void;
}

function CommentItem({ comment, isReply = false, onReply }: CommentItemProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  const [replying, setReplying] = useState(false);

  const toggleLike = () => {
    // TODO(backend): POST/DELETE /comments/:id/like
    setLiked((value) => !value);
    setLikeCount((count) => (liked ? count - 1 : count + 1));
  };

  return (
    <div className="flex gap-4">
      <Avatar name={comment.author} small={isReply} />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <p className="text-small font-semibold text-brand-deep">
            {comment.author}
          </p>
          <time dateTime={comment.createdAt} className="text-caption text-muted">
            {formatDate(comment.createdAt)}
          </time>
        </div>

        <p className="mt-2 whitespace-pre-line break-words text-small leading-relaxed text-ink/90">
          {comment.text}
        </p>

        <div className="mt-3 flex items-center gap-5 text-caption text-muted">
          <button
            type="button"
            onClick={toggleLike}
            aria-pressed={liked}
            className={`inline-flex items-center gap-1.5 transition-colors hover:text-brand-deep ${
              liked ? "!text-brand-red" : ""
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
            {likeCount}
          </button>

          {!isReply && onReply && (
            <button
              type="button"
              onClick={() => setReplying((value) => !value)}
              className="transition-colors hover:text-brand-deep"
            >
              Reply
            </button>
          )}
        </div>

        {replying && onReply && (
          <div className="mt-4">
            <CommentForm
              placeholder={`Reply to ${comment.author}`}
              submitLabel="Reply"
              autoFocus
              onCancel={() => setReplying(false)}
              onSubmit={(author, text) => {
                onReply(comment.id, author, text);
                setReplying(false);
              }}
            />
          </div>
        )}

        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-6 space-y-6 border-l-2 border-line pl-5">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------ section ---------------------------------- */

export default function BlogComments({
  blogId,
  initialComments,
  heading,
  placeholder,
}: BlogCommentsProps) {
  const [comments, setComments] = useState<BlogComment[]>(initialComments);

  const total = comments.reduce(
    (sum, comment) => sum + 1 + (comment.replies?.length ?? 0),
    0,
  );

  const makeComment = (author: string, text: string): BlogComment => ({
    id: crypto.randomUUID(),
    author,
    text,
    createdAt: new Date().toISOString(),
    likes: 0,
  });

  const addComment = (author: string, text: string) => {
    // TODO(backend): POST /blogs/${blogId}/comments, then use the saved comment from the response
    setComments((prev) => [makeComment(author, text), ...prev]);
  };

  const addReply = (parentId: string, author: string, text: string) => {
    // TODO(backend): POST /comments/:parentId/replies
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: [...(comment.replies ?? []), makeComment(author, text)],
            }
          : comment,
      ),
    );
  };

  return (
    <section id="comments" className="scroll-mt-28" aria-label={heading}>
      <h2 className="mb-8 font-heading text-h3 font-bold text-brand-deep">
        {heading} ({total})
      </h2>

      <CommentForm placeholder={placeholder} onSubmit={addComment} />

      {comments.length > 0 && (
        <div className="mt-10 space-y-10">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} onReply={addReply} />
          ))}
        </div>
      )}
    </section>
  );
}