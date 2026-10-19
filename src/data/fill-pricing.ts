// Remplace les {variables} des textes de pricing.json par leurs valeurs (ex. « {extraModification} € » → « 40 € »).
// Variables disponibles : les nombres et textes de premier niveau de pricing.json, et ceux de `options`.
type Raw = { options: Record<string, unknown> } & Record<string, unknown>;

export function fillPricing<T extends Raw>(raw: T): T {
  const vars: Record<string, unknown> = { ...raw, ...raw.options };
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') {
      return v.replace(/\{(\w+)\}/g, (_, key: string) => {
        const value = vars[key];
        if (typeof value !== 'number' && typeof value !== 'string') {
          throw new Error(`pricing.json : variable inconnue {${key}}`);
        }
        return String(value);
      });
    }
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(raw) as T;
}
