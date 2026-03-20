type Props = {
  label: string;
  color?: string;
};

export default function TechTag({ label, color = "#6C63FF" }: Props) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: "6px",
        fontSize: "0.72rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        background: `${color}18`,
        color: color,
        border: `1px solid ${color}40`,
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}
