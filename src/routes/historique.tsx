import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Trash2,
  Pencil,
  Share2,
  Copy,
  FileDown,
  Inbox,
  Calendar,
  Clock,
  X,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  deleteRecord,
  formatAr,
  formatDateTime,
  listHistory,
  onHistoryChange,
  recordToText,
  type CalcRecord,
} from "@/lib/history";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/historique")({
  head: () => ({ meta: [{ title: "Historique · ImportaPro" }] }),
  component: HistoriquePage,
});

function HistoriquePage() {
  const [items, setItems] = useState<CalcRecord[]>([]);
  const [query, setQuery] = useState("");
  const [toDelete, setToDelete] = useState<CalcRecord | null>(null);

  useEffect(() => {
    setItems(listHistory());
    return onHistoryChange(() => setItems(listHistory()));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((r) => {
      const { date, time } = formatDateTime(r.createdAt);
      const hay = [
        r.ref ?? "",
        r.nom ?? "",
        date,
        time,
        r.quantite ?? 1,
        r.prixYuan,
        r.poidsG,
        r.transport,
        r.produit,
        r.sousTotal,
        r.frais,
        r.marge,
        r.prixVente,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);

  return (
    <AppShell title="Historique" showBack>
      <div className="space-y-5">
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par référence ou nom…"
            className="h-12 rounded-2xl border-border bg-card pl-11 pr-10 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-muted text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          {filtered.length} calcul{filtered.length > 1 ? "s" : ""}
          {query && ` sur ${items.length}`}
        </p>

        {filtered.length === 0 ? (
          <EmptyState hasQuery={!!query} />
        ) : (
          <ul className="space-y-3">
            {filtered.map((r) => (
              <HistoryCard key={r.id} record={r} onDelete={() => setToDelete(r)} />
            ))}
          </ul>
        )}
      </div>

      <Dialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <DialogContent className="rounded-[24px] border-border-strong bg-card">
          <DialogHeader>
            <DialogTitle className="text-display">Supprimer ce calcul ?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Cette action est définitive. Le calcul sera retiré de l'historique local.
          </p>
          <DialogFooter className="gap-2 sm:gap-2">
            <button
              type="button"
              onClick={() => setToDelete(null)}
              className="rounded-2xl bg-muted px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/80"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => {
                if (toDelete) {
                  deleteRecord(toDelete.id);
                  toast.success("Calcul supprimé");
                  setToDelete(null);
                }
              }}
              className="gradient-primary rounded-2xl px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              Supprimer
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}

function EmptyState({ hasQuery }: { hasQuery: boolean }) {
  return (
    <div className="surface-card flex flex-col items-center gap-3 p-10 text-center">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-muted text-muted-foreground">
        <Inbox className="h-6 w-6" />
      </div>
      <p className="text-display text-base font-semibold">
        {hasQuery ? "Aucun résultat" : "Aucun calcul enregistré"}
      </p>
      <p className="max-w-[260px] text-xs text-muted-foreground">
        {hasQuery
          ? "Essayez une autre recherche."
          : "Vos calculs apparaîtront ici automatiquement."}
      </p>
      {!hasQuery && (
        <Link
          to="/calcul"
          search={{ id: undefined }}
          className="gradient-primary mt-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
        >
          Nouveau calcul
        </Link>
      )}
    </div>
  );
}

function HistoryCard({
  record,
  onDelete,
}: {
  record: CalcRecord;
  onDelete: () => void;
}) {
  const { date, time } = formatDateTime(record.createdAt);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(recordToText(record));
      toast.success("Calcul copié");
    } catch {
      toast.error("Copie impossible");
    }
  };

  const handleShare = async () => {
    const text = recordToText(record);
    const nav = navigator as Navigator & {
      share?: (data: { title?: string; text?: string }) => Promise<void>;
    };
    if (nav.share) {
      try {
        await nav.share({ title: "ImportaPro — Calcul", text });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        toast.success("Partage indisponible — copié dans le presse-papier");
      } catch {
        toast.error("Partage indisponible");
      }
    }
  };

  const handleExport = async () => {
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const m = 48;
      let y = m;

      doc.setFillColor(14, 16, 33);
      doc.rect(0, 0, doc.internal.pageSize.getWidth(), 110, "F");
      doc.setTextColor(243, 242, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text("ImportaPro", m, 56);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Détail du calcul d'importation", m, 80);
      if (record.ref) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(record.ref, doc.internal.pageSize.getWidth() - m, 56, { align: "right" });
      }

      y = 150;
      doc.setTextColor(20, 20, 30);
      doc.setFontSize(10);
      const refLabel = record.ref ? `Réf : ${record.ref}   ` : "";
      doc.text(`${refLabel}Date : ${date}   Heure : ${time}`, m, y);
      y += 28;

      const row = (label: string, value: string, strong = false, accent = false) => {
        doc.setFont("helvetica", strong ? "bold" : "normal");
        if (accent) doc.setTextColor(223, 1, 57);
        else doc.setTextColor(20, 20, 30);
        doc.setFontSize(11);
        doc.text(label, m, y);
        doc.text(value, doc.internal.pageSize.getWidth() - m, y, { align: "right" });
        y += 22;
        doc.setDrawColor(230, 230, 235);
        doc.line(m, y - 12, doc.internal.pageSize.getWidth() - m, y - 12);
      };

      const qte = record.quantite && record.quantite > 0 ? record.quantite : 1;
      const poidsTotal = record.poidsG * qte;
      const margeTotale = record.marge * qte;
      const prixVenteUnitaire = qte > 0 ? record.prixVente / qte : record.prixVente;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(20, 20, 30);
      doc.text("Entrées", m, y);
      y += 18;
      row("Quantité", `${qte}`);
      row("Nom du produit", record.nom?.trim() || "—");
      row("Prix unitaire (¥)", `${record.prixYuan} ¥`);
      row("Taux de change", `${record.taux} Ar/¥`);
      row("Tarif / kg", formatAr(record.tarifKg));
      row("Poids unitaire", `${record.poidsG} g`);
      row("Poids total", `${poidsTotal} g`);

      y += 12;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("Détail du calcul", m, y);
      y += 18;
      row("Transport", formatAr(record.transport));
      row(`Produit total (× ${qte})`, formatAr(record.produit));
      row("Sous-total", formatAr(record.sousTotal), true);
      row("Frais d'importation (15%)", formatAr(record.frais), false, true);
      row("Coût arrivée Tana", formatAr(record.coutTana), true);
      row("Marge unitaire", formatAr(record.marge));
      row(`Marge totale (× ${qte})`, formatAr(margeTotale), true);
      row("Prix de vente unitaire", formatAr(prixVenteUnitaire));

      y += 14;
      doc.setFillColor(223, 1, 57);
      doc.roundedRect(m, y, doc.internal.pageSize.getWidth() - m * 2, 64, 14, 14, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(`PRIX DE VENTE TOTAL (${qte} unité${qte > 1 ? "s" : ""})`, m + 18, y + 24);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text(formatAr(record.prixVente), m + 18, y + 50);

      doc.save(`importapro-${date.replaceAll("/", "-")}-${time.replace(":", "h")}.pdf`);
      toast.success("PDF exporté");
    } catch {
      toast.error("Export PDF impossible");
    }
  };

  return (
    <li className="surface-card overflow-hidden">
      <div className="flex items-start gap-3 p-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)] leading-none">
          {record.ref ? (
            <div className="flex flex-col items-center justify-center gap-0.5">
              <span className="text-[8px] font-semibold uppercase tracking-wider opacity-80">
                {record.ref.split("-")[0]}
              </span>
              <span className="text-display text-[13px] font-bold tabular-nums">
                {record.ref.split("-")[1] ?? record.ref}
              </span>
            </div>
          ) : (
            <span className="text-display text-sm font-bold">
              {new Date(record.createdAt).getDate().toString().padStart(2, "0")}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-display text-base font-semibold text-foreground truncate">
            {record.nom?.trim() || "Sans nom"}
          </p>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground">
            {record.ref && (
              <span className="font-semibold text-primary tabular-nums">{record.ref}</span>
            )}
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {time}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
              × {record.quantite && record.quantite > 0 ? record.quantite : 1}
            </span>
          </div>
        </div>
      </div>

      {(() => {
        const qte = record.quantite && record.quantite > 0 ? record.quantite : 1;
        const prixUnit = qte > 0 ? record.prixVente / qte : record.prixVente;
        return (
          <dl className="grid grid-cols-2 gap-x-3 gap-y-1 border-t border-border bg-background/40 px-4 py-3 text-[11px]">
            <Stat label={`Prix total (× ${qte})`} value={formatAr(record.prixVente)} accent />
            <Stat label="Prix / unité" value={formatAr(prixUnit)} />
            <Stat label="Marge totale" value={formatAr(record.marge * qte)} />
            <Stat label="Coût d'arrivée" value={formatAr(record.coutTana)} />
          </dl>
        );
      })()}

      <div className="grid grid-cols-5 gap-1 border-t border-border bg-card/60 p-2">
        <ActionBtn icon={Pencil} label="Modifier" asLink to="/calcul" search={{ id: record.id }} />
        <ActionBtn icon={Copy} label="Copier" onClick={handleCopy} />
        <ActionBtn icon={Share2} label="Partager" onClick={handleShare} />
        <ActionBtn icon={FileDown} label="PDF" onClick={handleExport} />
        <ActionBtn icon={Trash2} label="Suppr." onClick={onDelete} destructive />
      </div>
    </li>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={cn("font-semibold", accent ? "text-primary" : "text-foreground")}>{value}</dd>
    </div>
  );
}

type ActionBtnProps = {
  icon: typeof Pencil;
  label: string;
  onClick?: () => void;
  destructive?: boolean;
  asLink?: boolean;
  to?: string;
  search?: Record<string, unknown>;
};

function ActionBtn({ icon: Icon, label, onClick, destructive, asLink, to, search }: ActionBtnProps) {
  const cls = cn(
    "flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-medium transition-colors",
    destructive
      ? "text-muted-foreground hover:bg-primary/10 hover:text-primary"
      : "text-muted-foreground hover:bg-muted hover:text-foreground",
  );
  if (asLink && to) {
    return (
      <Link to={to as "/calcul"} search={search as { id: string | undefined }} className={cls}>

        <Icon className="h-4 w-4" />
        {label}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
