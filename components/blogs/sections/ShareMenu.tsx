"use client";

import { useEffect, useRef, useState } from "react";

interface ShareMenuProps {
  blogId: string;
  title: string;
  direction?: "down" | "up";
}

interface ShareTarget {
  id: string;
  label: string;
  path: string; // 24x24 filled brand icon
  href: (url: string, title: string) => string;
}

const targets: ShareTarget[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
    href: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
    href: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: "threads",
    label: "Threads",
    path: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z",
    href: (url, title) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    id: "x",
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    href: (url, title) =>
      `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
];

const itemClass =
  "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-small text-ink transition-colors hover:bg-pale";

export default function ShareMenu({
  blogId,
  title,
  direction = "down",
}: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Set after mount so server and client markup match
  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Built at click time so it always uses the real origin
  const getUrl = () => `${window.location.origin}/blogs/${blogId}`;

  const openShare = (target: ShareTarget) => {
    window.open(
      target.href(getUrl(), title),
      "_blank",
      "noopener,noreferrer,width=600,height=640",
    );
    setOpen(false);
  };

  const copyLink = async () => {
    const url = getUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for insecure contexts / older browsers
      const input = document.createElement("textarea");
      input.value = url;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1400);
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url: getUrl() });
    } catch {
      // user dismissed the sheet
    }
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Share this article"
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-small text-muted transition-colors hover:text-brand-deep"
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
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="m16 6-4-4-4 4" />
          <path d="M12 2v13" />
        </svg>
        <span className="hidden sm:inline">Share</span>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute right-0 z-30 w-60 rounded-lg border border-line bg-white p-2 shadow-xl ${
            direction === "down" ? "top-full mt-2" : "bottom-full mb-2"
          }`}
        >
          {targets.map((target) => (
            <button
              key={target.id}
              type="button"
              role="menuitem"
              onClick={() => openShare(target)}
              className={itemClass}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={target.path} />
              </svg>
              Share on {target.label}
            </button>
          ))}

          <div className="my-1 border-t border-line" />

          <button
            type="button"
            role="menuitem"
            onClick={copyLink}
            className={itemClass}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {copied ? (
                <path d="M20 6 9 17l-5-5" />
              ) : (
                <>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </>
              )}
            </svg>
            {copied ? "Link copied" : "Copy link"}
          </button>

          {canNativeShare && (
            <button
              type="button"
              role="menuitem"
              onClick={nativeShare}
              className={itemClass}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
              More options…
            </button>
          )}
        </div>
      )}
    </div>
  );
}