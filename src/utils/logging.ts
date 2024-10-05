export function log(debugSymbol?: string, x?: unknown) {
  console.groupCollapsed(`[DEBUG] ${debugSymbol}:`, x);
  console.trace();
  console.groupEnd();
}
