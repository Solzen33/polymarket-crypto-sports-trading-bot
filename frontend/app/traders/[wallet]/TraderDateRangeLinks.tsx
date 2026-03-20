"use client";

import Link from "next/link";

type Props = { wallet: string; currentDays: number };

const PRESETS = [7, 14] as const;

export function TraderDateRangeLinks({ wallet, currentDays }: Props) {
  return (
    <div className="mt-2 flex gap-2">
      <span className="text-xs text-foreground/60">Range:</span>
      {PRESETS.map((d) => (
        <Link
          key={d}
          href={`/traders/${encodeURIComponent(wallet)}?days=${d}`}
          className={`text-xs ${
            currentDays === d ? "text-accent font-medium" : "text-foreground/70 hover:text-foreground/90"
          }`}
        >
          {d} days
        </Link>
      ))}
    </div>
  );
}
