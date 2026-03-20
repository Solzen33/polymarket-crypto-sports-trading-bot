import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold text-white">Polymarket Sports Dashboard</h1>
        <p className="mt-2 text-sm text-foreground/80">
          Explore top sports traders, view their recent history, and inspect live sports markets in a
          HeroUI-inspired interface while keeping your current trading workflows unchanged.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/sports"
          className="rounded-2xl border border-white/10 bg-surfaceAlt/70 p-4 transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-surfaceAlt"
        >
          <h2 className="text-sm font-semibold text-white">Sports</h2>
          <p className="mt-1 text-xs text-foreground/70">
            Sports tree → live slugs as cards → market state & chart.
          </p>
        </Link>
        <Link
          href="/traders"
          className="rounded-2xl border border-white/10 bg-surfaceAlt/70 p-4 transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-surfaceAlt"
        >
          <h2 className="text-sm font-semibold text-white">Top trader</h2>
          <p className="mt-1 text-xs text-foreground/70">
            Leaderboard → trader history & chart (date range: 1 week).
          </p>
        </Link>
        <Link
          href="/copy-trading"
          className="rounded-2xl border border-white/10 bg-surfaceAlt/70 p-4 transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-surfaceAlt"
        >
          <h2 className="text-sm font-semibold text-white">Copy trading</h2>
          <p className="mt-1 text-xs text-foreground/70">
            Select traders & slugs, start/stop bot, manual buy/sell.
          </p>
        </Link>
        <Link
          href="/manual-trading"
          className="rounded-2xl border border-white/10 bg-surfaceAlt/70 p-4 transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-surfaceAlt"
        >
          <h2 className="text-sm font-semibold text-white">Manual trading</h2>
          <p className="mt-1 text-xs text-foreground/70">
            Manual buy/sell by slug; view market & chart.
          </p>
        </Link>
      </section>

      <section className="rounded-2xl border border-white/10 bg-surfaceAlt/70 p-4 text-xs text-foreground/70">
        <p>
          Backend utilities in this repo (CLI bots) use the same Polymarket public APIs. This
          frontend is read-only and does not require your private keys or API credentials.
        </p>
      </section>
    </div>
  );
}

