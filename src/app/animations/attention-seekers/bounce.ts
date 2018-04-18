import {
    animate, transition, style, keyframes, animation
} from '@angular/animations';

export const bounce = animation([
    style({
        transformOrigin: 'center bottom'
    }),
    animate('.75s', keyframes([
        style({
            offset: 0,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 0.2,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 0.4,
            // tslint:disable-next-line:max-line-length
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -30px, 0)'
        }),
        style({
            offset: 0.43,
            // tslint:disable-next-line:max-line-length
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -30px, 0)'
        }),
        style({
            offset: 0.53,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 0.7,
            // tslint:disable-next-line:max-line-length
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -15px, 0)'
        }),
        style({
            offset: 0.8,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 0.9,
            transform: 'translate3d(0, -4px, 0)'
        }),
        style({
            offset: 1,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
