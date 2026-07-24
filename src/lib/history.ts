export type CalcRecord = {
  id: string;
  ref?: string; // e.g. "IP-0001" — auto-generated, never reused
  nom?: string;
  createdAt: number;
  updatedAt: number;
  tarifKg: number;
  poidsG: number; // poids unitaire (g)
  prixYuan: number; // prix unitaire (¥)
  taux: number;
  marge: number; // marge unitaire (Ar)
  quantite?: number; // défaut 1
  transport: number;
  produit: number; // produit total (toutes quantités)
  sousTotal: number;
  frais: number;
  coutTana: number;
  prixVente: number; // prix de vente total
};

const KEY = "importapro:history:v1";
const EVT = "importapro:history:changed";
const COUNTER_KEY = "importapro:history:counter:v1";

function formatRef(n: number) {
  return `IP-${String(n).padStart(4, "0")}`;
}

function readCounter(): number {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(COUNTER_KEY);
  return raw ? parseInt(raw, 10) || 0 : 0;
}

export function nextRef(): string {
  if (typeof window === "undefined") return formatRef(1);
  const next = readCounter() + 1;
  window.localStorage.setItem(COUNTER_KEY, String(next));
  return formatRef(next);
}

function read(): CalcRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(records: CalcRecord[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(records));
  window.dispatchEvent(new CustomEvent(EVT));
}

// Backfill missing refs (records created before the ref system) — assign in creation order.
function backfillRefs(records: CalcRecord[]): CalcRecord[] {
  const missing = records.filter((r) => !r.ref);
  if (missing.length === 0) return records;
  missing.sort((a, b) => a.createdAt - b.createdAt);
  for (const r of missing) r.ref = nextRef();
  write(records);
  return records;
}

export function listHistory(): CalcRecord[] {
  const all = backfillRefs(read());
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getRecord(id: string): CalcRecord | undefined {
  return backfillRefs(read()).find((r) => r.id === id);
}

export function upsertRecord(rec: CalcRecord) {
  const all = read();
  const idx = all.findIndex((r) => r.id === rec.id);
  if (idx >= 0) all[idx] = rec;
  else all.push(rec);
  write(all);
}

export function deleteRecord(id: string) {
  write(read().filter((r) => r.id !== id));
}

export function onHistoryChange(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVT, handler);
    window.removeEventListener("storage", handler);
  };
}

export function newId() {
  return `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function formatAr(v: number) {
  return `${Math.round(v).toLocaleString("fr-FR").replace(/\u202f/g, " ")} Ar`;
}

export function formatDateTime(ts: number) {
  const d = new Date(ts);
  const date = d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  const time = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  return { date, time };
}

export function recordToText(r: CalcRecord) {
  const { date, time } = formatDateTime(r.createdAt);
  const qte = r.quantite && r.quantite > 0 ? r.quantite : 1;
  const poidsTotal = r.poidsG * qte;
  const margeTotale = r.marge * qte;
  const prixVenteUnitaire = qte > 0 ? r.prixVente / qte : r.prixVente;
  return [
    `ImportaPro ${r.ref ?? ""} — ${r.nom?.trim() || "Calcul"} du ${date} à ${time}`,
    ``,
    `Quantité       : ${qte}`,
    `Prix Yuan/u    : ${r.prixYuan} ¥`,
    `Taux           : ${r.taux} Ar/¥`,
    `Tarif/kg       : ${formatAr(r.tarifKg)}`,
    `Poids unitaire : ${r.poidsG} g`,
    `Poids total    : ${poidsTotal} g`,
    ``,
    `Transport      : ${formatAr(r.transport)}`,
    `Produit total  : ${formatAr(r.produit)}`,
    `Sous-total     : ${formatAr(r.sousTotal)}`,
    `Frais (15%)    : ${formatAr(r.frais)}`,
    `Coût Tana      : ${formatAr(r.coutTana)}`,
    `Marge unitaire : ${formatAr(r.marge)}`,
    `Marge totale   : ${formatAr(margeTotale)}`,
    `Vente unitaire : ${formatAr(prixVenteUnitaire)}`,
    `Vente totale   : ${formatAr(r.prixVente)}`,
  ].join("\n");
}
