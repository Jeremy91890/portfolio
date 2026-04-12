import type { GameState } from "../types";
import PizzaCanvas from "./PizzaCanvas";

interface Props {
  pizzaState: GameState;
  onReset: () => void;
}

export default function StepResult({ pizzaState, onReset }: Props) {
  const { chefName, toppings } = pizzaState;

  const badge =
    toppings.length === 0
      ? "Pizza nature — le classique ! 😊"
      : toppings.length === 1
        ? "1 garniture placée 🍕"
        : `${toppings.length} garnitures placées 🍕`;

  return (
    <div className="screen result-screen">
      <div className="result-stars">🌟⭐🌟</div>

      <h2 className="result-title">Bravo {chefName} !</h2>
      <p className="result-sub">Ta pizza est prête à dévorer !</p>

      <PizzaCanvas state={pizzaState} size="large" />

      <span className="result-badge">{badge}</span>

      <div className="result-actions">
        <button className="btn btn-primary btn-large" onClick={onReset}>
          Recommencer ! 🔄
        </button>
      </div>
    </div>
  );
}
