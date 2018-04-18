import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const rotateOutDownRight = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transformOrigin: 'right bottom',
            opacity: 1
        }),
        style({
            offset: 1,
            transformOrigin: 'right bottom',
            transform: 'rotate3d(0, 0, 1, -45deg)',
            opacity: 0
        })
    ]))
]);
