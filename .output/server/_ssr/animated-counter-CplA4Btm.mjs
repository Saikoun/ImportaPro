import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/animated-counter-CplA4Btm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Smoothly tweens between number values using requestAnimationFrame. */
function AnimatedCounter({ value, duration = 600, format, className }) {
	const [display, setDisplay] = (0, import_react.useState)(value);
	const fromRef = (0, import_react.useRef)(value);
	const startRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		fromRef.current = display;
		startRef.current = null;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		const tick = (t) => {
			if (startRef.current === null) startRef.current = t;
			const elapsed = t - startRef.current;
			const p = Math.min(1, elapsed / duration);
			const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
			const next = fromRef.current + (value - fromRef.current) * eased;
			setDisplay(next);
			if (p < 1) rafRef.current = requestAnimationFrame(tick);
		};
		rafRef.current = requestAnimationFrame(tick);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [value, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: format ? format(display) : Math.round(display)
	});
}
//#endregion
export { AnimatedCounter as t };
