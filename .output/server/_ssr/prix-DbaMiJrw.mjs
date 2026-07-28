import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as AppShell } from "./app-shell-D6XvdBNe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prix-DbaMiJrw.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
	title: "Prix de vente",
	showBack: true,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card space-y-3 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Le calcul du prix de vente est intégré à l'écran Calcul Import."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/calcul",
			search: { id: void 0 },
			className: "inline-flex rounded-2xl gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
			children: "Ouvrir le calcul"
		})]
	})
});
//#endregion
export { SplitComponent as component };
