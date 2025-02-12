export function getFirstFocusableChild(
  el: HTMLElement,
): HTMLElement | undefined {
  const allFocusableChildren = [
    ...(el.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    ) as any),
  ] as HTMLElement[];

  return allFocusableChildren.filter(
    (child) => !child.hasAttribute('disabled'),
  )[0];
}
