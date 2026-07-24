export type Settings = {
  taux: number; // Ar par Yuan
  tarifKg: number; // Ar / kg
  fraisPct: number; // %
  margeDefaut: number; // Ar
  arrondiAuto: boolean;
};

export const DEFAULT_SETTINGS: Settings = {
  taux: 640,
  tarifKg: 70000,
  fraisPct: 15,
  margeDefaut: 30000,
  arrondiAuto: true,
};

const KEY = "importapro:settings:v1";
const EVT = "importapro:settings:changed";

export function getSettings(): Settings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(s: Settings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(s));
  window.dispatchEvent(new CustomEvent(EVT));
}

export function onSettingsChange(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVT, handler);
    window.removeEventListener("storage", handler);
  };
}

/** Round to nearest 100 Ar when enabled */
export function applyRounding(value: number, enabled: boolean) {
  if (!enabled) return value;
  return Math.round(value / 100) * 100;
}
