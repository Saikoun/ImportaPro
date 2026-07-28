import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { K as ArrowRight, n as User } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as createSession, r as getSession } from "./session-D1W-TbwR.mjs";
import { t as logo_importapro_default } from "./logo-importapro-BYtWj2tW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bienvenue-Dhcl8sYi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BienvenuePage() {
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (getSession()) navigate({ to: "/home" });
	}, [navigate]);
	const canSubmit = name.trim().length >= 2;
	const submit = (e) => {
		e?.preventDefault();
		if (!canSubmit) {
			setError("Entrez au moins 2 caractères.");
			return;
		}
		createSession(name);
		navigate({ to: "/home" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col overflow-hidden bg-background px-6 pb-10 pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float-orb absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float-orb delay-300 absolute -bottom-24 right-0 h-[280px] w-[280px] rounded-full bg-primary-glow/20 blur-[100px]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_importapro_default,
					alt: "ImportaPro",
					width: 72,
					height: 72,
					className: "h-16 w-16 drop-shadow-[0_8px_24px_rgba(223,1,57,0.55)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-display text-3xl font-semibold tracking-tight",
					children: [
						"Bienvenue sur",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Importa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Pro"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Entrez votre nom pour démarrer. Aucun mot de passe, aucune inscription."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "relative mt-12 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
								children: "Votre nom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									autoFocus: true,
									autoComplete: "off",
									placeholder: "Ex. Rakoto",
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										if (error) setError(null);
									},
									className: "h-12 flex-1 rounded-2xl border-border bg-background text-base font-semibold focus-visible:ring-primary"
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs font-medium text-primary",
								children: error
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: !canSubmit,
						className: "group inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform active:scale-[0.98] disabled:opacity-40",
						children: ["Commencer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[11px] text-muted-foreground",
						children: "Vos informations restent sur votre appareil."
					})
				]
			})
		]
	});
}
//#endregion
export { BienvenuePage as component };
