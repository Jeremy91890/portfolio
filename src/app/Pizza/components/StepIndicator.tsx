const STEP_LABELS = ["Pâte 🫓", "Sauce 🍅", "Garnitures 🧀", "Four 🔥"];

interface Props {
  current: number; // 0-based index (0 = base, 1 = sauce, 2 = toppings, 3 = oven)
}

export default function StepIndicator({ current }: Props) {
  return (
    <div
      className="step-indicator"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemax={STEP_LABELS.length}
    >
      {STEP_LABELS.map((label, i) => {
        const state = i < current ? "done" : i === current ? "active" : "";
        return (
          <div key={label} className={`step-dot ${state}`}>
            <div className="step-dot-inner">{i < current ? "✓" : i + 1}</div>
            <span className="step-dot-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
