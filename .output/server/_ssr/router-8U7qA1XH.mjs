import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Route$11 } from "./calcul-DGbdZ45g.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-8U7qA1XH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bo1vaVWJ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#0E1021"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{ title: "ImportaPro · Calculateur d'importation premium" },
			{
				name: "description",
				content: "ImportaPro — calculez instantanément vos coûts d'importation et prix de vente conseillés."
			},
			{
				name: "author",
				content: "ImportaPro"
			},
			{
				property: "og:title",
				content: "ImportaPro · Calculateur d'importation premium"
			},
			{
				property: "og:description",
				content: "Calculateur d'importation premium : transport, douane, marge et prix de vente en un instant."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "ImportaPro · Calculateur d'importation premium"
			},
			{
				name: "description",
				content: "ImportaPro est une application de calcul d'importation développée pour simplifier les estimations de coûts des produits achetés sur les plateformes chinoises co"
			},
			{
				property: "og:description",
				content: "ImportaPro est une application de calcul d'importation développée pour simplifier les estimations de coûts des produits achetés sur les plateformes chinoises co"
			},
			{
				name: "twitter:description",
				content: "ImportaPro est une application de calcul d'importation développée pour simplifier les estimations de coûts des produits achetés sur les plateformes chinoises co"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/wbPomYut2VY11jU1UfGXEFoyXP63/social-images/social-1783061743285-social_(2).webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/wbPomYut2VY11jU1UfGXEFoyXP63/social-images/social-1783061743285-social_(2).webp"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
var themeInit = `(function(){try{var t=localStorage.getItem('importapro:theme:v1');var c=t==='light'?'light':'dark';document.documentElement.classList.add(c);}catch(e){document.documentElement.classList.add('dark');}})();`;
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeInit } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			theme: "dark",
			position: "top-center",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-Cz4mWpNw.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ImportaPro · Calculateur d'importation" },
		{
			name: "description",
			content: "ImportaPro — calculez vos coûts d'importation et prix de vente en quelques secondes."
		},
		{
			property: "og:title",
			content: "ImportaPro"
		},
		{
			property: "og:description",
			content: "Calculateur d'importation premium."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./a-propos-CXWMsC-B.mjs");
var Route$8 = createFileRoute("/a-propos")({
	head: () => ({ meta: [{ title: "À propos · ImportaPro" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./bienvenue-Dhcl8sYi.mjs");
var Route$7 = createFileRoute("/bienvenue")({
	head: () => ({ meta: [{ title: "Bienvenue · ImportaPro" }, {
		name: "description",
		content: "Entrez votre nom pour commencer avec ImportaPro."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./design-system-C76yain5.mjs");
var Route$6 = createFileRoute("/design-system")({
	head: () => ({ meta: [
		{ title: "ImportaPro · Design System" },
		{
			name: "description",
			content: "Système de design premium pour ImportaPro, calculateur d'importation intelligent."
		},
		{
			property: "og:title",
			content: "ImportaPro · Design System"
		},
		{
			property: "og:description",
			content: "Système de design premium pour ImportaPro."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./historique-DLe8el6x.mjs");
var Route$5 = createFileRoute("/historique")({
	head: () => ({ meta: [{ title: "Historique · ImportaPro" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./home-C-7xmOct.mjs");
var Route$4 = createFileRoute("/home")({
	head: () => ({ meta: [{ title: "Accueil · ImportaPro" }, {
		name: "description",
		content: "Tableau de bord ImportaPro : dernier calcul, raccourcis et activité."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./notifications-CqswZDKC.mjs");
var Route$3 = createFileRoute("/notifications")({
	head: () => ({ meta: [{ title: "Notifications · ImportaPro" }, {
		name: "description",
		content: "Cours des devises à jour : Euro, Dollar et Yuan (Renminbi) face à l'Ariary."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./parametres-7-2EmzQA.mjs");
var Route$2 = createFileRoute("/parametres")({
	head: () => ({ meta: [{ title: "Paramètres · ImportaPro" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./prix-DbaMiJrw.mjs");
var Route$1 = createFileRoute("/prix")({
	head: () => ({ meta: [{ title: "Prix de vente · ImportaPro" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./profil-NZ0tV4wn.mjs");
var Route = createFileRoute("/profil")({
	head: () => ({ meta: [{ title: "Profil · ImportaPro" }, {
		name: "description",
		content: "Votre profil ImportaPro et préférences de compte."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AProposRoute: Route$8.update({
		id: "/a-propos",
		path: "/a-propos",
		getParentRoute: () => Route$10
	}),
	BienvenueRoute: Route$7.update({
		id: "/bienvenue",
		path: "/bienvenue",
		getParentRoute: () => Route$10
	}),
	CalculRoute: Route$11.update({
		id: "/calcul",
		path: "/calcul",
		getParentRoute: () => Route$10
	}),
	DesignSystemRoute: Route$6.update({
		id: "/design-system",
		path: "/design-system",
		getParentRoute: () => Route$10
	}),
	HistoriqueRoute: Route$5.update({
		id: "/historique",
		path: "/historique",
		getParentRoute: () => Route$10
	}),
	HomeRoute: Route$4.update({
		id: "/home",
		path: "/home",
		getParentRoute: () => Route$10
	}),
	NotificationsRoute: Route$3.update({
		id: "/notifications",
		path: "/notifications",
		getParentRoute: () => Route$10
	}),
	ParametresRoute: Route$2.update({
		id: "/parametres",
		path: "/parametres",
		getParentRoute: () => Route$10
	}),
	PrixRoute: Route$1.update({
		id: "/prix",
		path: "/prix",
		getParentRoute: () => Route$10
	}),
	ProfilRoute: Route.update({
		id: "/profil",
		path: "/profil",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
