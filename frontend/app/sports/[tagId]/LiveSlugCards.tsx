"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { LiveMarketOption } from "../../../lib/polymarket";
import { fetchMarketStateBySlug } from "../../../lib/polymarket";

type Props = { slugs: LiveMarketOption[] };

function useMarketState(slug: string) {
  const [mid, setMid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    fetchMarketStateBySlug(slug)
      .then((m) => {
        if (cancelled) return;
        const tokens = m.tokens ?? [];
        if (tokens.length > 0) {
          const t = tokens[0];
          setMid(t.outcome ?? "—");
        }
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);
  return { mid, loading };
}

function Card({ slug, question }: LiveMarketOption) {
  const { mid, loading } = useMarketState(slug);

  return (
    <Link
      href={`/markets/${encodeURIComponent(slug)}`}
      className="block rounded-2xl border border-white/10 bg-surfaceAlt/70 p-4 transition hover:border-accent/60 hover:bg-surfaceAlt"
    >
      <p className="line-clamp-2 text-sm font-medium text-foreground/90">
        {question || slug}
      </p>
      <p className="mt-1 truncate text-xs text-foreground/60 font-mono">{slug}</p>
      {loading ? (
        <p className="mt-2 text-xs text-foreground/60">Loading…</p>
      ) : (
        <p className="mt-2 text-xs text-foreground/70">Outcome: {mid}</p>
      )}
    </Link>
  );
}

export function LiveSlugCards({ slugs }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {slugs.map((m) => (
        <Card key={m.slug} slug={m.slug} question={m.question} eventTitle={m.eventTitle} />
      ))}
    </div>
  );
}
