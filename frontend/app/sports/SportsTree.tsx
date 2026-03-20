"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import type { SportsTreeGroupWithLive, LiveMarketOption } from "../../lib/polymarket";

type Props = { groups: SportsTreeGroupWithLive[] };

function LiveSlugLink({ slug, question }: LiveMarketOption) {
  return (
    <Link
      href={`/markets/${encodeURIComponent(slug)}`}
      className="block truncate rounded-lg px-2 py-1 text-xs text-foreground/70 hover:bg-surfaceAlt hover:text-foreground/90"
      title={question || slug}
    >
      {question ? (question.length > 48 ? question.slice(0, 48) + "…" : question) : slug}
    </Link>
  );
}

function TagRow({
  label,
  tagId,
  liveSlugs,
}: {
  label: string;
  tagId: string;
  liveSlugs: LiveMarketOption[];
}) {
  const [open, setOpen] = useState(false);
  const hasLive = liveSlugs.length > 0;
  return (
    <li className="border-l border-white/10 pl-3">
      <div className="flex items-center gap-2 py-1">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground"
          aria-expanded={open}
        >
          {hasLive ? (
            <Icon icon={open ? "mdi:chevron-down" : "mdi:chevron-right"} className="h-4 w-4" />
          ) : (
            <span className="w-4" />
          )}
        </button>
        <Link
          href={`/sports/${encodeURIComponent(tagId)}`}
          className="font-medium text-foreground/90 hover:text-accent"
        >
          {label}
        </Link>
        {hasLive && (
          <span className="text-xs text-foreground/60">({liveSlugs.length} live)</span>
        )}
      </div>
      {open && hasLive && (
        <ul className="mb-2 mt-0.5 flex flex-col gap-0.5">
          {liveSlugs.map((m) => (
            <li key={m.slug}>
              <LiveSlugLink slug={m.slug} question={m.question} eventTitle={m.eventTitle} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function GroupSection({ typeName, tags }: SportsTreeGroupWithLive) {
  const [open, setOpen] = useState(true);
  const totalLive = tags.reduce((n, t) => n + t.liveSlugs.length, 0);
  return (
    <section className="rounded-2xl border border-white/10 bg-surface/70">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <Icon
          icon={open ? "mdi:chevron-down" : "mdi:chevron-right"}
          className="h-4 w-4 text-foreground/60"
        />
        <span className="font-semibold text-foreground">{typeName}</span>
        <span className="text-xs text-foreground/60">
          {tags.length} tags · {totalLive} live
        </span>
      </button>
      {open && (
        <ul className="border-t border-white/10 px-4 pb-3 pt-2">
          {tags.map((t) => (
            <TagRow key={t.tagId} label={t.label} tagId={t.tagId} liveSlugs={t.liveSlugs} />
          ))}
        </ul>
      )}
    </section>
  );
}

export function SportsTree({ groups }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {groups.map((g) => (
        <GroupSection key={g.typeName} typeName={g.typeName} tags={g.tags} />
      ))}
    </div>
  );
}
