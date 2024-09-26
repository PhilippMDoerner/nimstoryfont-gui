export function toTitleCase(x: string): string {
  const firstLetter = x[0].toUpperCase();
  return `${firstLetter}${x.slice(1)}`;
}
