type Props = {
  label: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionTitle({ label, title, align = "left" }: Props) {
  return (
    <div style={{ textAlign: align, marginBottom: "3.5rem" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          color: "var(--accent-primary)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
