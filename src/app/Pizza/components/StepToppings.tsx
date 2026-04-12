import { useRef, useState } from "react";
import { TOPPINGS, BASES, SAUCES } from "../data";
import type { GameState, PlacedTopping } from "../types";

interface DragState {
  id: string;
  emoji: string;
  x: number;
  y: number;
}

interface Props {
  pizzaState: GameState;
  onPlace: (pt: PlacedTopping) => void;
  onRemove: (uid: string) => void;
  onNext: () => void;
  onBack: () => void;
}

function uid() {
  return Math.random().toString(36).slice(2);
}

function hitCircle(rect: DOMRect, x: number, y: number): boolean {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return Math.hypot(x - cx, y - cy) <= rect.width / 2;
}

function toRelative(
  rect: DOMRect,
  clientX: number,
  clientY: number,
): { x: number; y: number } {
  return {
    x: Math.round(((clientX - rect.left) / rect.width) * 100),
    y: Math.round(((clientY - rect.top) / rect.height) * 100),
  };
}

export default function StepToppings({
  pizzaState,
  onPlace,
  onRemove,
  onNext,
  onBack,
}: Props) {
  const placed = pizzaState.toppings;
  const base = pizzaState.base ?? BASES[1];
  const sauce = pizzaState.sauce ?? SAUCES[0];

  const [drag, setDrag] = useState<DragState | null>(null);
  const [isOverPizza, setIsOverPizza] = useState(false);

  const pizzaRef = useRef<HTMLDivElement>(null);
  const pizzaRectRef = useRef<DOMRect | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
    id: string,
    emoji: string,
  ) => {
    e.preventDefault();
    pizzaRectRef.current = pizzaRef.current?.getBoundingClientRect() ?? null;
    lastPosRef.current = { x: e.clientX, y: e.clientY };
    setDrag({ id, emoji, x: e.clientX, y: e.clientY });

    const onMove = (ev: PointerEvent) => {
      lastPosRef.current = { x: ev.clientX, y: ev.clientY };
      setDrag((d) => (d ? { ...d, x: ev.clientX, y: ev.clientY } : null));
      const rect = pizzaRectRef.current;
      if (rect) setIsOverPizza(hitCircle(rect, ev.clientX, ev.clientY));
    };

    const onUp = () => {
      const pos = lastPosRef.current;
      const rect = pizzaRectRef.current;
      if (pos && rect && hitCircle(rect, pos.x, pos.y)) {
        onPlace({ uid: uid(), id, ...toRelative(rect, pos.x, pos.y) });
      }
      setDrag(null);
      setIsOverPizza(false);
      pizzaRectRef.current = null;
      lastPosRef.current = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  const countById = placed.reduce<Record<string, number>>((acc, pt) => {
    acc[pt.id] = (acc[pt.id] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="screen dnd-screen">
      <h2 className="step-title">Glisse les ingrédients 🧀</h2>
      <p className="step-hint">
        {placed.length > 0
          ? "Tap sur un ingrédient pour l'enlever"
          : "Tire un ingrédient et lâche-le sur la pizza !"}
      </p>

      {/* ── Pizza drop zone ── */}
      <div className={`dnd-zone${isOverPizza ? " dnd-zone--over" : ""}`}>
        <div className="pizza-canvas dnd-pizza-canvas">
          <div
            className="pizza-base"
            ref={pizzaRef}
            style={{ background: base.color }}
          >
            <div className="pizza-sauce" style={{ background: sauce.color }} />

            {placed.map((pt) => {
              const t = TOPPINGS.find((tp) => tp.id === pt.id);
              if (!t) return null;
              return (
                <button
                  key={pt.uid}
                  className="dnd-placed"
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  onClick={() => onRemove(pt.uid)}
                  title={`Retirer ${t.name}`}
                  aria-label={`Retirer ${t.name}`}
                >
                  {t.emoji}
                </button>
              );
            })}

            <span className="pizza-empty-label">
              {isOverPizza && drag
                ? "✨ Lâche !"
                : placed.length === 0
                  ? "👆 Glisse ici"
                  : ""}
            </span>
          </div>
        </div>
      </div>

      {/* ── Ingredients shelf ── */}
      <div className="dnd-shelf">
        <div className="dnd-shelf-inner">
          {TOPPINGS.map((topping) => {
            const count = countById[topping.id] ?? 0;
            const isDragging = drag?.id === topping.id;
            return (
              <div
                key={topping.id}
                className={`dnd-chip${isDragging ? " dnd-chip--dragging" : ""}`}
                onPointerDown={(e) =>
                  handlePointerDown(e, topping.id, topping.emoji)
                }
                style={{ touchAction: "none" }}
              >
                <span className="dnd-chip-emoji">{topping.emoji}</span>
                <span className="dnd-chip-name">{topping.name}</span>
                {count > 0 && <span className="dnd-chip-badge">×{count}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Drag ghost ── */}
      {drag && (
        <div
          className="dnd-ghost"
          style={{ left: drag.x, top: drag.y }}
          aria-hidden="true"
        >
          {drag.emoji}
        </div>
      )}

      <div className="step-actions">
        <button className="btn btn-ghost" onClick={onBack}>
          ← Retour
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          Enfourner ! 🔥
        </button>
      </div>
    </div>
  );
}
