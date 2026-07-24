import { type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Plus,
  History,
  Settings,
  ChevronLeft,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AppShellProps {
  title?: ReactNode;
  showBack?: boolean;
  backTo?: string;
  action?: ReactNode;
  children: ReactNode;
  hideBottomNav?: boolean;
}

export function AppShell({
  title,
  showBack,
  backTo = "/home",
  action,
  children,
  hideBottomNav,
}: AppShellProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col overflow-x-clip bg-background text-foreground">
      {title && (
        <header
          className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/60 bg-background/70 px-5 py-4 backdrop-blur-2xl"
          style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
        >
          {showBack ? (
            <Link
              to={backTo}
              aria-label="Retour"
              className="-ml-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-card text-foreground transition-all hover:bg-card/80 active:scale-90"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>
          ) : null}
          <h1 className="min-w-0 flex-1 truncate text-display text-lg font-semibold">
            {title}
          </h1>
          {action ?? null}
        </header>
      )}
      <main
        key={pathname}
        className={cn(
          "animate-page-enter flex-1 px-5 pt-5",
          hideBottomNav ? "pb-8" : "pb-[calc(7rem+env(safe-area-inset-bottom))]",
        )}
      >
        {children}
      </main>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
}

const sideItems = [
  { to: "/home", label: "Accueil", icon: Home },
  { to: "/historique", label: "Historique", icon: History },
] as const;

const sideItemsRight = [
  { to: "/parametres", label: "Réglages", icon: Settings },
  { to: "/profil", label: "Profil", icon: User },
] as const;

function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[480px] px-3"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="relative flex h-[68px] items-center justify-between rounded-[32px] border border-border-strong bg-card/85 px-5 shadow-[var(--shadow-elevated)] backdrop-blur-2xl">
        {sideItems.map((i) => (
          <NavItem key={i.to} {...i} active={pathname === i.to} />
        ))}

        {/* Center FAB */}
        <Link
          to="/calcul"
          search={{ id: undefined }}
          aria-label="Nouveau calcul"
          className="absolute left-1/2 -top-7 -translate-x-1/2"
        >
          <span className="pointer-events-none absolute -inset-2 rounded-full bg-primary-glow/25 blur-xl" />
          <span
            className={cn(
              "relative grid h-16 w-16 place-items-center rounded-full gradient-primary text-primary-foreground",
              "border-4 border-background shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)]",
              "transition-transform active:scale-95",
              pathname === "/calcul" && "animate-pulse-glow",
            )}
          >
            <Plus className="h-7 w-7" strokeWidth={2.5} />
          </span>
        </Link>

        {/* Spacer under FAB */}
        <span className="w-14 shrink-0" aria-hidden />

        {sideItemsRight.map((i) => (
          <NavItem key={i.to} {...i} active={pathname === i.to} />
        ))}
      </div>
    </nav>
  );
}

function NavItem({
  to,
  label,
  icon: Icon,
  active,
}: {
  to: string;
  label: string;
  icon: typeof Home;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex min-w-0 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[10px] font-semibold transition-colors",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <Icon className="h-[22px] w-[22px]" strokeWidth={active ? 2.4 : 1.75} />
      <span className="truncate">{label}</span>
    </Link>
  );
}
