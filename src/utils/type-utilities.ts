export type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

export type FirstParamType<T extends (...args: any[]) => any> = T extends (
  arg: infer U,
) => any
  ? U
  : never;

// Utility type for getting the param type of a function... I think
export type SomeVersionOfU2I<U> = (
  U extends any ? (x: U) => any : never
) extends (x: infer I) => any
  ? I
  : never;
