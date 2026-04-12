import { useEffect, useRef, useState } from "react";
import type { GameState } from "../types";
import PizzaCanvas from "./PizzaCanvas";

interface Props {
  pizzaState: GameState;
  onDone: () => void;
}

const COOK_TIME_MS = 4500;

const COOK_MESSAGES = [
  { threshold: 0, label: "Préchauffage… 🌡️" },
  { threshold: 25, label: "Ça cuit ! 🔥" },
  { threshold: 60, label: "Presque prêt… 🤩" },
  { threshold: 90, label: "Encore un instant… ✨" },
  { threshold: 100, label: "PRÊTE ! 🎉" },
];

export default function StepOven({ pizzaState, onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const start = Date.now();
    let timeoutId: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / COOK_TIME_MS) * 100, 100);
      setProgress(p);

      if (p >= 100) {
        clearInterval(interval);
        setIsOpen(true);
        timeoutId = setTimeout(() => onDoneRef.current(), 900);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const message =
    [...COOK_MESSAGES].reverse().find((m) => progress >= m.threshold)?.label ??
    COOK_MESSAGES[0].label;

  return (
    <div className="screen oven-screen">
      <h2 className="step-title">Au four ! 🔥</h2>

      <div className={`oven-body ${isOpen ? "oven-open" : ""}`}>
        <div className="oven-top-knobs">
          <div className="oven-knob" />
          <div className="oven-knob" />
          <div className="oven-knob" />
        </div>

        <div className="oven-window">
          <div className="oven-window-shine" />
          <div className="oven-pizza-preview">
            <PizzaCanvas state={pizzaState} size="small" cooking />
          </div>
        </div>

        <div className="oven-door">
          <div className="oven-door-handle" />
        </div>

        <span className="oven-label">🍕 FOUR</span>
      </div>

      <div className="cook-progress-wrapper">
        <div className="cook-progress-track">
          <div
            className="cook-progress-bar"
            style={{ width: `${progress}%` }}
          />
          <span className="cook-progress-label">{message}</span>
        </div>
      </div>
    </div>
  );
}
