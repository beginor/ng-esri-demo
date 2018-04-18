import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const wobble = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 0.15,
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'
        }),
        style({
            offset: 0.30,
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'
        }),
        style({
            offset: 0.45,
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'
        }),
        style({
            offset: 0.60,
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'
        }),
        style({
            offset: 0.75,
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
