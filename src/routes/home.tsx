import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import { useEffect, useMemo, useState } from "react";
import {
  Calculator,
  TrendingUp,
  History,
  FileText,
  Package,
  Truck,
  Landmark,
  Bell,
  ArrowUpRight,
  Sparkles,
  ClipboardList,
  Percent,
  Tag,
  ArrowRight,
  Lightbulb,

} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { AnimatedCounter } from "@/components/animated-counter";
import logoImportaPro from "@/assets/logo-importapro.png";
import { formatAr, listHistory, onHistoryChange, type CalcRecord } from "@/lib/history";
import { getSession, onSessionChange, type Session } from "@/lib/session";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Accueil · ImportaPro" },
      { name: "description", content: "Tableau de bord ImportaPro : dernier calcul, raccourcis et activité." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const [records, setRecords] = useState<CalcRecord[]>([]);
  const [session, setSession] = useState<Session | null>(() => getSession());

  useEffect(() => {
    setRecords(listHistory());
    return onHistoryChange(() => setRecords(listHistory()));
  }, []);

  useEffect(() => {
    const refresh = () => {
      const s = getSession();
      setSession(s);
      if (!s) navigate({ to: "/bienvenue" });
    };
    refresh();
    return onSessionChange(refresh);
  }, [navigate]);



  const last = records[0];
  const totalMonth = useMemo(() => {
    const now = new Date();
    return records
      .filter((r) => {
        const d = new Date(r.updatedAt);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      })
      .reduce((s, r) => s + r.prixVente, 0);
  }, [records]);

  const hero = last?.prixVente ?? 0;
  const transport = last?.transport ?? 0;
  const frais = last?.frais ?? 0;

  return (
    <AppShell
      title={
        <span className="flex items-center gap-2.5">
          <img
            src={logoImportaPro}
            alt="ImportaPro"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 drop-shadow-[0_4px_12px_rgba(223,1,57,0.45)]"
          />
          <span className="text-display text-lg font-bold tracking-tight">
            <span className="text-foreground">Importa</span>
            <span className="text-primary">Pro</span>
          </span>
        </span>
      }
      action={
        <Link
          to="/notifications"
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-2xl bg-card text-foreground transition hover:bg-card/70"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
        </Link>
      }
    >
      <div className="space-y-7">
        {/* Greeting */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Bienvenue,
          </p>
          <h2 className="text-display text-2xl font-semibold">{session?.name ?? "Invité"} 👋</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Estimez vos coûts d'importation en quelques secondes.
          </p>
        </div>

        {/* Presentation card */}
        <IntroCard />





        {/* Hero balance card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-0.5 rounded-[28px] bg-linear-to-r from-primary to-primary-glow opacity-25 blur-md" />
          <div className="relative overflow-hidden rounded-[28px] border border-border-strong bg-card p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl animate-float-orb" />
            <div className="flex items-start justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Dernier prix de vente
              </p>
              <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[10px] font-bold text-primary-glow">
                MGA
              </span>
            </div>
            <p className="mt-2 text-display text-[32px] leading-tight font-bold tracking-tight tabular-nums">
              <AnimatedCounter value={hero} format={(n) => Math.round(n).toLocaleString("fr-FR")} />{" "}
              <span className="text-sm font-medium text-muted-foreground">Ar</span>
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <MiniStat icon={Truck} label="Transport" value={transport} />
              <MiniStat icon={Landmark} label="Frais" value={frais} />
            </div>
          </div>
        </div>

        {/* Quick actions row */}
        <div className="grid grid-cols-4 gap-3">
          <QuickPill to="/calcul" icon={Calculator} label="Simuler" accent />
          <QuickPill to="/historique" icon={FileText} label="Devis" />
          <QuickPill to="/historique" icon={History} label="Suivi" />
          <QuickPill to="/parametres" icon={TrendingUp} label="Tarifs" />
        </div>

        {/* Month total card */}
        <div className="surface-card flex items-center gap-4 p-4">
          <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Volume simulé ce mois
            </p>
            <p className="text-display text-lg font-semibold tabular-nums">
              <AnimatedCounter value={totalMonth} format={(n) => formatAr(n)} />
            </p>
          </div>
          <ArrowUpRight className="h-4 w-4 text-primary-glow" />
        </div>

        {/* Recent activity */}
        <div>
          <div className="flex items-end justify-between">
            <h3 className="text-display text-base font-semibold">Activités récentes</h3>
            <Link to="/historique" className="text-xs font-semibold text-primary-glow">
              Voir tout
            </Link>
          </div>

          <div className="mt-3 space-y-3">
            {records.length === 0 && (
              <EmptyState />
            )}
            {records.slice(0, 4).map((r) => (
              <Link
                key={r.id}
                to="/calcul"
                search={{ id: r.id }}
                className="surface-card flex items-center gap-4 p-4 transition-all hover:border-border-strong active:scale-[0.99]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-muted text-foreground/80">
                  <Package className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    Import · {r.poidsG} g
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {new Date(r.updatedAt).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                    })}{" "}
                    · {r.prixYuan} ¥
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-display text-sm font-semibold tabular-nums">
                    {formatAr(r.prixVente)}
                  </p>
                  <p className="text-[10px] font-semibold text-primary-glow">Détails</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Daily tip — near footer */}
        <DailyTipCard />
      </div>
    </AppShell>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Truck;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-1 text-sm font-semibold tabular-nums">
        <AnimatedCounter value={value} format={(n) => formatAr(n)} />
      </p>
    </div>
  );
}

function QuickPill({
  to,
  icon: Icon,
  label,
  accent,
}: {
  to: string;
  icon: typeof Calculator;
  label: string;
  accent?: boolean;
}) {
  const isCalc = to === "/calcul";
  const linkProps = isCalc ? { to, search: { id: undefined } } : { to };
  return (
    <Link
      {...(linkProps as { to: string })}
      className="flex flex-col items-center gap-2"
    >
      <span
        className={
          "grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform active:scale-95 " +
          (accent ? "text-primary" : "text-foreground/80")
        }
      >
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="surface-card p-6 text-center">
      <p className="text-sm font-semibold">Aucun calcul pour le moment</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Lancez votre premier calcul depuis le bouton central.
      </p>
    </div>
  );
}

function IntroCard() {
  const steps = [
    { icon: ClipboardList, label: "Saisissez les infos produit" },
    { icon: Calculator, label: "Calcul automatique des coûts" },
    { icon: Percent, label: "Définissez votre marge" },
    { icon: Tag, label: "Obtenez votre prix de vente" },
  ] as const;
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-border-strong bg-card p-5">
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-glow">
          <Sparkles className="h-3 w-3" /> Découvrir
        </span>
        <h3 className="mt-3 text-display text-lg font-semibold">
          Bienvenue sur <span className="text-primary">ImportaPro</span>
        </h3>
        <p className="mt-1 text-xs font-medium text-muted-foreground">
          Estimez vos coûts d'importation en quelques secondes.
        </p>
        <p className="mt-3 text-[12.5px] leading-relaxed text-foreground/75">
          Calculateur intelligent pour les importateurs et revendeurs :
          estimez le coût réel d'un produit importé depuis la Chine — produit,
          transport, frais, coût d'arrivée à Madagascar et prix de vente selon
          votre marge.
        </p>

        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Comment ça marche ?
          </p>
          <ol className="mt-2 grid grid-cols-2 gap-2">
            {steps.map((s, i) => (
              <li
                key={s.label}
                className="flex items-start gap-2 rounded-2xl border border-border bg-background/40 p-2.5"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <s.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-primary-glow">
                    Étape {i + 1}
                  </p>
                  <p className="text-[11.5px] font-medium leading-tight text-foreground/85">
                    {s.label}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Link
          to="/calcul"
          search={{ id: undefined }}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform active:scale-[0.98]"
        >
          Commencer un calcul
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

const TIPS = [
  "Calculez toujours votre coût total avant de fixer un prix : c'est la base d'une vente rentable.",
  "Une marge saine se situe généralement entre 25 % et 40 % — en dessous, votre effort n'est pas récompensé.",
  "Vérifiez deux fois le poids et le taux de change : une petite erreur peut effacer toute votre marge.",
  "Un prix précis inspire confiance et protège vos bénéfices sur le long terme.",
  "Ne vendez jamais un produit dont vous ne connaissez pas le coût réel.",
  "Comparez vos prix à ceux du marché, mais ne bradez jamais votre valeur.",
  "Chaque franc économisé sur le transport est un franc gagné sur la marge.",
  "Un bon vendeur connaît ses chiffres mieux que ses concurrents.",
];

function DailyTipCard() {
  const tip = useMemo(() => {
    const day = Math.floor(Date.now() / 86_400_000);
    return TIPS[day % TIPS.length];
  }, []);
  return (
    <section className="surface-card relative overflow-hidden p-4">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />
      <div className="relative flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
          <Lightbulb className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary-glow">
            Astuce du jour
          </p>
          <p className="mt-1 text-[13px] font-medium leading-snug text-foreground/90">
            {tip}
          </p>
        </div>
      </div>
    </section>
  );
}

