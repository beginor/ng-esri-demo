import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const lightSpeedOut = animation([
    style({
        animationTimingFunction: 'ease-in'
    }),
    animate('.75s', keyframes([
        style({
            offset: 0,
            opacity: 1
        }),
        style({
            offset: 1,
            transform: 'translate3d(100%, 0, 0) skewX(30deg)',
            opacity: 0
        })
    ]))
]);
