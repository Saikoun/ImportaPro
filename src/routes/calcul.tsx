import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  Truck,
  Package,
  Receipt,
  Landmark,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Coins,
  Check,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Input } from "@/components/ui/input";
import { Ripple } from "@/components/ripple";
import { AnimatedCounter } from "@/components/animated-counter";
import { cn } from "@/lib/utils";
import {
  getRecord,
  newId,
  nextRef,
  upsertRecord,
  formatAr,
  type CalcRecord,
} from "@/lib/history";
import { applyRounding, getSettings, onSettingsChange } from "@/lib/settings";

const searchSchema = z.object({
  id: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/calcul")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Calcul Import · ImportaPro" },
      {
        name: "description",
        content:
          "Calculez instantanément le coût total d'un import : transport, produit, frais et marge.",
      },
    ],
  }),
  component: CalculPage,
});

const QUICK_MARGINS = [30000, 40000, 50000];

function CalculPage() {
  const { id: editId } = Route.useSearch();
  const navigate = useNavigate();

  const existing = useMemo(() => (editId ? getRecord(editId) : undefined), [editId]);

  const [settings, setSettings] = useState(() => getSettings());
  useEffect(() => onSettingsChange(() => setSettings(getSettings())), []);

  const [nom, setNom] = useState<string>(() => existing?.nom ?? "");

  const [quantite, setQuantite] = useState<string>(() =>
    existing?.quantite && existing.quantite > 0 ? String(existing.quantite) : "1",
  );
  const [tarifKg, setTarifKg] = useState<string>(() =>
    existing ? String(existing.tarifKg) : String(settings.tarifKg),
  );
  const [poidsG, setPoidsG] = useState<string>(() =>
    existing ? String(existing.poidsG) : "450",
  );
  const [prixYuan, setPrixYuan] = useState<string>(() =>
    existing ? String(existing.prixYuan) : "79.80",
  );
  const [taux, setTaux] = useState<string>(() =>
    existing ? String(existing.taux) : String(settings.taux),
  );
  const [marge, setMarge] = useState<string>(() =>
    existing ? String(existing.marge) : String(settings.margeDefaut),
  );

  const [saved, setSaved] = useState(false);

  const n = (v: string) => {
    const x = parseFloat(v.replace(",", "."));
    return Number.isFinite(x) ? x : 0;
  };

  const calc = useMemo(() => {
    const qte = Math.max(1, Math.floor(n(quantite)) || 1);
    const poidsUnit = n(poidsG);
    const poidsTotal = poidsUnit * qte;
    const transport = (n(tarifKg) * poidsTotal) / 1000;
    const produitUnit = n(prixYuan) * n(taux);
    const produit = produitUnit * qte;
    const sousTotal = transport + produit;
    const frais = sousTotal * (settings.fraisPct / 100);
    const coutTana = sousTotal + frais;
    const margeUnit = n(marge);
    const margeTotale = margeUnit * qte;
    const prixVenteRaw = coutTana + margeTotale;
    const prixVente = applyRounding(prixVenteRaw, settings.arrondiAuto);
    const prixVenteUnitaire = qte > 0 ? prixVente / qte : prixVente;
    const beneficePct = coutTana > 0 ? (margeTotale / coutTana) * 100 : 0;
    return {
      qte,
      poidsUnit,
      poidsTotal,
      produitUnit,
      transport,
      produit,
      sousTotal,
      frais,
      coutTana,
      margeUnit,
      margeTotale,
      prixVente,
      prixVenteUnitaire,
      beneficePct,
    };
  }, [quantite, tarifKg, poidsG, prixYuan, taux, marge, settings]);

  // Auto-save (debounced) — creates a record on first edit, then updates it.
  const recordIdRef = useRef<string | null>(editId ?? null);
  const createdAtRef = useRef<number>(existing?.createdAt ?? Date.now());
  const refRef = useRef<string | null>(existing?.ref ?? null);
  const firstRunRef = useRef(true);

  useEffect(() => {
    // Skip first render if there is no existing record (avoid creating an empty default record on mount).
    if (firstRunRef.current && !editId) {
      firstRunRef.current = false;
      return;
    }
    firstRunRef.current = false;

    const hasInput = n(tarifKg) > 0 || n(poidsG) > 0 || n(prixYuan) > 0 || nom.trim() !== "";
    if (!hasInput) return;

    const handle = window.setTimeout(() => {
      const id = recordIdRef.current ?? newId();
      recordIdRef.current = id;
      if (!refRef.current) refRef.current = nextRef();
      const now = Date.now();
      const rec: CalcRecord = {
        id,
        ref: refRef.current,
        nom: nom.trim() || undefined,
        createdAt: createdAtRef.current,
        updatedAt: now,
        tarifKg: n(tarifKg),
        poidsG: n(poidsG),
        prixYuan: n(prixYuan),
        taux: n(taux),
        marge: n(marge),
        quantite: calc.qte,
        transport: calc.transport,
        produit: calc.produit,
        sousTotal: calc.sousTotal,
        frais: calc.frais,
        coutTana: calc.coutTana,
        prixVente: calc.prixVente,
      };
      upsertRecord(rec);
      // sync URL so refresh continues editing same record
      if (!editId) {
        navigate({ to: "/calcul", search: { id }, replace: true });
      }
      setSaved(true);
      window.setTimeout(() => setSaved(false), 1500);
    }, 500);

    return () => window.clearTimeout(handle);
  }, [nom, quantite, tarifKg, poidsG, prixYuan, taux, marge, calc, editId, navigate]);

  return (
    <AppShell
      title="Calcul Import"
      showBack
      backTo="/home"
      action={
        saved ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-[11px] font-medium text-success">
            <Check className="h-3 w-3" /> Enregistré
          </span>
        ) : null
      }
    >
      <div className="space-y-6">
        {/* Nom du produit */}
        <Section icon={Package} title="Nom du produit" hint="Identifiez ce calcul dans l'historique">
          <Input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Ex : AJ1 Backpack, Logitech G Pro X, Jordan Borough Varsity..."
            className="h-12 rounded-2xl border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          />
        </Section>

        {/* Quantité */}
        <Section icon={Coins} title="Quantité" hint="Entier positif — multiplie prix et poids">
          <Field label="Quantité" suffix="unité(s)">
            <Input
              inputMode="numeric"
              value={quantite}
              onChange={(e) => {
                const v = e.target.value.replace(/[^0-9]/g, "");
                setQuantite(v);
              }}
              onBlur={() => {
                if (!quantite || parseInt(quantite, 10) < 1) setQuantite("1");
              }}
              className="h-12 rounded-2xl border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </Field>
        </Section>

        {/* Transport */}
        <Section icon={Truck} title="Transport" hint="Tarif/kg × Poids total ÷ 1000">
          <Field label="Tarif par kg (Ar)" suffix="Ar/kg">
            <NumInput value={tarifKg} onChange={setTarifKg} />
          </Field>
          <Field label="Poids unitaire" suffix="g">
            <NumInput value={poidsG} onChange={setPoidsG} />
          </Field>
          <ResultRow label={`Poids total (× ${calc.qte})`} value={calc.poidsTotal} suffix=" g" raw />
          <ResultRow label="Transport" value={calc.transport} />
        </Section>

        {/* Produit */}
        <Section icon={Package} title="Produit" hint="Prix unitaire × Taux × Quantité">
          <Field label="Prix unitaire (¥)" suffix="¥">
            <NumInput value={prixYuan} onChange={setPrixYuan} />
          </Field>
          <Field label="Taux de change" suffix="Ar/¥">
            <NumInput value={taux} onChange={setTaux} />
          </Field>
          <ResultRow label="Prix unitaire (Ar)" value={calc.produitUnit} />
          <ResultRow label={`Prix total produit (× ${calc.qte})`} value={calc.produit} />
        </Section>

        {/* Récapitulatif */}
        <div className="surface-card divide-y divide-border p-2">
          <Line icon={Truck} label="Transport" value={calc.transport} />
          <Line icon={Package} label={`Produit (× ${calc.qte})`} value={calc.produit} />
          <Line icon={Coins} label="Sous-total" value={calc.sousTotal} strong />
        </div>


        {/* Prix de vente */}
        <Section icon={TrendingUp} title="Prix de vente" hint="Coût arrivée + Marge">
          <p className="text-xs text-muted-foreground">Marge rapide</p>
          <div className="grid grid-cols-3 gap-2">
            {QUICK_MARGINS.map((m) => {
              const active = n(marge) === m;
              return (
                <Ripple
                  key={m}
                  onClick={() => setMarge(String(m))}
                  color={active ? "rgba(255,255,255,0.45)" : "rgba(223,1,57,0.25)"}
                  className={cn(
                    "rounded-2xl border px-3 py-3 text-sm font-semibold transition-all",
                    active
                      ? "gradient-primary border-transparent text-primary-foreground shadow-[var(--shadow-glow)] scale-[1.02]"
                      : "border-border bg-card text-foreground hover:border-border-strong",
                  )}
                >
                  {formatAr(m)}
                </Ripple>
              );
            })}
          </div>

          <Field label="Marge unitaire (Ar)" suffix="Ar / unité">
            <NumInput value={marge} onChange={setMarge} />
          </Field>

          <ResultRow label={`Marge totale (× ${calc.qte})`} value={calc.margeTotale} />
          <ResultRow label="Prix de vente unitaire" value={calc.prixVenteUnitaire} />

          <div
            key={calc.prixVente}
            className="animate-value-pop relative overflow-hidden rounded-[24px] gradient-primary p-5 shadow-[var(--shadow-glow)] animate-pulse-glow"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-float-orb" />
            {saved && (
              <div className="absolute inset-x-0 top-0 h-0.5 calc-bar" />
            )}
            <Sparkles className="h-5 w-5 text-primary-foreground/80" />
            <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/80">
              Prix de vente total ({calc.qte} unité{calc.qte > 1 ? "s" : ""})
            </p>
            <p className="mt-1 text-display text-3xl text-primary-foreground tabular-nums">
              <AnimatedCounter value={calc.prixVente} format={(n) => formatAr(n)} />
            </p>
            <p className="mt-2 text-xs text-primary-foreground/80">
              Soit {formatAr(calc.prixVenteUnitaire)} / unité — Bénéfice :{" "}
              <AnimatedCounter
                value={calc.beneficePct}
                format={(n) => `${n.toFixed(1)}%`}
              />
            </p>
          </div>



          <Link
            to="/historique"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-card/80"
          >
            Voir l'historique <ArrowRight className="h-4 w-4" />
          </Link>
        </Section>
      </div>
    </AppShell>
  );
}

/* ----- helpers ----- */

function NumInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Input
      inputMode="decimal"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 rounded-2xl border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
    />
  );
}

function Field({
  label,
  suffix,
  children,
}: {
  label: string;
  suffix?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-muted-foreground">{label}</label>
        {suffix && (
          <span className="text-[11px] font-medium text-muted-foreground">{suffix}</span>
        )}
      </div>
      {children}
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  hint,
  children,
}: {
  icon: typeof Truck;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="surface-card animate-stagger-up space-y-4 p-5 transition-all duration-300 hover:border-border-strong">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110 hover:rotate-3">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-display text-base font-semibold">{title}</h3>
          {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function ResultRow({
  label,
  value,
  suffix,
  raw,
}: {
  label: string;
  value: number;
  suffix?: string;
  raw?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-background/60 px-4 py-3 transition-colors">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-display text-lg font-semibold text-foreground tabular-nums">
        <AnimatedCounter
          value={value}
          format={(n) => (raw ? `${Math.round(n).toLocaleString("fr-FR")}${suffix ?? ""}` : formatAr(n))}
        />
      </span>
    </div>
  );
}

function Line({
  icon: Icon,
  label,
  value,
  strong,
  accent,
}: {
  icon: typeof Truck;
  label: string;
  value: number;
  strong?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-3 transition-colors hover:bg-background/40 rounded-2xl">
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-2xl transition-transform hover:scale-110",
          accent ? "gradient-primary text-primary-foreground" : "bg-muted text-foreground",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span
        className={cn(
          "flex-1 text-sm",
          strong ? "font-semibold text-foreground" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "text-display text-sm tabular-nums",
          strong ? "text-foreground" : "text-foreground/90",
          accent && "text-primary",
        )}
      >
        <AnimatedCounter value={value} format={(n) => formatAr(n)} />
      </span>
    </div>
  );

}
