globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/a-propos-BCWR7G0M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"273-H7jr6fOEnOaK46tky71yf9+va4w\"",
		"mtime": "2026-07-28T07:38:01.292Z",
		"size": 627,
		"path": "../public/assets/a-propos-BCWR7G0M.js"
	},
	"/assets/app-shell-CvchQWWR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6c-68l8Xa6MUZkQbjuV26sY9+WsDSw\"",
		"mtime": "2026-07-28T07:38:01.292Z",
		"size": 3180,
		"path": "../public/assets/app-shell-CvchQWWR.js"
	},
	"/assets/animated-counter-C-lFuwtb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d0-a1438e+Lkzfa6YI3rFVnrSRbH+s\"",
		"mtime": "2026-07-28T07:38:01.292Z",
		"size": 720,
		"path": "../public/assets/animated-counter-C-lFuwtb.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1871c-hdWSTB/4ZaU9+mnDExvJy5hryz0\"",
		"mtime": "2026-07-14T11:00:11.605Z",
		"size": 100124,
		"path": "../public/favicon.ico"
	},
	"/assets/bell-CjmKyQOx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-X+2Efkr5gE0zdLul6j4yMUQi5GI\"",
		"mtime": "2026-07-28T07:38:01.293Z",
		"size": 290,
		"path": "../public/assets/bell-CjmKyQOx.js"
	},
	"/assets/arrow-right-ByJCZFZk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-tJxs2Hoq6e2UYf0JKF3AMQci0lU\"",
		"mtime": "2026-07-28T07:38:01.293Z",
		"size": 165,
		"path": "../public/assets/arrow-right-ByJCZFZk.js"
	},
	"/assets/calcul-CNeyS-n6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"294b-oBv01kBfyFPqViCFsOTJ64y1fI8\"",
		"mtime": "2026-07-28T07:38:01.293Z",
		"size": 10571,
		"path": "../public/assets/calcul-CNeyS-n6.js"
	},
	"/assets/check-DYks7DnC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-MRdUUHORR5sZmgbk2ZGWrybbtuk\"",
		"mtime": "2026-07-28T07:38:01.294Z",
		"size": 124,
		"path": "../public/assets/check-DYks7DnC.js"
	},
	"/assets/bienvenue-DB0BfP23.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb4-JWVxBeQurrV5FOKqJkV7PGaKg4o\"",
		"mtime": "2026-07-28T07:38:01.293Z",
		"size": 3252,
		"path": "../public/assets/bienvenue-DB0BfP23.js"
	},
	"/assets/coins-CiMLoDpM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11d-bJC6Z+cRLo3djaKBJElDS2zZJ6A\"",
		"mtime": "2026-07-28T07:38:01.294Z",
		"size": 285,
		"path": "../public/assets/coins-CiMLoDpM.js"
	},
	"/assets/createLucideIcon-FgEgsm5E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d7-N43t/HaGDnIR+ys0bhRayXTqKqE\"",
		"mtime": "2026-07-28T07:38:01.294Z",
		"size": 1239,
		"path": "../public/assets/createLucideIcon-FgEgsm5E.js"
	},
	"/assets/design-system-C0XuoC69.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5975-V+1VekloaJk4nordPrz0hE4IJIs\"",
		"mtime": "2026-07-28T07:38:01.294Z",
		"size": 22901,
		"path": "../public/assets/design-system-C0XuoC69.js"
	},
	"/assets/dist-D_KC8EKF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e55-F9j5TV8t0FyBptTZYmRMaAwYDdw\"",
		"mtime": "2026-07-28T07:38:01.295Z",
		"size": 7765,
		"path": "../public/assets/dist-D_KC8EKF.js"
	},
	"/assets/file-text-DeFQgoPx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35e-rzzSVa9c5gjntULJ+IvMSM4Fyr4\"",
		"mtime": "2026-07-28T07:38:01.295Z",
		"size": 862,
		"path": "../public/assets/file-text-DeFQgoPx.js"
	},
	"/assets/history-BHFLFK-Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"981-A1Q+MeO8Z+SHR70efm8vFzAI0fs\"",
		"mtime": "2026-07-28T07:38:01.295Z",
		"size": 2433,
		"path": "../public/assets/history-BHFLFK-Z.js"
	},
	"/assets/historique-Bas-h8nQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8da-7RAgXBRDa/jUgC13wcieYmN4jC8\"",
		"mtime": "2026-07-28T07:38:01.295Z",
		"size": 43226,
		"path": "../public/assets/historique-Bas-h8nQ.js"
	},
	"/assets/home-WYVQO4jy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32c0-PuI1a/A9tmVlGDwVXhowtLebsDo\"",
		"mtime": "2026-07-28T07:38:01.296Z",
		"size": 12992,
		"path": "../public/assets/home-WYVQO4jy.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"7bd10-KBfmE3OxdwLKpO9NCiNJ0XeTzOY\"",
		"mtime": "2026-07-14T11:00:18.115Z",
		"size": 507152,
		"path": "../public/favicon.png"
	},
	"/assets/input-D2ohqCsQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"299-UGOOv4Iu1UH7cHb28VfFtr2nI5o\"",
		"mtime": "2026-07-28T07:38:01.296Z",
		"size": 665,
		"path": "../public/assets/input-D2ohqCsQ.js"
	},
	"/assets/html2canvas-CRV6Yc1K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30b8d-dRJIFW+YrHpaaQMj3RzlDNuvUiY\"",
		"mtime": "2026-07-28T07:38:01.296Z",
		"size": 199565,
		"path": "../public/assets/html2canvas-CRV6Yc1K.js"
	},
	"/assets/index.es-CxFH6l7C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24f45-lLmwj9CWqqvuGnPD1ySmlPSPZ48\"",
		"mtime": "2026-07-28T07:38:01.296Z",
		"size": 151365,
		"path": "../public/assets/index.es-CxFH6l7C.js"
	},
	"/assets/jsx-runtime-b5sFKGao.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1edb-aYph0f94EOeMakFgCtyYjZfNt74\"",
		"mtime": "2026-07-28T07:38:01.297Z",
		"size": 7899,
		"path": "../public/assets/jsx-runtime-b5sFKGao.js"
	},
	"/assets/log-out-BgSc8bGV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-wDSOXhOPwrjQeHHnBWltyptosbY\"",
		"mtime": "2026-07-28T07:38:01.297Z",
		"size": 230,
		"path": "../public/assets/log-out-BgSc8bGV.js"
	},
	"/assets/index-Df0GF79A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a4a0-/ul5BZyYaFjLBijgGe2pan+dkFs\"",
		"mtime": "2026-07-28T07:38:01.292Z",
		"size": 435360,
		"path": "../public/assets/index-Df0GF79A.js"
	},
	"/assets/jspdf.es.min-C4Mg2wYy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"617f7-dPXjZQv24MwKmOFSrfhpEDSEOOk\"",
		"mtime": "2026-07-28T07:38:01.297Z",
		"size": 399351,
		"path": "../public/assets/jspdf.es.min-C4Mg2wYy.js"
	},
	"/assets/notifications-DjabG0DE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ebf-6ybkfK/dfN6B2dBHsFLCjblhm4w\"",
		"mtime": "2026-07-28T07:38:01.298Z",
		"size": 3775,
		"path": "../public/assets/notifications-DjabG0DE.js"
	},
	"/assets/logo-importapro-DM6ZV4Jd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-v426NuBQf9PQzVoD/jKs19+oI6Y\"",
		"mtime": "2026-07-28T07:38:01.297Z",
		"size": 60,
		"path": "../public/assets/logo-importapro-DM6ZV4Jd.js"
	},
	"/assets/package-CIcK8Y_K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-Lck5RhJmqDnRSExs5cS0OcKKui0\"",
		"mtime": "2026-07-28T07:38:01.298Z",
		"size": 372,
		"path": "../public/assets/package-CIcK8Y_K.js"
	},
	"/assets/prix-MpAKJmJV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"266-TgHiS7A2fWP/TKsaHsRPfDhC1/I\"",
		"mtime": "2026-07-28T07:38:01.298Z",
		"size": 614,
		"path": "../public/assets/prix-MpAKJmJV.js"
	},
	"/assets/parametres-w7Hgx8t_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3964-phedECgKGEkVx0wpve1YI7WdQQM\"",
		"mtime": "2026-07-28T07:38:01.298Z",
		"size": 14692,
		"path": "../public/assets/parametres-w7Hgx8t_.js"
	},
	"/assets/profil-CVjfSj_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1020-PQGGhm44++cXyGPNLO3315fS4nI\"",
		"mtime": "2026-07-28T07:38:01.299Z",
		"size": 4128,
		"path": "../public/assets/profil-CVjfSj_Y.js"
	},
	"/assets/purify.es-DuRL7t6i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68ff-UzqdquwlS23jMr/0lDNWmxy5AL0\"",
		"mtime": "2026-07-28T07:38:01.299Z",
		"size": 26879,
		"path": "../public/assets/purify.es-DuRL7t6i.js"
	},
	"/assets/session-BCXNGI6L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41f-nL9KKtj2lYItP5tE+gUsUwOduhc\"",
		"mtime": "2026-07-28T07:38:01.300Z",
		"size": 1055,
		"path": "../public/assets/session-BCXNGI6L.js"
	},
	"/assets/rolldown-runtime-Bh1tDfsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-RWMfWL++Hyx/oSoFmTJgBJkEveY\"",
		"mtime": "2026-07-28T07:38:01.299Z",
		"size": 567,
		"path": "../public/assets/rolldown-runtime-Bh1tDfsg.js"
	},
	"/assets/routes-CiRLyJ6A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ba-juPl5DVtC9oBNVsyVy+EkbJqep4\"",
		"mtime": "2026-07-28T07:38:01.299Z",
		"size": 1978,
		"path": "../public/assets/routes-CiRLyJ6A.js"
	},
	"/assets/settings-DCd6_Lqs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c5-rETAb51cVdJTAdjncMl7zh9EaTg\"",
		"mtime": "2026-07-28T07:38:01.300Z",
		"size": 709,
		"path": "../public/assets/settings-DCd6_Lqs.js"
	},
	"/assets/settings-DkYVAhOG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"420-xLDYCuKhV8yNZM1iujF6mgfOj3Y\"",
		"mtime": "2026-07-28T07:38:01.300Z",
		"size": 1056,
		"path": "../public/assets/settings-DkYVAhOG.js"
	},
	"/assets/sparkles-nrZLwyrb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-UUkkh+xoyVl4QnFfd9jTLjGj5fQ\"",
		"mtime": "2026-07-28T07:38:01.300Z",
		"size": 494,
		"path": "../public/assets/sparkles-nrZLwyrb.js"
	},
	"/assets/trending-up-B0gDkXJ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-dSKWRn7bdaOfsa8C4wPPRLjafP4\"",
		"mtime": "2026-07-28T07:38:01.300Z",
		"size": 175,
		"path": "../public/assets/trending-up-B0gDkXJ4.js"
	},
	"/assets/styles-Bo1vaVWJ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"181a5-WxTZ16BA52d4dlKJnTAn/zrhJpE\"",
		"mtime": "2026-07-28T07:38:01.302Z",
		"size": 98725,
		"path": "../public/assets/styles-Bo1vaVWJ.css"
	},
	"/assets/user-Cgc0Sf_A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-8C8hDx+ZH8k92emIMc2NW+oT614\"",
		"mtime": "2026-07-28T07:38:01.301Z",
		"size": 196,
		"path": "../public/assets/user-Cgc0Sf_A.js"
	},
	"/assets/truck-BMaprXGU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"196-o9bEYfrboOex4v8c0koZQWNXEPw\"",
		"mtime": "2026-07-28T07:38:01.301Z",
		"size": 406,
		"path": "../public/assets/truck-BMaprXGU.js"
	},
	"/assets/typeof-B5XbjTb1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f-yPXEOGyFHb1Ws7OoWyWNEEBz4mQ\"",
		"mtime": "2026-07-28T07:38:01.301Z",
		"size": 271,
		"path": "../public/assets/typeof-B5XbjTb1.js"
	},
	"/assets/utils-BtRqtsxU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a76-JkKQpQvQjju9Gum3ePYtjWZ23Rg\"",
		"mtime": "2026-07-28T07:38:01.301Z",
		"size": 27254,
		"path": "../public/assets/utils-BtRqtsxU.js"
	},
	"/assets/x-Bxr7-YCN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"113-Vot1p4CqTZh34topWwX0pHwKKPQ\"",
		"mtime": "2026-07-28T07:38:01.301Z",
		"size": 275,
		"path": "../public/assets/x-Bxr7-YCN.js"
	},
	"/assets/logo-importapro--UisK66x.png": {
		"type": "image/png",
		"etag": "\"7bd10-KBfmE3OxdwLKpO9NCiNJ0XeTzOY\"",
		"mtime": "2026-07-28T07:38:01.302Z",
		"size": 507152,
		"path": "../public/assets/logo-importapro--UisK66x.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_9UhTi3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_9UhTi3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
