import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RefreshCw, TrendingUp, Coins } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications · ImportaPro" },
      {
        name: "description",
        content:
          "Cours des devises à jour : Euro, Dollar et Yuan (Renminbi) face à l'Ariary.",
      },
    ],
  }),
  component: NotificationsPage,
});

type Rates = {
  base: string;
  fetchedAt: number;
  rates: Record<string, number>; // 1 unit foreign → MGA
};

const CACHE_KEY = "importapro:rates:v1";
const TTL = 60 * 60 * 1000; // 1h

async function fetchRates(): Promise<Rates> {
  // exchangerate.host — free, no key. Base MGA, symbols: EUR, USD, CNY.
  // We fetch inverse: base USD then convert.
  const res = await fetch(
    "https://open.er-api.com/v6/latest/MGA",
  );
  if (!res.ok) throw new Error("Réseau indisponible");
  const data = (await res.json()) as {
    result: string;
    rates: Record<string, number>;
  };
  if (data.result !== "success") throw new Error("Cours indisponibles");
  const inv = (k: string) =>
    data.rates[k] ? Math.round((1 / data.rates[k]) * 100) / 100 : 0;
  const rates = {
    EUR: inv("EUR"),
    USD: inv("USD"),
    CNY: inv("CNY"),
  };
  return { base: "MGA", fetchedAt: Date.now(), rates };
}

function readCache(): Rates | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Rates;
  } catch {
    return null;
  }
}

function writeCache(r: Rates) {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(r));
  } catch {}
}

function NotificationsPage() {
  const [rates, setRates] = useState<Rates | null>(() =>
    typeof window === "undefined" ? null : readCache(),
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const r = await fetchRates();
      setRates(r);
      writeCache(r);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cached = readCache();
    if (!cached || Date.now() - cached.fetchedAt > TTL) {
      refresh();
    } else {
      setRates(cached);
    }
  }, []);

  const items: Array<{ code: "EUR" | "USD" | "CNY"; label: string; sub: string }> = [
    { code: "EUR", label: "Euro", sub: "EUR · €" },
    { code: "USD", label: "Dollar US", sub: "USD · $" },
    { code: "CNY", label: "Yuan Renminbi", sub: "CNY · ¥" },
  ];

  return (
    <AppShell
      title="Notifications"
      showBack
      action={
        <button
          type="button"
          aria-label="Actualiser"
          onClick={refresh}
          disabled={loading}
          className="grid h-10 w-10 place-items-center rounded-2xl bg-card text-foreground transition hover:bg-card/70 disabled:opacity-50"
        >
          <RefreshCw className={"h-4 w-4 " + (loading ? "animate-spin" : "")} />
        </button>
      }
    >
      <div className="space-y-5">
        <div className="surface-card p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-display text-sm font-semibold">
                Cours des devises
              </p>
              <p className="text-[11px] text-muted-foreground">
                Taux réels à jour, mis à jour toutes les heures.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-3 text-xs font-medium text-primary">
            Impossible de récupérer les cours : {error}
          </div>
        )}

        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.code} className="surface-card flex items-center gap-4 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-muted text-foreground/80">
                <Coins className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-display text-sm font-semibold">{it.label}</p>
                <p className="text-[11px] text-muted-foreground">{it.sub}</p>
              </div>
              <div className="text-right">
                <p className="text-display text-base font-semibold tabular-nums">
                  {rates?.rates[it.code]
                    ? `${rates.rates[it.code].toLocaleString("fr-FR")} Ar`
                    : "—"}
                </p>
                <p className="text-[10px] font-semibold text-primary-glow">
                  pour 1 {it.code}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-muted-foreground">
          {rates
            ? `Dernière mise à jour : ${new Date(rates.fetchedAt).toLocaleString("fr-FR")}`
            : "Chargement des cours…"}
        </p>
      </div>
    </AppShell>
  );
}
