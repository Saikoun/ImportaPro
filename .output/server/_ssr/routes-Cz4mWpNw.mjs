import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Package } from "../_libs/lucide-react.mjs";
import { r as getSession } from "./session-D1W-TbwR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cz4mWpNw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Splash() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => {
			const s = getSession();
			navigate({ to: s ? "/home" : "/bienvenue" });
		}, 1800);
		return () => clearTimeout(t);
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-screen w-full max-w-[480px] flex-col items-center justify-center overflow-hidden bg-background px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float-orb absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float-orb delay-300 absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-primary-glow/20 blur-[100px]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-splash-logo animate-pulse-glow grid h-24 w-24 place-items-center rounded-[28px] gradient-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
						className: "h-12 w-12 text-primary-foreground",
						strokeWidth: 2.4
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "animate-splash-title text-display text-4xl",
						children: "ImportaPro"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-splash-title delay-200 mt-2 text-sm text-muted-foreground",
						children: "Le calcul d'importation, en toute simplicité."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-12 left-0 right-0 flex flex-col items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-1.5 w-32 overflow-hidden rounded-full bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "calc-bar h-full w-full rounded-full bg-card" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-splash-title delay-400 text-xs text-muted-foreground",
					children: "v1.0 · Premium"
				})]
			})
		]
	});
}
//#endregion
export { Splash as component };
