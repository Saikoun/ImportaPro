import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { G as ArrowUpRight, I as ClipboardList, K as ArrowRight, T as Landmark, U as Calculator, W as Bell, a as TrendingUp, b as Package, i as Truck, j as FileText, k as History, l as Sparkles, s as Tag, v as Percent, w as Lightbulb } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
import { i as onSessionChange, r as getSession } from "./session-D1W-TbwR.mjs";
import { t as logo_importapro_default } from "./logo-importapro-BYtWj2tW.mjs";
import { t as AnimatedCounter } from "./animated-counter-CplA4Btm.mjs";
import { a as listHistory, c as onHistoryChange, n as formatAr } from "./history-CmpTOKK3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-C-7xmOct.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const navigate = useNavigate();
	const [records, setRecords] = (0, import_react.useState)([]);
	const [session, setSession] = (0, import_react.useState)(() => getSession());
	(0, import_react.useEffect)(() => {
		setRecords(listHistory());
		return onHistoryChange(() => setRecords(listHistory()));
	}, []);
	(0, import_react.useEffect)(() => {
		const refresh = () => {
			const s = getSession();
			setSession(s);
			if (!s) navigate({ to: "/bienvenue" });
		};
		refresh();
		return onSessionChange(refresh);
	}, [navigate]);
	const last = records[0];
	const totalMonth = (0, import_react.useMemo)(() => {
		const now = /* @__PURE__ */ new Date();
		return records.filter((r) => {
			const d = new Date(r.updatedAt);
			return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
		}).reduce((s, r) => s + r.prixVente, 0);
	}, [records]);
	const hero = last?.prixVente ?? 0;
	const transport = last?.transport ?? 0;
	const frais = last?.frais ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logo_importapro_default,
				alt: "ImportaPro",
				width: 32,
				height: 32,
				className: "h-8 w-8 shrink-0 drop-shadow-[0_4px_12px_rgba(223,1,57,0.45)]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-display text-lg font-bold tracking-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground",
					children: "Importa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "Pro"
				})]
			})]
		}),
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/notifications",
			"aria-label": "Notifications",
			className: "relative grid h-10 w-10 place-items-center rounded-2xl bg-card text-foreground transition hover:bg-card/70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" })]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Bienvenue,"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display text-2xl font-semibold",
						children: [session?.name ?? "Invité", " 👋"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Estimez vos coûts d'importation en quelques secondes."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroCard, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -inset-0.5 rounded-[28px] bg-linear-to-r from-primary to-primary-glow opacity-25 blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[28px] border border-border-strong bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl animate-float-orb" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Dernier prix de vente"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border bg-background/40 px-2 py-0.5 text-[10px] font-bold text-primary-glow",
									children: "MGA"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-display text-[32px] leading-tight font-bold tracking-tight tabular-nums",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
										value: hero,
										format: (n) => Math.round(n).toLocaleString("fr-FR")
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-muted-foreground",
										children: "Ar"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									icon: Truck,
									label: "Transport",
									value: transport
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									icon: Landmark,
									label: "Frais",
									value: frais
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-4 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPill, {
							to: "/calcul",
							icon: Calculator,
							label: "Simuler",
							accent: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPill, {
							to: "/historique",
							icon: FileText,
							label: "Devis"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPill, {
							to: "/historique",
							icon: History,
							label: "Suivi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickPill, {
							to: "/parametres",
							icon: TrendingUp,
							label: "Tarifs"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex items-center gap-4 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: "Volume simulé ce mois"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-display text-lg font-semibold tabular-nums",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
									value: totalMonth,
									format: (n) => formatAr(n)
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-primary-glow" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-display text-base font-semibold",
						children: "Activités récentes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/historique",
						className: "text-xs font-semibold text-primary-glow",
						children: "Voir tout"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 space-y-3",
					children: [records.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {}), records.slice(0, 4).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/calcul",
						search: { id: r.id },
						className: "surface-card flex items-center gap-4 p-4 transition-all hover:border-border-strong active:scale-[0.99]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-muted text-foreground/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-sm font-semibold",
									children: [
										"Import · ",
										r.poidsG,
										" g"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-muted-foreground",
									children: [
										new Date(r.updatedAt).toLocaleDateString("fr-FR", {
											day: "2-digit",
											month: "short"
										}),
										" ",
										"· ",
										r.prixYuan,
										" ¥"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-display text-sm font-semibold tabular-nums",
									children: formatAr(r.prixVente)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-semibold text-primary-glow",
									children: "Détails"
								})]
							})
						]
					}, r.id))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyTipCard, {})
			]
		})
	});
}
function MiniStat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-background/40 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-bold uppercase tracking-wider",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm font-semibold tabular-nums",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
				value,
				format: (n) => formatAr(n)
			})
		})]
	});
}
function QuickPill({ to, icon: Icon, label, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		...to === "/calcul" ? {
			to,
			search: { id: void 0 }
		} : { to },
		className: "flex flex-col items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform active:scale-95 " + (accent ? "text-primary" : "text-foreground/80"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "h-6 w-6",
				strokeWidth: 1.6
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] font-medium text-muted-foreground",
			children: label
		})]
	});
}
function EmptyState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card p-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold",
			children: "Aucun calcul pour le moment"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: "Lancez votre premier calcul depuis le bouton central."
		})]
	});
}
function IntroCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden rounded-[28px] border border-border-strong bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Découvrir"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-3 text-display text-lg font-semibold",
					children: ["Bienvenue sur ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "ImportaPro"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs font-medium text-muted-foreground",
					children: "Estimez vos coûts d'importation en quelques secondes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[12.5px] leading-relaxed text-foreground/75",
					children: "Calculateur intelligent pour les importateurs et revendeurs : estimez le coût réel d'un produit importé depuis la Chine — produit, transport, frais, coût d'arrivée à Madagascar et prix de vente selon votre marge."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
						children: "Comment ça marche ?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: [
							{
								icon: ClipboardList,
								label: "Saisissez les infos produit"
							},
							{
								icon: Calculator,
								label: "Calcul automatique des coûts"
							},
							{
								icon: Percent,
								label: "Définissez votre marge"
							},
							{
								icon: Tag,
								label: "Obtenez votre prix de vente"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 rounded-2xl border border-border bg-background/40 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] font-bold text-primary-glow",
									children: ["Étape ", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11.5px] font-medium leading-tight text-foreground/85",
									children: s.label
								})]
							})]
						}, s.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/calcul",
					search: { id: void 0 },
					className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform active:scale-[0.98]",
					children: ["Commencer un calcul", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		})]
	});
}
var TIPS = [
	"Calculez toujours votre coût total avant de fixer un prix : c'est la base d'une vente rentable.",
	"Une marge saine se situe généralement entre 25 % et 40 % — en dessous, votre effort n'est pas récompensé.",
	"Vérifiez deux fois le poids et le taux de change : une petite erreur peut effacer toute votre marge.",
	"Un prix précis inspire confiance et protège vos bénéfices sur le long terme.",
	"Ne vendez jamais un produit dont vous ne connaissez pas le coût réel.",
	"Comparez vos prix à ceux du marché, mais ne bradez jamais votre valeur.",
	"Chaque franc économisé sur le transport est un franc gagné sur la marge.",
	"Un bon vendeur connaît ses chiffres mieux que ses concurrents."
];
function DailyTipCard() {
	const tip = (0, import_react.useMemo)(() => {
		return TIPS[Math.floor(Date.now() / 864e5) % TIPS.length];
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "surface-card relative overflow-hidden p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-10 w-10 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold uppercase tracking-widest text-primary-glow",
					children: "Astuce du jour"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[13px] font-medium leading-snug text-foreground/90",
					children: tip
				})]
			})]
		})]
	});
}
//#endregion
export { HomePage as component };
