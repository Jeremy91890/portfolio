import { useState, useCallback } from "react";
import type { GameState, GameStep } from "./types";
import WelcomeScreen from "./components/WelcomeScreen";
import StepBase from "./components/StepBase";
import StepSauce from "./components/StepSauce";
import StepToppings from "./components/StepToppings";
import StepOven from "./components/StepOven";
import StepResult from "./components/StepResult";
import StepIndicator from "./components/StepIndicator";

const ORDERED_STEPS: GameStep[] = [
  "base",
  "sauce",
  "toppings",
  "oven",
  "result",
];

const INITIAL_STATE: GameState = {
  step: "welcome",
  chefName: "",
  base: null,
  sauce: null,
  toppings: [],
};

export default function PizzaApp() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  const goTo = useCallback((step: GameStep) => {
    setState((s) => ({ ...s, step }));
  }, []);

  const reset = useCallback(() => setState(INITIAL_STATE), []);

  const stepIndex = ORDERED_STEPS.indexOf(state.step);
  const showIndicator = state.step !== "welcome" && state.step !== "result";

  return (
    <div className="pizza-app">
      {showIndicator && <StepIndicator current={stepIndex} />}

      {state.step === "welcome" && (
        <WelcomeScreen
          onStart={(name) =>
            setState((s) => ({ ...s, chefName: name, step: "base" }))
          }
        />
      )}

      {state.step === "base" && (
        <StepBase
          selected={state.base}
          onSelect={(base) => setState((s) => ({ ...s, base, step: "sauce" }))}
        />
      )}

      {state.step === "sauce" && (
        <StepSauce
          selected={state.sauce}
          onSelect={(sauce) =>
            setState((s) => ({ ...s, sauce, step: "toppings" }))
          }
          onBack={() => goTo("base")}
        />
      )}

      {state.step === "toppings" && (
        <StepToppings
          pizzaState={state}
          onPlace={(pt) =>
            setState((s) => ({ ...s, toppings: [...s.toppings, pt] }))
          }
          onRemove={(uid) =>
            setState((s) => ({
              ...s,
              toppings: s.toppings.filter((t) => t.uid !== uid),
            }))
          }
          onNext={() => goTo("oven")}
          onBack={() => goTo("sauce")}
        />
      )}

      {state.step === "oven" && (
        <StepOven pizzaState={state} onDone={() => goTo("result")} />
      )}

      {state.step === "result" && (
        <StepResult pizzaState={state} onReset={reset} />
      )}
    </div>
  );
}
