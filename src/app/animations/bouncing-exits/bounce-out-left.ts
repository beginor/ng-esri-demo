import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const bounceOutLeft = animation([
    animate('.75s', keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translate3d(20px, 0, 0)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translate3d(-2000px, 0, 0)'
        })
    ]))
]);
