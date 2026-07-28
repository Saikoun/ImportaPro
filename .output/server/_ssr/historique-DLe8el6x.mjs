import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { D as Inbox, F as Clock, H as Calendar, M as FileDown, N as Copy, d as Share2, o as Trash2, p as Search, t as X, y as Pencil } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { a as listHistory, c as onHistoryChange, l as recordToText, n as formatAr, r as formatDateTime, t as deleteRecord } from "./history-CmpTOKK3.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/historique-DLe8el6x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function HistoriquePage() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [toDelete, setToDelete] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setItems(listHistory());
		return onHistoryChange(() => setItems(listHistory()));
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return items;
		return items.filter((r) => {
			const { date, time } = formatDateTime(r.createdAt);
			return [
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
				r.prixVente
			].join(" ").toLowerCase().includes(q);
		});
	}, [items, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Historique",
		showBack: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Rechercher par référence ou nom…",
							className: "h-12 rounded-2xl border-border bg-card pl-11 pr-10 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setQuery(""),
							className: "absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-muted text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						filtered.length,
						" calcul",
						filtered.length > 1 ? "s" : "",
						query && ` sur ${items.length}`
					]
				}),
				filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { hasQuery: !!query }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: filtered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryCard, {
						record: r,
						onDelete: () => setToDelete(r)
					}, r.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!toDelete,
			onOpenChange: (o) => !o && setToDelete(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "rounded-[24px] border-border-strong bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-display",
						children: "Supprimer ce calcul ?"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Cette action est définitive. Le calcul sera retiré de l'historique local."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2 sm:gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setToDelete(null),
							className: "rounded-2xl bg-muted px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/80",
							children: "Annuler"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								if (toDelete) {
									deleteRecord(toDelete.id);
									toast.success("Calcul supprimé");
									setToDelete(null);
								}
							},
							className: "gradient-primary rounded-2xl px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]",
							children: "Supprimer"
						})]
					})
				]
			})
		})]
	});
}
function EmptyState({ hasQuery }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card flex flex-col items-center gap-3 p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-14 w-14 place-items-center rounded-2xl bg-muted text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-display text-base font-semibold",
				children: hasQuery ? "Aucun résultat" : "Aucun calcul enregistré"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[260px] text-xs text-muted-foreground",
				children: hasQuery ? "Essayez une autre recherche." : "Vos calculs apparaîtront ici automatiquement."
			}),
			!hasQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/calcul",
				search: { id: void 0 },
				className: "gradient-primary mt-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]",
				children: "Nouveau calcul"
			})
		]
	});
}
function HistoryCard({ record, onDelete }) {
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
		const nav = navigator;
		if (nav.share) try {
			await nav.share({
				title: "ImportaPro — Calcul",
				text
			});
		} catch {}
		else try {
			await navigator.clipboard.writeText(text);
			toast.success("Partage indisponible — copié dans le presse-papier");
		} catch {
			toast.error("Partage indisponible");
		}
	};
	const handleExport = async () => {
		try {
			const { jsPDF } = await import("../_libs/jspdf.mjs").then((n) => n.t);
			const doc = new jsPDF({
				unit: "pt",
				format: "a4"
			});
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
			const row = (label, value, strong = false, accent = false) => {
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
			doc.text(`PRIX DE VENTE TOTAL (${qte} unité${qte > 1 ? "s" : ""})`, 66, y + 24);
			doc.setFont("helvetica", "bold");
			doc.setFontSize(20);
			doc.text(formatAr(record.prixVente), 66, y + 50);
			doc.save(`importapro-${date.replaceAll("/", "-")}-${time.replace(":", "h")}.pdf`);
			toast.success("PDF exporté");
		} catch {
			toast.error("Export PDF impossible");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "surface-card overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)] leading-none",
					children: record.ref ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[8px] font-semibold uppercase tracking-wider opacity-80",
							children: record.ref.split("-")[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-display text-[13px] font-bold tabular-nums",
							children: record.ref.split("-")[1] ?? record.ref
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-display text-sm font-bold",
						children: new Date(record.createdAt).getDate().toString().padStart(2, "0")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-display text-base font-semibold text-foreground truncate",
						children: record.nom?.trim() || "Sans nom"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground",
						children: [
							record.ref && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-primary tabular-nums",
								children: record.ref
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
									" ",
									date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
									" ",
									time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary",
								children: ["× ", record.quantite && record.quantite > 0 ? record.quantite : 1]
							})
						]
					})]
				})]
			}),
			(() => {
				const qte = record.quantite && record.quantite > 0 ? record.quantite : 1;
				const prixUnit = qte > 0 ? record.prixVente / qte : record.prixVente;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-x-3 gap-y-1 border-t border-border bg-background/40 px-4 py-3 text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: `Prix total (× ${qte})`,
							value: formatAr(record.prixVente),
							accent: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Prix / unité",
							value: formatAr(prixUnit)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Marge totale",
							value: formatAr(record.marge * qte)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Coût d'arrivée",
							value: formatAr(record.coutTana)
						})
					]
				});
			})(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-5 gap-1 border-t border-border bg-card/60 p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: Pencil,
						label: "Modifier",
						asLink: true,
						to: "/calcul",
						search: { id: record.id }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: Copy,
						label: "Copier",
						onClick: handleCopy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: Share2,
						label: "Partager",
						onClick: handleShare
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: FileDown,
						label: "PDF",
						onClick: handleExport
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: Trash2,
						label: "Suppr.",
						onClick: onDelete,
						destructive: true
					})
				]
			})
		]
	});
}
function Stat({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("font-semibold", accent ? "text-primary" : "text-foreground"),
			children: value
		})]
	});
}
function ActionBtn({ icon: Icon, label, onClick, destructive, asLink, to, search }) {
	const cls = cn("flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-medium transition-colors", destructive ? "text-muted-foreground hover:bg-primary/10 hover:text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground");
	if (asLink && to) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		search,
		className: cls,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cls,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
	});
}
//#endregion
export { HistoriquePage as component };
