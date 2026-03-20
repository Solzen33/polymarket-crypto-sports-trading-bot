"use client";

import { useRouter } from "next/navigation";

export function BackLink() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="rounded-lg border border-white/10 bg-surfaceAlt/50 px-2 py-1 text-xs text-foreground/70 hover:bg-surfaceAlt hover:text-foreground/90"
      aria-label="Back to previous page"
    >
      ← Back
    </button>
  );
}
