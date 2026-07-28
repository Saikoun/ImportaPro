import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as Info, R as ChevronRight, S as LogOut, W as Bell, l as Sparkles, n as User, u as Shield } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
import { i as onSessionChange, r as getSession, t as clearSession } from "./session-D1W-TbwR.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profil-NZ0tV4wn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function initials(name) {
	return name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
}
function ProfilPage() {
	const navigate = useNavigate();
	const [session, setSession] = (0, import_react.useState)(() => getSession());
	(0, import_react.useEffect)(() => onSessionChange(() => setSession(getSession())), []);
	const handleLogout = () => {
		if (!window.confirm("Se déconnecter et effacer la session ?")) return;
		clearSession();
		toast.success("Session effacée");
		navigate({ to: "/bienvenue" });
	};
	const name = session?.name ?? "Invité";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Profil",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[24px] border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/25 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground text-display text-xl shadow-[var(--shadow-glow)]",
							children: initials(name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-display text-lg font-semibold",
									children: name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: ["ID · ", session?.uid ?? "—"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " ImportaPro"]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Informations",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: User,
						label: "Pseudo",
						value: name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Préférences",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							icon: Bell,
							label: "Notifications",
							to: "/notifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							icon: Shield,
							label: "Sécurité",
							to: "/parametres"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							icon: Info,
							label: "À propos",
							to: "/a-propos"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleLogout,
					className: "flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition hover:bg-card/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Déconnexion"]
				})
			]
		})
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface-card divide-y divide-border overflow-hidden",
			children
		})]
	});
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-muted text-foreground/80",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-sm font-semibold text-foreground",
				children: value
			})]
		})]
	});
}
function LinkRow({ icon: Icon, label, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex items-center gap-3 px-4 py-3 transition-colors hover:bg-background/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-muted text-foreground/80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 text-sm font-semibold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
		]
	});
}
//#endregion
export { ProfilPage as component };
