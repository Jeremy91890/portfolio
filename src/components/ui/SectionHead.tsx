type Props = {
  label: string;
  title: string;
  lede?: string;
};

export default function SectionHead({ label, title, lede }: Props) {
  return (
    <header className="head">
      <p className="head__label">{label}</p>
      <h2 className="head__title">{title}</h2>
      {lede && <p className="head__lede">{lede}</p>}
    </header>
  );
}
