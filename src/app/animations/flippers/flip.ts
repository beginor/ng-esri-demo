import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const flip = animation([
    style({
        backfaceVisibility: 'visible'
    }),
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
            animationTimingFunction: 'ease-out'
        }),
        style({
            offset: 0.4,
            // tslint:disable-next-line:max-line-length
            transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
            animationTimingFunction: 'ease-out'
        }),
        style({
            offset: 0.5,
            // tslint:disable-next-line:max-line-length
            transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
            animationTimingFunction: 'ease-in'
        }),
        style({
            offset: 0.8,
            transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95)',
            animationTimingFunction: 'ease-in'
        }),
        style({
            offset: 1,
            transform: 'perspective(400px)',
            animationTimingFunction: 'ease-in'
        })
    ]))
]);
