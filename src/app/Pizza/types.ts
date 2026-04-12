export interface Base {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
}

export interface Sauce {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
}

export interface Topping {
  id: string;
  name: string;
  emoji: string;
}

/** One placed instance of a topping on the pizza */
export interface PlacedTopping {
  uid: string; // unique per placement (allows duplicates)
  id: string; // topping id
  x: number; // % from left of pizza disc
  y: number; // % from top of pizza disc
}

export type GameStep =
  | "welcome"
  | "base"
  | "sauce"
  | "toppings"
  | "oven"
  | "result";

export interface GameState {
  step: GameStep;
  chefName: string;
  base: Base | null;
  sauce: Sauce | null;
  toppings: PlacedTopping[];
}
