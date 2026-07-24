import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Coins,
  Truck,
  TrendingUp,
  Sparkles,
  Moon,
  Sun,
  RotateCcw,
  Check,
  UserCog,
  LogOut,
  Globe,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { clearSession, getSession, onSessionChange } from "@/lib/session";
import {
  DEFAULT_SETTINGS,
  getSettings,
  onSettingsChange,
  saveSettings,
  type Settings,
} from "@/lib/settings";
import {
  getTheme,
  setTheme,
  getCurrency,
  setCurrency,
  onPrefsChange,
  type Currency,
} from "@/lib/preferences";

export const Route = createFileRoute("/parametres")({
  head: () => ({ meta: [{ title: "Paramètres · ImportaPro" }] }),
  component: ParametresPage,
});


function ParametresPage() {
  const navigate = useNavigate();
  const [s, setS] = useState<Settings>(() => getSettings());
  const [session, setSession] = useState(() => getSession());
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [theme, setThemeState] = useState(() => getTheme());
  const [currency, setCurrencyState] = useState<Currency>(() => getCurrency());
  const firstRun = useRef(true);

  useEffect(() => onSettingsChange(() => setS(getSettings())), []);
  useEffect(
    () =>
      onPrefsChange(() => {
        setThemeState(getTheme());
        setCurrencyState(getCurrency());
      }),
    [],
  );

  useEffect(() => onSessionChange(() => setSession(getSession())), []);

  const handleChangeProfile = () => {
    clearSession();
    toast.success("Profil réinitialisé");
    navigate({ to: "/bienvenue" });
  };
  const handleClearSession = () => {
    if (!window.confirm("Effacer la session actuelle ?")) return;
    clearSession();
    toast.success("Session effacée");
    navigate({ to: "/bienvenue" });
  };

  // Auto-save (debounced)
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const h = window.setTimeout(() => {
      saveSettings(s);
      setSavedAt(Date.now());
      window.setTimeout(() => setSavedAt(null), 1500);
    }, 350);
    return () => window.clearTimeout(h);
  }, [s]);

  const update = <K extends keyof Settings>(k: K, v: Settings[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const reset = () => {
    setS(DEFAULT_SETTINGS);
    toast.success("Valeurs par défaut restaurées");
  };

  return (
    <AppShell
      title="Paramètres"
      showBack
      action={
        savedAt ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-[11px] font-medium text-success">
            <Check className="h-3 w-3" /> Enregistré
          </span>
        ) : null
      }
    >
      <div className="space-y-5">
        <p className="text-xs text-muted-foreground">
          Les valeurs sont enregistrées automatiquement et utilisées comme valeurs par défaut
          dans le calcul.
        </p>

        <Row
          icon={Coins}
          title="Taux de change"
          hint="Ariary par Yuan (¥)"
          suffix="Ar/¥"
        >
          <NumInput
            value={s.taux}
            onChange={(v) => update("taux", v)}
            placeholder="640"
          />
        </Row>

        <Row
          icon={Truck}
          title="Tarif transport"
          hint="Ariary par kilogramme"
          suffix="Ar/kg"
        >
          <NumInput
            value={s.tarifKg}
            onChange={(v) => update("tarifKg", v)}
            placeholder="70000"
          />
        </Row>


        <Row
          icon={TrendingUp}
          title="Marge par défaut"
          hint="Marge initiale lors d'un nouveau calcul"
          suffix="Ar"
        >
          <NumInput
            value={s.margeDefaut}
            onChange={(v) => update("margeDefaut", v)}
            placeholder="30000"
          />
        </Row>

        <ToggleRow
          icon={Sparkles}
          title="Arrondi automatique"
          hint="Arrondit le prix de vente aux 100 Ar"
          checked={s.arrondiAuto}
          onCheckedChange={(v) => update("arrondiAuto", v)}
        />

        <ToggleRow
          icon={theme === "dark" ? Moon : Sun}
          title="Mode sombre"
          hint="Basculer entre le thème sombre et clair"
          checked={theme === "dark"}
          onCheckedChange={(v) => {
            const next = v ? "dark" : "light";
            setTheme(next);
            setThemeState(next);
          }}
        />

        {/* Currency selection */}
        <div className="space-y-2 pt-2">
          <p className="px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Devise d'affichage
          </p>
          <div className="surface-card p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <Globe className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-display text-sm font-semibold">Sélection de devise</p>
                <p className="text-[11px] text-muted-foreground">
                  Devise préférée pour l'affichage des montants.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {(["MGA", "EUR", "USD", "CNY"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCurrency(c);
                    setCurrencyState(c);
                  }}
                  className={
                    "rounded-2xl border px-2 py-2 text-xs font-semibold transition " +
                    (currency === c
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border bg-background/40 text-foreground hover:border-border-strong")
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* Profil / Session */}
        <div className="space-y-2 pt-2">
          <p className="px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Profil
          </p>
          <div className="surface-card p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <UserCog className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-display text-sm font-semibold">
                  {session?.name ?? "Invité"}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">
                  ID · {session?.uid ?? "—"}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleChangeProfile}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/40 px-3 py-2.5 text-xs font-semibold text-foreground transition hover:border-border-strong"
              >
                <UserCog className="h-4 w-4" />
                Changer de profil
              </button>
              <button
                type="button"
                onClick={handleClearSession}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-3 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary/15"
              >
                <LogOut className="h-4 w-4" />
                Effacer session
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={reset}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:border-border-strong"
        >
          <RotateCcw className="h-4 w-4" />
          Réinitialiser les valeurs par défaut
        </button>
      </div>
    </AppShell>
  );
}

/* ----- helpers ----- */

function NumInput({
  value,
  onChange,
  placeholder,
}: {
  value: number;
  onChange: (v: number) => void;
  placeholder?: string;
}) {
  const [raw, setRaw] = useState<string>(String(value));
  useEffect(() => {
    setRaw(String(value));
  }, [value]);
  return (
    <Input
      inputMode="decimal"
      value={raw}
      placeholder={placeholder}
      onChange={(e) => {
        const v = e.target.value;
        setRaw(v);
        const n = parseFloat(v.replace(",", "."));
        if (Number.isFinite(n)) onChange(n);
        else if (v === "") onChange(0);
      }}
      className="h-12 w-36 rounded-2xl border-border bg-background text-right text-base font-semibold text-foreground focus-visible:ring-primary"
    />
  );
}

function Row({
  icon: Icon,
  title,
  hint,
  suffix,
  children,
}: {
  icon: typeof Coins;
  title: string;
  hint?: string;
  suffix?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface-card flex items-center gap-3 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-display text-sm font-semibold text-foreground">{title}</p>
        {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
      </div>
      <div className="flex items-center gap-2">
        {children}
        {suffix && (
          <span className="w-12 text-[11px] font-medium text-muted-foreground">{suffix}</span>
        )}
      </div>
    </div>
  );
}

function ToggleRow({
  icon: Icon,
  title,
  hint,
  checked,
  onCheckedChange,
  disabled,
}: {
  icon: typeof Coins;
  title: string;
  hint?: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="surface-card flex items-center gap-3 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-display text-sm font-semibold text-foreground">{title}</p>
        {hint && <p className="text-[11px] text-muted-foreground">{hint}</p>}
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} />
    </div>
  );
}
