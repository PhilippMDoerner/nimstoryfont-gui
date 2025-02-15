import { isDevMode } from '@angular/core';

const isInServer = typeof document === 'undefined';

export function log(debugSymbol?: string, ...data: any[]) {
  if (!isDevMode() || isInServer) return;

  console.groupCollapsed(`[DEBUG] ${debugSymbol}:`, data);
  console.trace();
  console.groupEnd();
}
