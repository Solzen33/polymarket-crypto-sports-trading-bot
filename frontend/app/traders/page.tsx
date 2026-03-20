import Link from "next/link";
import { fetchSportsTopTraders } from "../../lib/polymarket";

export const revalidate = 60;

export default async function TradersPage() {
  const traders = await fetchSportsTopTraders(50);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-white">SPORTS top traders</h1>
        <p className="mt-1 text-xs text-foreground/70">
          Daily SPORTS leaderboard by PnL (top 50). Click a trader to view a chart of their recent
          closed positions.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-surfaceAlt/70">
        <table className="min-w-full text-left text-xs text-foreground/80">
          <thead className="bg-surface">
            <tr>
              <th className="px-3 py-2">Rank</th>
              <th className="px-3 py-2">Trader</th>
              <th className="px-3 py-2 text-right">PnL</th>
              <th className="px-3 py-2 text-right">Volume</th>
            </tr>
          </thead>
          <tbody>
            {traders.map((t) => {
              const name = (t.userName || "").trim() || t.proxyWallet.slice(0, 10) + "…";
              return (
                <tr key={t.proxyWallet} className="border-t border-white/10 hover:bg-surfaceAlt/70">
                  <td className="px-3 py-2 text-foreground/70">{t.rank}</td>
                  <td className="px-3 py-2">
                    <Link
                      href={`/traders/${t.proxyWallet}`}
                      className="text-xs font-medium text-accent hover:text-accent-soft"
                    >
                      {name}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-right text-success">
                    {t.pnl.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-3 py-2 text-right">
                    {t.vol.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

