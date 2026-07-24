import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/prix")({
  head: () => ({ meta: [{ title: "Prix de vente · ImportaPro" }] }),
  component: () => (
    <AppShell title="Prix de vente" showBack>
      <div className="surface-card space-y-3 p-6">
        <p className="text-sm text-muted-foreground">
          Le calcul du prix de vente est intégré à l'écran Calcul Import.
        </p>
        <Link
          to="/calcul"
          search={{ id: undefined }}
          className="inline-flex rounded-2xl gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Ouvrir le calcul
        </Link>
      </div>
    </AppShell>
  ),
});
