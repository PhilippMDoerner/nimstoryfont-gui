import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Memo for me:
 * :enter The entering component
 * :leave the leaving component
 */

const inactiveStyle = style({
  transform: 'translateX(-100%)',
  opacity: 0,
  'z-index': 0,
  height: '100%',
  width: '100%',
  position: 'fixed',
});
const activeStyle = style({
  transform: 'translateX(0%)',
  opacity: 1,
  'z-index': 3,
});

export const slideInOut = trigger('slideInOut', [
  transition('* => *', [
    query(':enter', [inactiveStyle], { optional: true }),
    query(':leave', [animate('500ms', inactiveStyle)], { optional: true }),
    query(':enter', [animate('500ms', activeStyle)], { optional: true }),
  ]),
]);

const hiddenSidebarStyle = style({
  width: '0px',
});
const visibleSidebarStyle = style({
  width: 'var(--sb-width)',
});
const hiddenState = state('hidden', hiddenSidebarStyle);
const visibleState = state('visible', visibleSidebarStyle);

export const sidebarSlideInOut = trigger('sidebarSlideInOut', [
  hiddenState,
  visibleState,
  transition('hidden => visible', [animate('650ms 400ms ease-in-out')]),
  transition('visible => hidden', [animate('250ms ease-in-out')]),
]);
