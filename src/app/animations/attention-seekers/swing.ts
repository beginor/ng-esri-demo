import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const swing = animation([
    animate('.75s', keyframes([
        style({
            offset: 0.2,
            transform: 'rotate3d(0, 0, 1, 15deg)'
        }),
        style({
            offset: 0.4,
            transform: 'rotate3d(0, 0, 1, -10deg)'
        }),
        style({
            offset: 0.6,
            transform: 'rotate3d(0, 0, 1, 5deg)'
        }),
        style({
            offset: 0.8,
            transform: 'rotate3d(0, 0, 1, -5deg)'
        }),
        style({
            offset: 1,
            transform: 'rotate3d(0, 0, 1, 0deg)'
        })
    ]))
]);
