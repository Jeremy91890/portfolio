import { BASES } from "../data";
import type { Base } from "../types";

interface Props {
  selected: Base | null;
  onSelect: (base: Base) => void;
}

export default function StepBase({ selected, onSelect }: Props) {
  return (
    <div className="screen step-screen">
      <h2 className="step-title">Choisis ta pâte ! 🫓</h2>

      <div className="choices">
        {BASES.map((base) => (
          <button
            key={base.id}
            className={`choice-card ${selected?.id === base.id ? "selected" : ""}`}
            onClick={() => onSelect(base)}
          >
            <span className="choice-emoji">{base.emoji}</span>
            <div className="choice-info">
              <span className="choice-name">{base.name}</span>
              <span className="choice-desc">{base.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
