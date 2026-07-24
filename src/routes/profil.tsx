import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  User,
  ChevronRight,
  Shield,
  Bell,
  LogOut,
  Sparkles,
  Info,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { clearSession, getSession, onSessionChange, type Session } from "@/lib/session";
import { toast } from "sonner";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil · ImportaPro" },
      { name: "description", content: "Votre profil ImportaPro et préférences de compte." },
    ],
  }),
  component: ProfilPage,
});

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
}

function ProfilPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(() => getSession());

  useEffect(() => onSessionChange(() => setSession(getSession())), []);

  const handleLogout = () => {
    if (!window.confirm("Se déconnecter et effacer la session ?")) return;
    clearSession();
    toast.success("Session effacée");
    navigate({ to: "/bienvenue" });
  };

  const name = session?.name ?? "Invité";

  return (
    <AppShell title="Profil">
      <div className="space-y-6">
        {/* Identity card */}
        <div className="relative overflow-hidden rounded-[24px] border border-border bg-card p-5">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground text-display text-xl shadow-[var(--shadow-glow)]">
              {initials(name)}
            </div>
            <div className="min-w-0">
              <p className="truncate text-display text-lg font-semibold">{name}</p>
              <p className="truncate text-xs text-muted-foreground">
                ID · {session?.uid ?? "—"}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                <Sparkles className="h-3 w-3" /> ImportaPro
              </span>
            </div>
          </div>
        </div>

        {/* Info — pseudo only */}
        <Section title="Informations">
          <Row icon={User} label="Pseudo" value={name} />
        </Section>

        {/* Preferences */}
        <Section title="Préférences">
          <LinkRow icon={Bell} label="Notifications" to="/notifications" />
          <LinkRow icon={Shield} label="Sécurité" to="/parametres" />
          <LinkRow icon={Info} label="À propos" to="/a-propos" />
        </Section>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition hover:bg-card/70"
        >
          <LogOut className="h-4 w-4" /> Déconnexion
        </button>
      </div>
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="surface-card divide-y divide-border overflow-hidden">{children}</div>
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-muted text-foreground/80">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function LinkRow({
  icon: Icon,
  label,
  to,
}: {
  icon: typeof User;
  label: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-background/40"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-muted text-foreground/80">
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex-1 text-sm font-semibold">{label}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </Link>
  );
}
