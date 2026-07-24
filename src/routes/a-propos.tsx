import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/a-propos")({
  head: () => ({ meta: [{ title: "À propos · ImportaPro" }] }),
  component: () => (
    <AppShell title="À propos" showBack>
      <div className="surface-card space-y-3 p-6">
        <p className="text-display text-lg">ImportaPro</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Calculateur intelligent pour les importateurs et revendeurs : estimez
          le coût réel d'un produit importé depuis la Chine — produit,
          transport, frais, coût d'arrivée à Madagascar et prix de vente selon
          votre marge.
        </p>
      </div>
    </AppShell>
  ),
});
