import {
  animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const rotateOut: AnimationReferenceMetadata = animation([
  animate('.75s', keyframes([
      style({
          offset: 0,
          transformOrigin: 'center',
          opacity: 1
      }),
      style({
          offset: 1,
          transformOrigin: 'center',
          transform: 'rotate3d(0, 0, 1, 200deg)',
          opacity: 0
      })
  ]))
]);
