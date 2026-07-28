import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { P as Coins, a as TrendingUp, g as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-CqswZDKC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CACHE_KEY = "importapro:rates:v1";
var TTL = 3600 * 1e3;
async function fetchRates() {
	const res = await fetch("https://open.er-api.com/v6/latest/MGA");
	if (!res.ok) throw new Error("Réseau indisponible");
	const data = await res.json();
	if (data.result !== "success") throw new Error("Cours indisponibles");
	const inv = (k) => data.rates[k] ? Math.round(1 / data.rates[k] * 100) / 100 : 0;
	const rates = {
		EUR: inv("EUR"),
		USD: inv("USD"),
		CNY: inv("CNY")
	};
	return {
		base: "MGA",
		fetchedAt: Date.now(),
		rates
	};
}
function readCache() {
	try {
		const raw = window.localStorage.getItem(CACHE_KEY);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function writeCache(r) {
	try {
		window.localStorage.setItem(CACHE_KEY, JSON.stringify(r));
	} catch {}
}
function NotificationsPage() {
	const [rates, setRates] = (0, import_react.useState)(() => typeof window === "undefined" ? null : readCache());
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const refresh = async () => {
		setLoading(true);
		setError(null);
		try {
			const r = await fetchRates();
			setRates(r);
			writeCache(r);
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		const cached = readCache();
		if (!cached || Date.now() - cached.fetchedAt > TTL) refresh();
		else setRates(cached);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Notifications",
		showBack: true,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Actualiser",
			onClick: refresh,
			disabled: loading,
			className: "grid h-10 w-10 place-items-center rounded-2xl bg-card text-foreground transition hover:bg-card/70 disabled:opacity-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 " + (loading ? "animate-spin" : "") })
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "surface-card p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-display text-sm font-semibold",
								children: "Cours des devises"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: "Taux réels à jour, mis à jour toutes les heures."
							})]
						})]
					})
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-primary/40 bg-primary/10 p-3 text-xs font-medium text-primary",
					children: ["Impossible de récupérer les cours : ", error]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							code: "EUR",
							label: "Euro",
							sub: "EUR · €"
						},
						{
							code: "USD",
							label: "Dollar US",
							sub: "USD · $"
						},
						{
							code: "CNY",
							label: "Yuan Renminbi",
							sub: "CNY · ¥"
						}
					].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card flex items-center gap-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-muted text-foreground/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-display text-sm font-semibold",
									children: it.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: it.sub
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-display text-base font-semibold tabular-nums",
									children: rates?.rates[it.code] ? `${rates.rates[it.code].toLocaleString("fr-FR")} Ar` : "—"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] font-semibold text-primary-glow",
									children: ["pour 1 ", it.code]
								})]
							})
						]
					}, it.code))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[11px] text-muted-foreground",
					children: rates ? `Dernière mise à jour : ${new Date(rates.fetchedAt).toLocaleString("fr-FR")}` : "Chargement des cours…"
				})
			]
		})
	});
}
//#endregion
export { NotificationsPage as component };
