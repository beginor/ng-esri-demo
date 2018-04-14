import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const flipOutY = animation([
    style({
        backfaceVisibility: 'visible !important'
    }),
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'perspective(400px)'
        }),
        style({
            offset: 0.3,
            transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
            opacity: 1
        }),
        style({
            offset: 1,
            transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
            opacity: 0
        })
    ]))
]);
