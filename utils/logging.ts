import { isDevMode } from '@angular/core';

export function log(debugSymbol?: string, ...data: any[]) {
  if (!isDevMode()) return;

  console.groupCollapsed(`[DEBUG] ${debugSymbol}:`, data);
  console.trace();
  console.groupEnd();
}
