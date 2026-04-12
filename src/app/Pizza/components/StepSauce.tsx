import { SAUCES } from "../data";
import type { Sauce } from "../types";

interface Props {
  selected: Sauce | null;
  onSelect: (sauce: Sauce) => void;
  onBack: () => void;
}

export default function StepSauce({ selected, onSelect, onBack }: Props) {
  return (
    <div className="screen step-screen">
      <h2 className="step-title">Quelle sauce ? 🍅</h2>

      <div className="choices">
        {SAUCES.map((sauce) => (
          <button
            key={sauce.id}
            className={`choice-card ${selected?.id === sauce.id ? "selected" : ""}`}
            onClick={() => onSelect(sauce)}
          >
            <span className="choice-emoji">{sauce.emoji}</span>
            <div className="choice-info">
              <span className="choice-name">{sauce.name}</span>
              <span className="choice-desc">{sauce.description}</span>
            </div>
          </button>
        ))}
      </div>

      <button className="btn btn-ghost" onClick={onBack}>
        ← Retour
      </button>
    </div>
  );
}
