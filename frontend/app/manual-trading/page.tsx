import Link from "next/link";
import { ManualTradingForm } from "./ManualTradingForm";

export default function ManualTradingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-white">Manual trading</h1>
      <p className="text-xs text-foreground/70">
        Enter a live market slug and place manual buy or sell orders. For real orders, run the
        backend CLI: <code className="rounded bg-surface/60 px-1">npm run manual-trading:live -- &lt;slug&gt;</code>.
      </p>
      <ManualTradingForm />
      <p className="text-xs text-foreground/60">
        Or open a market from <Link href="/sports" className="text-accent hover:underline">Sports</Link> and use the
        manual-trading CLI for that slug.
      </p>
    </div>
  );
}
