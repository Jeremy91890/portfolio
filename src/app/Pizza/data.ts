import type { Base, Sauce, Topping } from "./types";

export const BASES: Base[] = [
  {
    id: "thin",
    name: "Fine",
    emoji: "🫓",
    description: "Légère et ultra-croustillante",
    color: "#F0D080",
  },
  {
    id: "classic",
    name: "Classique",
    emoji: "🥖",
    description: "La pâte parfaite, ni trop fine ni trop épaisse",
    color: "#DEB060",
  },
  {
    id: "thick",
    name: "Épaisse",
    emoji: "🍞",
    description: "Moelleuse et super généreuse",
    color: "#C08840",
  },
];

export const SAUCES: Sauce[] = [
  {
    id: "tomato",
    name: "Tomate",
    emoji: "🍅",
    description: "La vraie sauce italienne",
    color: "#C0392B",
  },
  {
    id: "cream",
    name: "Crème",
    emoji: "🥛",
    description: "Douce et super onctueuse",
    color: "#F8F0DC",
  },
  {
    id: "bbq",
    name: "BBQ",
    emoji: "🫙",
    description: "Fumée et pleine de saveurs",
    color: "#7B3F00",
  },
];

export const TOPPINGS: Topping[] = [
  { id: "cheese", name: "Fromage", emoji: "🧀" },
  { id: "mushroom", name: "Champignons", emoji: "🍄" },
  { id: "ham", name: "Jambon", emoji: "🥩" },
  { id: "pepper", name: "Poivron", emoji: "🫑" },
  { id: "olive", name: "Olives", emoji: "🫒" },
  { id: "corn", name: "Maïs", emoji: "🌽" },
  { id: "tomato_slice", name: "Tomate", emoji: "🍅" },
  { id: "basil", name: "Basilic", emoji: "🌿" },
  { id: "pineapple", name: "Ananas", emoji: "🍍" },
  { id: "anchovy", name: "Anchois", emoji: "🐟" },
  { id: "onion", name: "Oignon", emoji: "🧅" },
  { id: "egg", name: "Œuf", emoji: "🥚" },
];

// Pre-calculated positions (% top/left of .pizza-base) for topping placement
export const TOPPING_POSITIONS: { top: string; left: string }[] = [
  { top: "24%", left: "38%" },
  { top: "20%", left: "62%" },
  { top: "38%", left: "72%" },
  { top: "58%", left: "65%" },
  { top: "66%", left: "44%" },
  { top: "58%", left: "24%" },
  { top: "38%", left: "18%" },
  { top: "30%", left: "50%" },
  { top: "48%", left: "44%" },
  { top: "50%", left: "60%" },
  { top: "72%", left: "56%" },
  { top: "70%", left: "32%" },
];
