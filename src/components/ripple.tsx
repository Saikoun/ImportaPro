import { useCallback, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number; size: number };

interface RippleProps {
  children: ReactNode;
  className?: string;
  color?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  asDiv?: boolean;
}

/** Material 3 ripple wrapper. Use as a button or container. */
export function Ripple({
  children,
  className,
  color = "rgba(255,255,255,0.35)",
  onClick,
  type = "button",
  disabled,
  asDiv,
}: RippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawn = useCallback((e: MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now() + Math.random();
    const r = { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size };
    setRipples((p) => [...p, r]);
    window.setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 650);
  }, []);

  const content = (
    <>
      {children}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute rounded-full animate-ripple"
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              background: color,
            }}
          />
        ))}
      </span>
    </>
  );

  if (asDiv) {
    return (
      <div
        onClick={(e) => {
          spawn(e);
          onClick?.(e as unknown as MouseEvent<HTMLButtonElement>);
        }}
        className={cn("relative overflow-hidden select-none", className)}
      >
        {content}
      </div>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={(e) => {
        spawn(e);
        onClick?.(e);
      }}
      className={cn(
        "relative overflow-hidden select-none transition-transform active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
        className,
      )}
    >
      {content}
    </button>
  );
}
