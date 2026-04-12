import { useState } from "react";

interface Props {
  onStart: (chefName: string) => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  const [name, setName] = useState("");

  return (
    <div className="screen welcome-screen">
      <div className="welcome-pizza">🍕</div>
      <h1 className="welcome-title">Pizza Maker</h1>
      <p className="welcome-sub">Crée ta pizza comme un vrai chef !</p>

      <div className="welcome-form">
        <label className="welcome-label" htmlFor="chef-name">
          Ton prénom de chef 👨‍🍳
        </label>
        <input
          id="chef-name"
          className="welcome-input"
          type="text"
          placeholder="ex : Léo, Emma…"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onStart(name.trim() || "Chef")}
          maxLength={20}
          autoComplete="off"
          autoCapitalize="words"
        />
      </div>

      <button
        className="btn btn-primary btn-large"
        onClick={() => onStart(name.trim() || "Chef")}
      >
        C'est parti ! 🚀
      </button>
    </div>
  );
}
