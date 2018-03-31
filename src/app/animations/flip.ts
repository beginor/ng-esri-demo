import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const flip = animation([
    animate('1s 0.1s', keyframes([
        style({
            transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
            animationTimingFunction: 'ease-out',
            offset: 0
        }),
        style({
            // tslint:disable-next-line:max-line-length
            transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
            animationTimingFunction: 'ease-out',
            offset: .4
        }),
        style({
            // tslint:disable-next-line:max-line-length
            transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
            animationTimingFunction: 'ease-in',
            offset: .5
        }),
        style({
            transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95)',
            animationTimingFunction: 'ease-in',
            offset: .8
        }),
        style({
            transform: 'perspective(400px)',
            animationTimingFunction: 'ease-in',
            offset: 1
        })
    ]))
]);
