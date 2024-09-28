import {
  animate,
  query,
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
  opaacity: 0,
});
const activeStyle = style({
  transform: 'translateX(0%)',
  opacity: 1,
});

export const slideInOut = trigger('slideInOut', [
  transition('* => *', [
    query(':enter', [inactiveStyle], { optional: true }),
    query(':leave', [animate('500ms', inactiveStyle)], { optional: true }),
    query(':enter', [animate('500ms', activeStyle)], { optional: true }),
  ]),
]);

export const slideInOut2 = trigger('slideInOut2', [
  transition(':enter', [
    inactiveStyle, //apply default styles before animation starts
    animate('1000ms ease-in-out', activeStyle),
  ]),
  transition(':leave', [
    activeStyle, //apply default styles before animation starts
    animate('1000ms ease-in-out', inactiveStyle),
  ]),
]);
