import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const zoomOutUp = animation([
    animate('.75s', keyframes([
        style({
            offset: 0
        }),
        style({
            offset: 0.4,
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        })
    ]))
]);
