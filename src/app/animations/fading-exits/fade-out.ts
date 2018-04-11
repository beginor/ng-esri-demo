import {
  animate, style, keyframes, animation
} from '@angular/animations';

export const fadeOut = animation([
  animate('1s 0.1s', keyframes([
      style({
          offset: 0,
          opacity: 1
      }),
      style({
          offset: 1,
          opacity: 1
      })
  ]))
]);
