import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { K as ArrowRight, P as Coins, V as Check, a as TrendingUp, b as Package, i as Truck, l as Sparkles } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Route } from "./calcul-DGbdZ45g.mjs";
import { t as AnimatedCounter } from "./animated-counter-CplA4Btm.mjs";
import { i as getRecord, n as formatAr, o as newId, s as nextRef, u as upsertRecord } from "./history-CmpTOKK3.mjs";
import { i as onSettingsChange, n as applyRounding, r as getSettings } from "./settings-BANIGn3p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calcul-CEgYJmOq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Material 3 ripple wrapper. Use as a button or container. */
function Ripple({ children, className, color = "rgba(255,255,255,0.35)", onClick, type = "button", disabled, asDiv }) {
	const [ripples, setRipples] = (0, import_react.useState)([]);
	const spawn = (0, import_react.useCallback)((e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height) * 2;
		const id = Date.now() + Math.random();
		const r = {
			id,
			x: e.clientX - rect.left - size / 2,
			y: e.clientY - rect.top - size / 2,
			size
		};
		setRipples((p) => [...p, r]);
		window.setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 650);
	}, []);
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
		children: ripples.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute rounded-full animate-ripple",
			style: {
				left: r.x,
				top: r.y,
				width: r.size,
				height: r.size,
				background: color
			}
		}, r.id))
	})] });
	if (asDiv) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onClick: (e) => {
			spawn(e);
			onClick?.(e);
		},
		className: cn("relative overflow-hidden select-none", className),
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		disabled,
		onClick: (e) => {
			spawn(e);
			onClick?.(e);
		},
		className: cn("relative overflow-hidden select-none transition-transform active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none", className),
		children: content
	});
}
var QUICK_MARGINS = [
	3e4,
	4e4,
	5e4
];
function CalculPage() {
	const { id: editId } = Route.useSearch();
	const navigate = useNavigate();
	const existing = (0, import_react.useMemo)(() => editId ? getRecord(editId) : void 0, [editId]);
	const [settings, setSettings] = (0, import_react.useState)(() => getSettings());
	(0, import_react.useEffect)(() => onSettingsChange(() => setSettings(getSettings())), []);
	const [nom, setNom] = (0, import_react.useState)(() => existing?.nom ?? "");
	const [quantite, setQuantite] = (0, import_react.useState)(() => existing?.quantite && existing.quantite > 0 ? String(existing.quantite) : "1");
	const [tarifKg, setTarifKg] = (0, import_react.useState)(() => existing ? String(existing.tarifKg) : String(settings.tarifKg));
	const [poidsG, setPoidsG] = (0, import_react.useState)(() => existing ? String(existing.poidsG) : "450");
	const [prixYuan, setPrixYuan] = (0, import_react.useState)(() => existing ? String(existing.prixYuan) : "79.80");
	const [taux, setTaux] = (0, import_react.useState)(() => existing ? String(existing.taux) : String(settings.taux));
	const [marge, setMarge] = (0, import_react.useState)(() => existing ? String(existing.marge) : String(settings.margeDefaut));
	const [saved, setSaved] = (0, import_react.useState)(false);
	const n = (v) => {
		const x = parseFloat(v.replace(",", "."));
		return Number.isFinite(x) ? x : 0;
	};
	const calc = (0, import_react.useMemo)(() => {
		const qte = Math.max(1, Math.floor(n(quantite)) || 1);
		const poidsUnit = n(poidsG);
		const poidsTotal = poidsUnit * qte;
		const transport = n(tarifKg) * poidsTotal / 1e3;
		const produitUnit = n(prixYuan) * n(taux);
		const produit = produitUnit * qte;
		const sousTotal = transport + produit;
		const frais = sousTotal * (settings.fraisPct / 100);
		const coutTana = sousTotal + frais;
		const margeUnit = n(marge);
		const margeTotale = margeUnit * qte;
		const prixVente = applyRounding(coutTana + margeTotale, settings.arrondiAuto);
		return {
			qte,
			poidsUnit,
			poidsTotal,
			produitUnit,
			transport,
			produit,
			sousTotal,
			frais,
			coutTana,
			margeUnit,
			margeTotale,
			prixVente,
			prixVenteUnitaire: qte > 0 ? prixVente / qte : prixVente,
			beneficePct: coutTana > 0 ? margeTotale / coutTana * 100 : 0
		};
	}, [
		quantite,
		tarifKg,
		poidsG,
		prixYuan,
		taux,
		marge,
		settings
	]);
	const recordIdRef = (0, import_react.useRef)(editId ?? null);
	const createdAtRef = (0, import_react.useRef)(existing?.createdAt ?? Date.now());
	const refRef = (0, import_react.useRef)(existing?.ref ?? null);
	const firstRunRef = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (firstRunRef.current && !editId) {
			firstRunRef.current = false;
			return;
		}
		firstRunRef.current = false;
		if (!(n(tarifKg) > 0 || n(poidsG) > 0 || n(prixYuan) > 0 || nom.trim() !== "")) return;
		const handle = window.setTimeout(() => {
			const id = recordIdRef.current ?? newId();
			recordIdRef.current = id;
			if (!refRef.current) refRef.current = nextRef();
			const now = Date.now();
			upsertRecord({
				id,
				ref: refRef.current,
				nom: nom.trim() || void 0,
				createdAt: createdAtRef.current,
				updatedAt: now,
				tarifKg: n(tarifKg),
				poidsG: n(poidsG),
				prixYuan: n(prixYuan),
				taux: n(taux),
				marge: n(marge),
				quantite: calc.qte,
				transport: calc.transport,
				produit: calc.produit,
				sousTotal: calc.sousTotal,
				frais: calc.frais,
				coutTana: calc.coutTana,
				prixVente: calc.prixVente
			});
			if (!editId) navigate({
				to: "/calcul",
				search: { id },
				replace: true
			});
			setSaved(true);
			window.setTimeout(() => setSaved(false), 1500);
		}, 500);
		return () => window.clearTimeout(handle);
	}, [
		nom,
		quantite,
		tarifKg,
		poidsG,
		prixYuan,
		taux,
		marge,
		calc,
		editId,
		navigate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Calcul Import",
		showBack: true,
		backTo: "/home",
		action: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-[11px] font-medium text-success",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Enregistré"]
		}) : null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					icon: Package,
					title: "Nom du produit",
					hint: "Identifiez ce calcul dans l'historique",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: nom,
						onChange: (e) => setNom(e.target.value),
						placeholder: "Ex : AJ1 Backpack, Logitech G Pro X, Jordan Borough Varsity...",
						className: "h-12 rounded-2xl border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					icon: Coins,
					title: "Quantité",
					hint: "Entier positif — multiplie prix et poids",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Quantité",
						suffix: "unité(s)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							inputMode: "numeric",
							value: quantite,
							onChange: (e) => {
								const v = e.target.value.replace(/[^0-9]/g, "");
								setQuantite(v);
							},
							onBlur: () => {
								if (!quantite || parseInt(quantite, 10) < 1) setQuantite("1");
							},
							className: "h-12 rounded-2xl border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					icon: Truck,
					title: "Transport",
					hint: "Tarif/kg × Poids total ÷ 1000",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tarif par kg (Ar)",
							suffix: "Ar/kg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: tarifKg,
								onChange: setTarifKg
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Poids unitaire",
							suffix: "g",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: poidsG,
								onChange: setPoidsG
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
							label: `Poids total (× ${calc.qte})`,
							value: calc.poidsTotal,
							suffix: " g",
							raw: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
							label: "Transport",
							value: calc.transport
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					icon: Package,
					title: "Produit",
					hint: "Prix unitaire × Taux × Quantité",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Prix unitaire (¥)",
							suffix: "¥",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: prixYuan,
								onChange: setPrixYuan
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Taux de change",
							suffix: "Ar/¥",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: taux,
								onChange: setTaux
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
							label: "Prix unitaire (Ar)",
							value: calc.produitUnit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
							label: `Prix total produit (× ${calc.qte})`,
							value: calc.produit
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card divide-y divide-border p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							icon: Truck,
							label: "Transport",
							value: calc.transport
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							icon: Package,
							label: `Produit (× ${calc.qte})`,
							value: calc.produit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							icon: Coins,
							label: "Sous-total",
							value: calc.sousTotal,
							strong: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					icon: TrendingUp,
					title: "Prix de vente",
					hint: "Coût arrivée + Marge",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Marge rapide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2",
							children: QUICK_MARGINS.map((m) => {
								const active = n(marge) === m;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ripple, {
									onClick: () => setMarge(String(m)),
									color: active ? "rgba(255,255,255,0.45)" : "rgba(223,1,57,0.25)",
									className: cn("rounded-2xl border px-3 py-3 text-sm font-semibold transition-all", active ? "gradient-primary border-transparent text-primary-foreground shadow-[var(--shadow-glow)] scale-[1.02]" : "border-border bg-card text-foreground hover:border-border-strong"),
									children: formatAr(m)
								}, m);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Marge unitaire (Ar)",
							suffix: "Ar / unité",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: marge,
								onChange: setMarge
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
							label: `Marge totale (× ${calc.qte})`,
							value: calc.margeTotale
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
							label: "Prix de vente unitaire",
							value: calc.prixVenteUnitaire
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-value-pop relative overflow-hidden rounded-[24px] gradient-primary p-5 shadow-[var(--shadow-glow)] animate-pulse-glow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-float-orb" }),
								saved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-0.5 calc-bar" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-primary-foreground/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs uppercase tracking-wider text-primary-foreground/80",
									children: [
										"Prix de vente total (",
										calc.qte,
										" unité",
										calc.qte > 1 ? "s" : "",
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-display text-3xl text-primary-foreground tabular-nums",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
										value: calc.prixVente,
										format: (n) => formatAr(n)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-primary-foreground/80",
									children: [
										"Soit ",
										formatAr(calc.prixVenteUnitaire),
										" / unité — Bénéfice :",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
											value: calc.beneficePct,
											format: (n) => `${n.toFixed(1)}%`
										})
									]
								})
							]
						}, calc.prixVente),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/historique",
							className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-card/80",
							children: ["Voir l'historique ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			]
		})
	});
}
function NumInput({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		inputMode: "decimal",
		value,
		onChange: (e) => onChange(e.target.value),
		className: "h-12 rounded-2xl border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
	});
}
function Field({ label, suffix, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-xs font-medium text-muted-foreground",
				children: label
			}), suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] font-medium text-muted-foreground",
				children: suffix
			})]
		}), children]
	});
}
function Section({ icon: Icon, title, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "surface-card animate-stagger-up space-y-4 p-5 transition-all duration-300 hover:border-border-strong",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-10 w-10 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110 hover:rotate-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-display text-base font-semibold",
				children: title
			}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: hint
			})] })]
		}), children]
	});
}
function ResultRow({ label, value, suffix, raw }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-2xl bg-background/60 px-4 py-3 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-display text-lg font-semibold text-foreground tabular-nums",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
				value,
				format: (n) => raw ? `${Math.round(n).toLocaleString("fr-FR")}${suffix ?? ""}` : formatAr(n)
			})
		})]
	});
}
function Line({ icon: Icon, label, value, strong, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 px-3 py-3 transition-colors hover:bg-background/40 rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid h-9 w-9 place-items-center rounded-2xl transition-transform hover:scale-110", accent ? "gradient-primary text-primary-foreground" : "bg-muted text-foreground"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex-1 text-sm", strong ? "font-semibold text-foreground" : "text-muted-foreground"),
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("text-display text-sm tabular-nums", strong ? "text-foreground" : "text-foreground/90", accent && "text-primary"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
					value,
					format: (n) => formatAr(n)
				})
			})
		]
	});
}
//#endregion
export { CalculPage as component };
