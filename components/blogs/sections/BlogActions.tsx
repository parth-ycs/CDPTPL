"use client";

import { useEffect, useState } from "react";

import ShareMenu from "@/components/blogs/sections/ShareMenu";

interface BlogActionsProps {
  blogId: string;
  title: string;
  likes: number;
  commentCount: number;
  /** Which way the share popover opens (use "up" for the bottom bar) */
  menuDirection?: "down" | "up";
}

type LikeChange = { blogId: string; liked: boolean; likes: number };

const buttonClass =
  "inline-flex items-center gap-2 rounded-full px-3 py-2 text-small text-muted transition-colors hover:text-brand-deep";

export default function BlogActions({
  blogId,
  title,
  likes,
  commentCount,
  menuDirection = "down",
}: BlogActionsProps) {
  const storageKey = `blog-liked:${blogId}`;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [pending, setPending] = useState(false);
  const [saved, setSaved] = useState(false);

  // Restore this browser's like, and keep the top and bottom bars in sync
  useEffect(() => {
    try {
      setLiked(localStorage.getItem(storageKey) === "1");
    } catch {
      /* storage unavailable */
    }

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<LikeChange>).detail;
      if (detail.blogId !== blogId) return;
      setLiked(detail.liked);
      setLikeCount(detail.likes);
    };

    window.addEventListener("blog-like-change", onChange);
    return () => window.removeEventListener("blog-like-change", onChange);
  }, [blogId, storageKey]);

  const toggleLike = async () => {
    if (pending) return;
    const next = !liked;
    setPending(true);

    // Optimistic update, rolled back if the request fails
    setLiked(next);
    setLikeCount((count) => count + (next ? 1 : -1));

    try {
      const res = await fetch(`/api/blogs/${blogId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked: next }),
      });
      if (!res.ok) throw new Error("Like request failed");
      const data = (await res.json()) as { likes: number };

      try {
        if (next) localStorage.setItem(storageKey, "1");
        else localStorage.removeItem(storageKey);
      } catch {
        /* storage unavailable */
      }

      window.dispatchEvent(
        new CustomEvent<LikeChange>("blog-like-change", {
          detail: { blogId, liked: next, likes: data.likes },
        }),
      );
    } catch {
      setLiked(!next);
      setLikeCount((count) => count + (next ? -1 : 1));
    } finally {
      setPending(false);
    }
  };

  const toggleSave = () => {
    // TODO(backend): POST/DELETE /me/bookmarks/:id
    setSaved((value) => !value);
  };

  const scrollToComments = () => {
    document
      .getElementById("comments")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex items-center justify-between border-y border-line py-2">
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label={liked ? "Remove like" : "Like this article"}
          className={`${buttonClass} ${liked ? "!text-brand-red" : ""}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          {likeCount}
        </button>

        <button
          type="button"
          onClick={scrollToComments}
          aria-label="Jump to comments"
          className={buttonClass}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          {commentCount}
        </button>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleSave}
          aria-pressed={saved}
          aria-label={saved ? "Remove bookmark" : "Save this article"}
          className={`${buttonClass} ${saved ? "!text-brand-blue" : ""}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        <ShareMenu blogId={blogId} title={title} direction={menuDirection} />
      </div>
    </div>
  );
}
