import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Globe, P as Coins, S as LogOut, V as Check, a as TrendingUp, c as Sun, h as RotateCcw, i as Truck, l as Sparkles, r as UserCog, x as Moon } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { i as onSessionChange, r as getSession, t as clearSession } from "./session-D1W-TbwR.mjs";
import { a as saveSettings, i as onSettingsChange, r as getSettings, t as DEFAULT_SETTINGS } from "./settings-BANIGn3p.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parametres-7-2EmzQA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var THEME_KEY = "importapro:theme:v1";
var CURRENCY_KEY = "importapro:currency:v1";
var EVT = "importapro:prefs:changed";
function getTheme() {
	if (typeof window === "undefined") return "dark";
	return window.localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
}
function setTheme(t) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(THEME_KEY, t);
	applyTheme(t);
	window.dispatchEvent(new CustomEvent(EVT));
}
function applyTheme(t) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	root.classList.toggle("light", t === "light");
	root.classList.toggle("dark", t === "dark");
}
function getCurrency() {
	if (typeof window === "undefined") return "MGA";
	const v = window.localStorage.getItem(CURRENCY_KEY);
	if (v === "EUR" || v === "USD" || v === "CNY" || v === "MGA") return v;
	return "MGA";
}
function setCurrency(c) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(CURRENCY_KEY, c);
	window.dispatchEvent(new CustomEvent(EVT));
}
function onPrefsChange(cb) {
	if (typeof window === "undefined") return () => {};
	const h = () => cb();
	window.addEventListener(EVT, h);
	window.addEventListener("storage", h);
	return () => {
		window.removeEventListener(EVT, h);
		window.removeEventListener("storage", h);
	};
}
function ParametresPage() {
	const navigate = useNavigate();
	const [s, setS] = (0, import_react.useState)(() => getSettings());
	const [session, setSession] = (0, import_react.useState)(() => getSession());
	const [savedAt, setSavedAt] = (0, import_react.useState)(null);
	const [theme, setThemeState] = (0, import_react.useState)(() => getTheme());
	const [currency, setCurrencyState] = (0, import_react.useState)(() => getCurrency());
	const firstRun = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => onSettingsChange(() => setS(getSettings())), []);
	(0, import_react.useEffect)(() => onPrefsChange(() => {
		setThemeState(getTheme());
		setCurrencyState(getCurrency());
	}), []);
	(0, import_react.useEffect)(() => onSessionChange(() => setSession(getSession())), []);
	const handleChangeProfile = () => {
		clearSession();
		toast.success("Profil réinitialisé");
		navigate({ to: "/bienvenue" });
	};
	const handleClearSession = () => {
		if (!window.confirm("Effacer la session actuelle ?")) return;
		clearSession();
		toast.success("Session effacée");
		navigate({ to: "/bienvenue" });
	};
	(0, import_react.useEffect)(() => {
		if (firstRun.current) {
			firstRun.current = false;
			return;
		}
		const h = window.setTimeout(() => {
			saveSettings(s);
			setSavedAt(Date.now());
			window.setTimeout(() => setSavedAt(null), 1500);
		}, 350);
		return () => window.clearTimeout(h);
	}, [s]);
	const update = (k, v) => setS((prev) => ({
		...prev,
		[k]: v
	}));
	const reset = () => {
		setS(DEFAULT_SETTINGS);
		toast.success("Valeurs par défaut restaurées");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Paramètres",
		showBack: true,
		action: savedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-[11px] font-medium text-success",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Enregistré"]
		}) : null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Les valeurs sont enregistrées automatiquement et utilisées comme valeurs par défaut dans le calcul."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Coins,
					title: "Taux de change",
					hint: "Ariary par Yuan (¥)",
					suffix: "Ar/¥",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: s.taux,
						onChange: (v) => update("taux", v),
						placeholder: "640"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: Truck,
					title: "Tarif transport",
					hint: "Ariary par kilogramme",
					suffix: "Ar/kg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: s.tarifKg,
						onChange: (v) => update("tarifKg", v),
						placeholder: "70000"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					icon: TrendingUp,
					title: "Marge par défaut",
					hint: "Marge initiale lors d'un nouveau calcul",
					suffix: "Ar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: s.margeDefaut,
						onChange: (v) => update("margeDefaut", v),
						placeholder: "30000"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					icon: Sparkles,
					title: "Arrondi automatique",
					hint: "Arrondit le prix de vente aux 100 Ar",
					checked: s.arrondiAuto,
					onCheckedChange: (v) => update("arrondiAuto", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					icon: theme === "dark" ? Moon : Sun,
					title: "Mode sombre",
					hint: "Basculer entre le thème sombre et clair",
					checked: theme === "dark",
					onCheckedChange: (v) => {
						const next = v ? "dark" : "light";
						setTheme(next);
						setThemeState(next);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
						children: "Devise d'affichage"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-display text-sm font-semibold",
									children: "Sélection de devise"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Devise préférée pour l'affichage des montants."
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-4 gap-2",
							children: [
								"MGA",
								"EUR",
								"USD",
								"CNY"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setCurrency(c);
									setCurrencyState(c);
								},
								className: "rounded-2xl border px-2 py-2 text-xs font-semibold transition " + (currency === c ? "border-primary bg-primary/15 text-primary" : "border-border bg-background/40 text-foreground hover:border-border-strong"),
								children: c
							}, c))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
						children: "Profil"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-display text-sm font-semibold",
									children: session?.name ?? "Invité"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-[11px] text-muted-foreground",
									children: ["ID · ", session?.uid ?? "—"]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleChangeProfile,
								className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/40 px-3 py-2.5 text-xs font-semibold text-foreground transition hover:border-border-strong",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { className: "h-4 w-4" }), "Changer de profil"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleClearSession,
								className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-3 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary/15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Effacer session"]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: reset,
					className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:border-border-strong",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Réinitialiser les valeurs par défaut"]
				})
			]
		})
	});
}
function NumInput({ value, onChange, placeholder }) {
	const [raw, setRaw] = (0, import_react.useState)(String(value));
	(0, import_react.useEffect)(() => {
		setRaw(String(value));
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		inputMode: "decimal",
		value: raw,
		placeholder,
		onChange: (e) => {
			const v = e.target.value;
			setRaw(v);
			const n = parseFloat(v.replace(",", "."));
			if (Number.isFinite(n)) onChange(n);
			else if (v === "") onChange(0);
		},
		className: "h-12 w-36 rounded-2xl border-border bg-background text-right text-base font-semibold text-foreground focus-visible:ring-primary"
	});
}
function Row({ icon: Icon, title, hint, suffix, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card flex items-center gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-display text-sm font-semibold text-foreground",
					children: title
				}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground",
					children: hint
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [children, suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-12 text-[11px] font-medium text-muted-foreground",
					children: suffix
				})]
			})
		]
	});
}
function ToggleRow({ icon: Icon, title, hint, checked, onCheckedChange, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card flex items-center gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-display text-sm font-semibold text-foreground",
					children: title
				}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground",
					children: hint
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				checked,
				onCheckedChange,
				disabled
			})
		]
	});
}
//#endregion
export { ParametresPage as component };
