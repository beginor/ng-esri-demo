import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const bounceOutDown = animation([
    animate('.75s', keyframes([
        style({
            offset: 0.2,
            transform: 'translate3d(0, 10px, 0)'
        }),
        style({
            offset: 0.4,
            opacity: 1,
            transform: 'translate3d(0, -20px, 0)'
        }),
        style({
            offset: 0.45,
            opacity: 1,
            transform: 'translate3d(0, -20px, 0)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translate3d(0, 2000px, 0)'
        })
    ]))
]);
