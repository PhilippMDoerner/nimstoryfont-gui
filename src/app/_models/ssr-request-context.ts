export interface Cookie {
  name: string;
  value: string;
}

export interface SSRRequestContext {
  cookies: Cookie[];
}
