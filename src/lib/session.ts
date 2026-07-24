export type Session = {
  name: string;
  uid: string; // unique id: slug-xxxxx
  createdAt: number;
};

const KEY = "importapro:session:v1";
const EVT = "importapro:session:changed";

function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 20) || "user";
}

function randomId(len = 6) {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  let out = "";
  const arr = new Uint32Array(len);
  if (typeof crypto !== "undefined") crypto.getRandomValues(arr);
  for (let i = 0; i < len; i++) out += chars[arr[i] % chars.length];
  return out;
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function createSession(name: string): Session {
  const trimmed = name.trim();
  const session: Session = {
    name: trimmed,
    uid: `${slugify(trimmed)}-${randomId()}`,
    createdAt: Date.now(),
  };
  window.localStorage.setItem(KEY, JSON.stringify(session));
  window.dispatchEvent(new CustomEvent(EVT));
  return session;
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVT));
}

export function onSessionChange(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const h = () => cb();
  window.addEventListener(EVT, h);
  window.addEventListener("storage", h);
  return () => {
    window.removeEventListener(EVT, h);
    window.removeEventListener("storage", h);
  };
}
