import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const bounceIn = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
        }),
        style({
            offset: 0.2,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 0.3,
            transform: 'scale3d(1.1, 1.1, 1.1)'
        }),
        style({
            offset: 0.4,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 0.6,
            transform: 'scale3d(0.9, 0.9, 0.9)'
        }),
        style({
            offset: 0.6,
            opacity: 1,
            transform: 'scale3d(1.03, 1.03, 1.03)'
        }),
        style({
            offset: 0.8,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            // opacity: 0.5,
            transform: 'scale3d(0.97, 0.97, 0.97)'
        }),
        style({
            offset: 1,
            opacity: 1,
            transform: 'scale3d(1, 1, 1)'
        })
    ]))
]);
