export function toTitleCase(x: string): string {
  const firstLetter = x[0].toUpperCase();
  return `${firstLetter}${x.slice(1)}`;
}

export function ellipsize(x: string, length: number): string {
  const isTooLong = x.length >= length;
  if (!isTooLong) return x;

  return `${x.slice(0, length - 3)}...`;
}
