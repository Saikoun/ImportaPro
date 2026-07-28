import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as string, t as object } from "../_libs/zod.mjs";
import { t as zodValidator } from "../_libs/tanstack__zod-adapter.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calcul-DGbdZ45g.js
var $$splitComponentImporter = () => import("./calcul-CEgYJmOq.mjs");
var searchSchema = object({ id: string().optional().catch(void 0) });
var Route = createFileRoute("/calcul")({
	validateSearch: zodValidator(searchSchema),
	head: () => ({ meta: [{ title: "Calcul Import · ImportaPro" }, {
		name: "description",
		content: "Calculez instantanément le coût total d'un import : transport, produit, frais et marge."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
