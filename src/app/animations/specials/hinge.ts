import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const hinge = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out'
        }),
        style({
            offset: 0.2,
            transform: 'rotate3d(0, 0, 1, 80deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out'
        }),
        style({
            offset: 0.4,
            transform: 'rotate3d(0, 0, 1, 60deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out',
            opacity: 1
        }),
        style({
            offset: 0.6,
            transform: 'rotate3d(0, 0, 1, 80deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out'
        }),
        style({
            offset: 0.8,
            transform: 'rotate3d(0, 0, 1, 60deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out',
            opacity: 1
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 700px, 0)',
            opacity: 0
        })
    ]))
]);
