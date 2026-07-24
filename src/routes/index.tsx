import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Package } from "lucide-react";
import { getSession } from "@/lib/session";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ImportaPro · Calculateur d'importation" },
      { name: "description", content: "ImportaPro — calculez vos coûts d'importation et prix de vente en quelques secondes." },
      { property: "og:title", content: "ImportaPro" },
      { property: "og:description", content: "Calculateur d'importation premium." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => {
      const s = getSession();
      navigate({ to: s ? "/home" : "/bienvenue" });
    }, 1800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[480px] flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute inset-0 -z-10">
        <div className="animate-float-orb absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-float-orb delay-300 absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-primary-glow/20 blur-[100px]" />
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="animate-splash-logo animate-pulse-glow grid h-24 w-24 place-items-center rounded-[28px] gradient-primary">
          <Package className="h-12 w-12 text-primary-foreground" strokeWidth={2.4} />
        </div>
        <div className="text-center">
          <h1 className="animate-splash-title text-display text-4xl">ImportaPro</h1>
          <p className="animate-splash-title delay-200 mt-2 text-sm text-muted-foreground">
            Le calcul d'importation, en toute simplicité.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-4">
        <div className="relative h-1.5 w-32 overflow-hidden rounded-full bg-card">
          <div className="calc-bar h-full w-full rounded-full bg-card" />
        </div>
        <p className="animate-splash-title delay-400 text-xs text-muted-foreground">v1.0 · Premium</p>
      </div>
    </div>
  );
}

