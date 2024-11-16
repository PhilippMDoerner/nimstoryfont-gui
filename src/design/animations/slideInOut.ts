import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const out = style({
  transform: 'translateX(-100%)',
});
const ins = style({
  transform: 'translateX(0%)',
});
export const slideInOut = trigger('slideInOut', [
  transition('void => *', [out, animate('1s ease-in-out', ins)]),
  transition('* => void', [ins, animate('1s ease-in-out', out)]),
]);

type DisplayStyle = 'flex' | 'block' | 'inline' | 'inline-block';
export type VisibilityAnimationState = 'show' | 'hide';
const show = (displayState: string) =>
  state('show', style({ display: displayState }));
const hide = state('hide', style({ display: 'none' }));

export const delayVisibility = (
  displayState: DisplayStyle,
  delay: number = 1000,
) =>
  trigger('delayVisibility', [
    show(displayState),
    hide,
    transition('show => hide', [animate(`${delay}ms ease-in-out`)]),
    transition('hide => show', [animate(`${delay}ms ease-in-out`)]),
  ]);
