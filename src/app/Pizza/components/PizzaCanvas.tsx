import { BASES, SAUCES, TOPPINGS } from "../data";
import type { GameState } from "../types";

interface Props {
  state: GameState;
  size?: "small" | "medium" | "large";
  cooking?: boolean;
}

export default function PizzaCanvas({
  state,
  size = "medium",
  cooking = false,
}: Props) {
  const base = state.base ?? BASES[1];
  const sauce = state.sauce ?? SAUCES[0];

  return (
    <div
      className={`pizza-canvas pizza-canvas--${size} ${cooking ? "pizza-cooking" : ""}`}
    >
      <div className="pizza-base" style={{ background: base.color }}>
        <div className="pizza-sauce" style={{ background: sauce.color }} />

        {state.toppings.map((pt) => {
          const t = TOPPINGS.find((tp) => tp.id === pt.id);
          if (!t) return null;
          return (
            <span
              key={pt.uid}
              className="pizza-topping"
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
            >
              {t.emoji}
            </span>
          );
        })}

        {state.toppings.length === 0 && size !== "small" && (
          <span className="pizza-empty-label">Nature 😊</span>
        )}
      </div>
    </div>
  );
}
