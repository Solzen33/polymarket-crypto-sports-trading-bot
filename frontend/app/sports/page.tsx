import Link from "next/link";
import { fetchSports } from "../../lib/polymarket";

export const revalidate = 120;

export default async function SportsPage() {
  const sports = await fetchSports();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-white">Sports list</h1>
        <p className="mt-1 text-xs text-foreground/70">
          Click a sport to see its live markets.
        </p>
      </div>

      <section>
        <h2 className="mb-2 text-sm font-medium text-foreground/80">All sports</h2>
        <ul className="grid grid-cols-4 gap-1">
          {sports.map((s) => (
            <li key={s.id} className="min-w-0">
              <Link
                href={`/sports/${encodeURIComponent(s.tagId || String(s.id))}`}
                className="block overflow-hidden rounded-2xl border border-white/10 bg-surfaceAlt/70 px-4 py-3 text-sm text-foreground/90 transition hover:border-accent/60 hover:bg-surfaceAlt"
                title={`${s.label} (${s.sport})`}
              >
                <span className="block truncate font-medium">
                  {s.label}
                  <span className="ml-2 text-xs text-foreground/60">({s.sport})</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {sports.length === 0 && (
          <p className="text-sm text-foreground/60">No sports returned.</p>
        )}
      </section>
    </div>
  );
}
