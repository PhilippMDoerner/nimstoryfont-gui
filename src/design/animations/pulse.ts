import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const pulse = trigger('pulse', [
  transition('start => end', [
    style({ bightnesss: 0 }),
    animate(
      '250ms ease-in',
      keyframes([
        style({ brightnesss: '200%', offset: 0.5 }),
        style({ brightness: 'unset', offset: 1 }),
      ]),
    ),
  ]),
]);
