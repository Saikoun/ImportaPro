export type Theme = "dark" | "light";
export type Currency = "MGA" | "EUR" | "USD" | "CNY";

const THEME_KEY = "importapro:theme:v1";
const CURRENCY_KEY = "importapro:currency:v1";
const EVT = "importapro:prefs:changed";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const v = window.localStorage.getItem(THEME_KEY);
  return v === "light" ? "light" : "dark";
}

export function setTheme(t: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, t);
  applyTheme(t);
  window.dispatchEvent(new CustomEvent(EVT));
}

export function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
}

export function getCurrency(): Currency {
  if (typeof window === "undefined") return "MGA";
  const v = window.localStorage.getItem(CURRENCY_KEY);
  if (v === "EUR" || v === "USD" || v === "CNY" || v === "MGA") return v;
  return "MGA";
}

export function setCurrency(c: Currency) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CURRENCY_KEY, c);
  window.dispatchEvent(new CustomEvent(EVT));
}

export function onPrefsChange(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const h = () => cb();
  window.addEventListener(EVT, h);
  window.addEventListener("storage", h);
  return () => {
    window.removeEventListener(EVT, h);
    window.removeEventListener("storage", h);
  };
}
