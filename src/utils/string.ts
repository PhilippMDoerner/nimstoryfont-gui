export function capitalize<T extends string>(x: T): Capitalize<T> {
  const firstLetter = x[0].toUpperCase();
  return `${firstLetter}${x.slice(1)}` as Capitalize<T>;
}

export function uncapitalize<T extends string>(x: T): Uncapitalize<T> {
  const firstLetter = x[0].toLowerCase();
  return `${firstLetter}${x.slice(1)}` as Uncapitalize<T>;
}

export function ellipsize(x: string, length: number): string {
  const isTooLong = x.length >= length;
  if (!isTooLong) return x;

  return `${x.slice(0, length - 3)}...`;
}
