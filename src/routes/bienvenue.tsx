import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createSession, getSession } from "@/lib/session";
import logoImportaPro from "@/assets/logo-importapro.png";

export const Route = createFileRoute("/bienvenue")({
  head: () => ({
    meta: [
      { title: "Bienvenue · ImportaPro" },
      { name: "description", content: "Entrez votre nom pour commencer avec ImportaPro." },
    ],
  }),
  component: BienvenuePage,
});

function BienvenuePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const s = getSession();
    if (s) navigate({ to: "/home" });
  }, [navigate]);

  const canSubmit = name.trim().length >= 2;

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!canSubmit) {
      setError("Entrez au moins 2 caractères.");
      return;
    }
    createSession(name);
    navigate({ to: "/home" });
  };

  return (
    <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col overflow-hidden bg-background px-6 pb-10 pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-orb absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-float-orb delay-300 absolute -bottom-24 right-0 h-[280px] w-[280px] rounded-full bg-primary-glow/20 blur-[100px]" />
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <img
          src={logoImportaPro}
          alt="ImportaPro"
          width={72}
          height={72}
          className="h-16 w-16 drop-shadow-[0_8px_24px_rgba(223,1,57,0.55)]"
        />
        <div>
          <h1 className="text-display text-3xl font-semibold tracking-tight">
            Bienvenue sur{" "}
            <span className="text-foreground">Importa</span>
            <span className="text-primary">Pro</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entrez votre nom pour démarrer. Aucun mot de passe, aucune inscription.
          </p>
        </div>
      </div>

      <form
        onSubmit={submit}
        className="relative mt-12 space-y-5"
      >
        <div className="surface-card p-5">
          <label
            htmlFor="name"
            className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
          >
            Votre nom
          </label>
          <div className="mt-2 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
              <User className="h-5 w-5" />
            </span>
            <Input
              id="name"
              autoFocus
              autoComplete="off"
              placeholder="Ex. Rakoto"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError(null);
              }}
              className="h-12 flex-1 rounded-2xl border-border bg-background text-base font-semibold focus-visible:ring-primary"
            />
          </div>
          {error && (
            <p className="mt-3 text-xs font-medium text-primary">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform active:scale-[0.98] disabled:opacity-40"
        >
          Commencer
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="text-center text-[11px] text-muted-foreground">
          Vos informations restent sur votre appareil.
        </p>
      </form>
    </div>
  );
}
