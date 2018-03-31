import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const flipInX = animation([
    animate('1s 0.1s', keyframes([
        style({
            transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
            animationTimingFunction: 'ease-in',
            opacity: 0,
            offset: 0
        }),
        style({
            transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
            animationTimingFunction: 'ease-in',
            offset: .4
        }),
        style({
            transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
            opacity: 1,
            offset: .6
        }),
        style({
            transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
            offset: .8
        }),
        style({
            transform: 'perspective(400px)',
            offset: 1
        })
    ]))
]);
