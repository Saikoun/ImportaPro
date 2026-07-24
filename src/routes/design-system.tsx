import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Package,
  Calculator,
  Coins,
  Scale,
  FileText,
  History,
  Settings,
  Home,
  TrendingUp,
  User,
  Search,
  Bell,
  ChevronLeft,
  ChevronDown,
  Check,
  X,
  AlertCircle,
  Loader2,
  Plus,
} from "lucide-react";

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: [
      { title: "ImportaPro · Design System" },
      { name: "description", content: "Système de design premium pour ImportaPro, calculateur d'importation intelligent." },
      { property: "og:title", content: "ImportaPro · Design System" },
      { property: "og:description", content: "Système de design premium pour ImportaPro." },
    ],
  }),
  component: DesignSystem,
});

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-xs font-semibold tracking-widest text-primary">
          {id}
        </span>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="surface-card p-6 md:p-8">{children}</div>
    </section>
  );
}

function Swatch({ hex, name, value, light }: { hex: string; name: string; value: string; light?: boolean }) {
  return (
    <div className="space-y-3">
      <div
        className="aspect-square rounded-2xl border border-border"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className={`font-display text-sm font-semibold ${light ? "text-foreground" : "text-foreground"}`}>{value}</p>
        <p className="text-xs text-muted-foreground">{name}</p>
      </div>
    </div>
  );
}

function DesignSystem() {
  const [margin, setMargin] = useState("30000");
  const [checked, setChecked] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary shadow-glow">
              <Package className="h-6 w-6 text-primary-foreground" strokeWidth={2.4} />
            </div>
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                DESIGN SYSTEM
              </p>
              <h1 className="text-display text-3xl md:text-4xl">ImportaPro</h1>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Système de design premium et minimaliste pour le calculateur d'importation intelligent.
            Pensé pour la clarté financière, la précision et le haut de gamme.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        {/* 01 Colors */}
        <Section id="01" title="Palette de couleurs">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            <Swatch hex="#0E1021" name="Background" value="#0E1021" />
            <Swatch hex="#1A1D2E" name="Card" value="#1A1D2E" />
            <Swatch hex="#DF0139" name="Rouge principal" value="#DF0139" />
            <Swatch hex="#FF2D55" name="Rouge secondaire" value="#FF2D55" />
            <Swatch hex="#F3F2FF" name="Blanc" value="#F3F2FF" light />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Swatch hex="#A2A2A2" name="Gris" value="#A2A2A2" />
            <div className="space-y-3">
              <div className="aspect-square rounded-2xl gradient-primary shadow-glow" />
              <div>
                <p className="font-display text-sm font-semibold">Gradient</p>
                <p className="text-xs text-muted-foreground">Primary → Glow</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-square rounded-2xl bg-success/20 border border-success/40" />
              <div>
                <p className="font-display text-sm font-semibold">Success</p>
                <p className="text-xs text-muted-foreground">État positif</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-square rounded-2xl bg-warning/20 border border-warning/40" />
              <div>
                <p className="font-display text-sm font-semibold">Warning</p>
                <p className="text-xs text-muted-foreground">Alerte</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 02 Typography */}
        <Section id="02" title="Typographie">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Poppins · Titres</p>
              <p className="font-display text-7xl font-bold text-foreground">Aa</p>
              <div className="space-y-2">
                <p className="font-display text-4xl font-bold">Display / Bold 700</p>
                <p className="font-display text-2xl font-semibold">Heading / SemiBold 600</p>
                <p className="font-display text-base font-medium text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Inter · Textes</p>
              <p className="text-7xl font-medium text-foreground" style={{ fontFamily: "Inter" }}>Aa</p>
              <div className="space-y-2">
                <p className="text-lg">Body Large / Regular 400</p>
                <p className="text-sm font-medium">Body Medium / Medium 500</p>
                <p className="text-sm text-muted-foreground">
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 Buttons */}
        <Section id="03" title="Boutons">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { label: "Primaire", el: (
                <button className="w-full rounded-2xl gradient-primary px-6 py-4 font-display text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110">
                  Calculer
                </button>
              )},
              { label: "Secondaire", el: (
                <button className="w-full rounded-2xl bg-card-elevated border border-border-strong px-6 py-4 font-display text-sm font-semibold text-foreground transition hover:bg-muted">
                  Annuler
                </button>
              )},
              { label: "Tertiaire", el: (
                <button className="w-full rounded-2xl border border-primary/60 bg-transparent px-6 py-4 font-display text-sm font-semibold text-primary transition hover:bg-primary/10">
                  Voir plus
                </button>
              )},
              { label: "Désactivé", el: (
                <button disabled className="w-full rounded-2xl bg-muted/60 px-6 py-4 font-display text-sm font-semibold text-muted-foreground/60 cursor-not-allowed">
                  Indisponible
                </button>
              )},
            ].map((b) => (
              <div key={b.label} className="space-y-3">
                <p className="text-center text-xs font-medium text-muted-foreground">{b.label}</p>
                {b.el}
              </div>
            ))}
          </div>
        </Section>

        {/* 04 Cards */}
        <Section id="04" title="Cards">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-muted">
                <Package className="h-5 w-5 text-foreground" />
              </div>
              <p className="font-display text-base font-semibold">Carte par défaut</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Surface neutre pour contenu standard.
              </p>
            </div>
            <div className="surface-card p-6 ring-1 ring-primary/40 shadow-glow">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl gradient-primary">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-display text-base font-semibold">Carte mise en avant</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Bordure lumineuse pour les éléments clés.
              </p>
            </div>
            <div className="surface-card p-6 bg-gradient-to-br from-primary/15 to-transparent ring-1 ring-primary/30">
              <p className="text-xs font-medium text-muted-foreground">Montant total</p>
              <p className="mt-3 font-display text-3xl font-bold text-foreground">125 000 Ar</p>
              <p className="mt-1 text-xs text-primary">Prix de vente final</p>
            </div>
          </div>
        </Section>

        {/* 05 Inputs */}
        <Section id="05" title="Champs de saisie">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Par défaut</label>
              <input
                placeholder="Entrer une valeur"
                className="w-full rounded-2xl border border-border bg-input px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Actif</label>
              <input
                defaultValue="0,45"
                className="w-full rounded-2xl border border-primary bg-input px-4 py-3.5 text-sm text-foreground outline-none ring-2 ring-primary/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Rempli</label>
              <input
                defaultValue="79,80"
                className="w-full rounded-2xl border border-border-strong bg-card-elevated px-4 py-3.5 text-sm font-medium text-foreground outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground/60">Désactivé</label>
              <input
                disabled
                placeholder="0,00"
                className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-3.5 text-sm text-muted-foreground/40 cursor-not-allowed"
              />
            </div>
          </div>
        </Section>

        {/* 06 Dropdown */}
        <Section id="06" title="Dropdown">
          <div className="max-w-sm space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Devise</label>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-2xl border border-border bg-input px-4 py-3.5 text-sm text-foreground transition hover:border-border-strong"
            >
              <span>Ar (Ariary)</span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="surface-elevated overflow-hidden p-2 shadow-elevated">
                {["Ar (Ariary)", "EUR (Euro)", "USD (Dollar)", "CNY (Yuan)"].map((opt, i) => (
                  <button
                    key={opt}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-muted ${i === 0 ? "text-primary" : "text-foreground"}`}
                  >
                    {opt}
                    {i === 0 && <Check className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* 07 Radio + Checkbox + Switch */}
        <Section id="07" title="Sélecteurs">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Radio</p>
              {["30 000 Ar", "40 000 Ar", "50 000 Ar", "Personnalisée"].map((opt) => (
                <label key={opt} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-card-elevated px-4 py-3 transition hover:border-border-strong">
                  <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${margin === opt ? "border-primary" : "border-muted-foreground/40"}`}>
                    {margin === opt && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                  </span>
                  <input
                    type="radio"
                    name="margin"
                    className="hidden"
                    checked={margin === opt}
                    onChange={() => setMargin(opt)}
                  />
                  <span className="text-sm text-foreground">{opt}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Checkbox</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setChecked((v) => !v)}
                  className={`grid h-6 w-6 place-items-center rounded-lg border-2 transition ${checked ? "border-primary bg-primary" : "border-muted-foreground/40 bg-transparent"}`}
                >
                  {checked && <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />}
                </button>
                <span className="grid h-6 w-6 place-items-center rounded-lg border-2 border-muted-foreground/40" />
                <span className="grid h-6 w-6 place-items-center rounded-lg border-2 border-muted-foreground/20 bg-muted/40" />
              </div>
              <p className="text-xs text-muted-foreground">Actif · Inactif · Désactivé</p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Switch</p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setSwitchOn((v) => !v)}
                  className={`relative h-7 w-12 rounded-full transition ${switchOn ? "gradient-primary shadow-glow" : "bg-muted"}`}
                >
                  <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-foreground shadow transition-all ${switchOn ? "left-[22px]" : "left-0.5"}`} />
                </button>
                <div className="relative h-7 w-12 rounded-full bg-muted">
                  <span className="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-foreground/80 shadow" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 08 Bottom navigation */}
        <Section id="08" title="Bottom Navigation">
          <div className="mx-auto max-w-sm">
            <div className="surface-elevated p-2">
              <div className="flex items-center justify-around">
                {[
                  { icon: Home, label: "Accueil", active: true },
                  { icon: Calculator, label: "Calcul" },
                  { icon: History, label: "Historique" },
                  { icon: User, label: "Profil" },
                ].map(({ icon: Icon, label, active }) => (
                  <button
                    key={label}
                    className={`flex flex-col items-center gap-1 rounded-2xl px-4 py-3 transition ${active ? "text-primary" : "text-muted-foreground"}`}
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-2xl ${active ? "gradient-primary shadow-glow" : ""}`}>
                      <Icon className={`h-5 w-5 ${active ? "text-primary-foreground" : ""}`} />
                    </span>
                    <span className="font-display text-[10px] font-semibold">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 09 Top App Bar */}
        <Section id="09" title="Top App Bar">
          <div className="space-y-4">
            <div className="surface-card flex items-center justify-between px-5 py-4">
              <button className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <p className="font-display text-base font-semibold">Résultat du calcul</p>
              <button className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                <Settings className="h-5 w-5 text-foreground" />
              </button>
            </div>
            <div className="surface-card flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-xs text-muted-foreground">Bonjour</p>
                <p className="font-display text-lg font-semibold">ImportaPro</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                  <Search className="h-5 w-5 text-foreground" />
                </button>
                <button className="relative grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                  <Bell className="h-5 w-5 text-foreground" />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* 10 Dialog */}
        <Section id="10" title="Dialog">
          <div className="space-y-6">
            <button
              onClick={() => setDialogOpen(true)}
              className="rounded-2xl gradient-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Ouvrir le dialog
            </button>

            <div className="rounded-3xl bg-background/80 p-8 ring-1 ring-border">
              <div className="mx-auto max-w-sm surface-elevated p-6 shadow-elevated">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary/15">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="font-display text-lg font-semibold">Confirmer le calcul</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Voulez-vous enregistrer ce résultat dans l'historique ?
                </p>
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-2xl bg-card-elevated border border-border-strong px-4 py-3 font-display text-sm font-semibold">
                    Annuler
                  </button>
                  <button className="flex-1 rounded-2xl gradient-primary px-4 py-3 font-display text-sm font-semibold text-primary-foreground shadow-glow">
                    Confirmer
                  </button>
                </div>
              </div>
            </div>

            {dialogOpen && (
              <div className="fixed inset-0 z-50 grid place-items-center bg-background/70 backdrop-blur-sm p-6" onClick={() => setDialogOpen(false)}>
                <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm surface-elevated p-6 shadow-elevated">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary/15">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-display text-lg font-semibold">Confirmer le calcul</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Voulez-vous enregistrer ce résultat dans l'historique ?
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setDialogOpen(false)} className="flex-1 rounded-2xl bg-card-elevated border border-border-strong px-4 py-3 font-display text-sm font-semibold">
                      Annuler
                    </button>
                    <button onClick={() => setDialogOpen(false)} className="flex-1 rounded-2xl gradient-primary px-4 py-3 font-display text-sm font-semibold text-primary-foreground shadow-glow">
                      Confirmer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Section>

        {/* 11 Toast */}
        <Section id="11" title="Toast">
          <div className="space-y-4">
            <button
              onClick={() => {
                setToastOpen(true);
                setTimeout(() => setToastOpen(false), 2500);
              }}
              className="rounded-2xl border border-primary/60 bg-transparent px-6 py-3.5 font-display text-sm font-semibold text-primary"
            >
              Déclencher
            </button>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="surface-elevated flex items-center gap-3 px-4 py-3.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-success/20">
                  <Check className="h-4 w-4 text-success" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">Calcul enregistré</p>
                  <p className="text-xs text-muted-foreground">Ajouté à l'historique</p>
                </div>
              </div>
              <div className="surface-elevated flex items-center gap-3 px-4 py-3.5 ring-1 ring-primary/30">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/20">
                  <AlertCircle className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">Champ requis</p>
                  <p className="text-xs text-muted-foreground">Le poids est obligatoire</p>
                </div>
              </div>
              <div className="surface-elevated flex items-center gap-3 px-4 py-3.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-warning/20">
                  <AlertCircle className="h-4 w-4 text-warning" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">Taux mis à jour</p>
                  <p className="text-xs text-muted-foreground">Il y a 2 minutes</p>
                </div>
              </div>
            </div>
            {toastOpen && (
              <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 surface-elevated flex items-center gap-3 px-5 py-4 shadow-elevated">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-success/20">
                  <Check className="h-4 w-4 text-success" strokeWidth={3} />
                </span>
                <p className="font-display text-sm font-semibold">Action confirmée</p>
              </div>
            )}
          </div>
        </Section>

        {/* 12 Loader */}
        <Section id="12" title="Loader">
          <div className="flex flex-wrap items-center gap-10">
            <div className="space-y-3 text-center">
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
              <p className="text-xs text-muted-foreground">Spinner</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="relative grid h-16 w-16 place-items-center">
                <span className="absolute inset-0 rounded-full border-4 border-muted" />
                <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
              </div>
              <p className="text-xs text-muted-foreground">Circulaire</p>
            </div>
            <div className="flex-1 min-w-[200px] space-y-3">
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-3/4 gradient-primary shadow-glow" />
              </div>
              <p className="text-xs text-muted-foreground">Progression linéaire · 75%</p>
            </div>
            <div className="flex gap-2">
              {[0, 150, 300].map((d) => (
                <span
                  key={d}
                  className="h-3 w-3 rounded-full gradient-primary animate-pulse"
                  style={{ animationDelay: `${d}ms` }}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* 13 Icons */}
        <Section id="13" title="Icônes · Lucide">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
            {[
              { icon: Package, label: "Produit" },
              { icon: Calculator, label: "Calcul" },
              { icon: Coins, label: "Change" },
              { icon: Scale, label: "Poids" },
              { icon: FileText, label: "Devis" },
              { icon: History, label: "Historique" },
              { icon: Settings, label: "Paramètres" },
              { icon: TrendingUp, label: "Marge" },
              { icon: Home, label: "Accueil" },
              { icon: User, label: "Profil" },
              { icon: Bell, label: "Alerte" },
              { icon: Search, label: "Recherche" },
              { icon: Plus, label: "Ajouter" },
              { icon: X, label: "Fermer" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-card-elevated border border-border">
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.8} />
                </div>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </Section>

        <footer className="pt-10 text-center">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground">
            IMPORTAPRO · DESIGN SYSTEM v1.0
          </p>
        </footer>
      </main>
    </div>
  );
}
